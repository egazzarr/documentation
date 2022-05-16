(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(390)),c=["components"],u={title:"1.18.0 'Invisible Donkey'",sidebar_label:"1.18.0 'Invisible Donkey'"},s={unversionedId:"release-notes/1.18.0",id:"release-notes/1.18.0",isDocsHomePage:!1,title:"1.18.0 'Invisible Donkey'",description:"Update Instructions",source:"@site/../docs/release-notes/1.18.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.0",permalink:"/documentation/release-notes/1.18.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.0.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1652712580,formattedLastUpdatedAt:"5/16/2022",sidebar_label:"1.18.0 'Invisible Donkey'",frontMatter:{title:"1.18.0 'Invisible Donkey'",sidebar_label:"1.18.0 'Invisible Donkey'"}},o=[{value:"Update Instructions",id:"update-instructions",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Features",id:"features-1",children:[]}]}],l={toc:o};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"update-instructions"},"Update Instructions"),Object(i.b)("p",null,"This feature release requires a database schema update. Please consult the documentation about updating your database schema."),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Generic metadata support ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1195"},"#1195")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Extend the bad_replicas table with bytes ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1370"},"#1370")),Object(i.b)("li",{parentName:"ul"},"Rules: add_rule on a constituent should make rule on archive ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1376"},"#1376"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Release management: Change urllib3 version to >=1.23 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1523"},"#1523")),Object(i.b)("li",{parentName:"ul"},"Release management: Change flask version to >=0.12.3 due to CVE-2018-1000656 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1524"},"#1524"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Release management: pip install rucio fails with newer versions of pip ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1463"},"#1463"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: removing download() method from downloadclient ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1378"},"#1378")),Object(i.b)("li",{parentName:"ul"},"Clients: Human friendly limit setting ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1529"},"#1529"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Using summary file in upload API will crash ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1532"},"#1532"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"features-1"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Rucio UI RSE admin view ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/80"},"#80"))))}b.isMDXComponent=!0},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,u(u({ref:t},o),{},{components:n})):a.a.createElement(m,u({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);