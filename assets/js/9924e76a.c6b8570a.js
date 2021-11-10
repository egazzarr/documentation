(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{233:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(365)),s=["components"],i={id:"Additional-layers-and-Resources",title:"Additional Layers and Resources",sidebar_label:"Additional Layers and Resources"},l={unversionedId:"Additional-layers-and-Resources",id:"Additional-layers-and-Resources",isDocsHomePage:!1,title:"Additional Layers and Resources",description:"In addition to the four main layers, we have  the storage resources & transfer tools, as well as the underlying persistent layers. These are represented in the architecture diagram by the different queuing systems, transactional relational databases, & analytics storage on non-relational databases.",source:"@site/../docs/Additional-layers-&-Resources.md",sourceDirName:".",slug:"/Additional-layers-and-Resources",permalink:"/documentation/Additional-layers-and-Resources",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/Additional-layers-&-Resources.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1636549944,formattedLastUpdatedAt:"11/10/2021",sidebar_label:"Additional Layers and Resources",frontMatter:{id:"Additional-layers-and-Resources",title:"Additional Layers and Resources",sidebar_label:"Additional Layers and Resources"},sidebar:"docs",previous:{title:"Main Components of Rucio",permalink:"/documentation/Main-components-of-rucio"},next:{title:"Requirements",permalink:"/documentation/requirements"}},c=[],d={toc:c};function u(e){var t=e.components,r=Object(n.a)(e,s);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In addition to the four ",Object(o.b)("a",{parentName:"p",href:"/documentation/Main-components-of-rucio"},"main layers"),", we have  the storage resources & transfer tools, as well as the underlying persistent layers. These are represented in the architecture diagram by the different ",Object(o.b)("em",{parentName:"p"},"queuing systems"),", ",Object(o.b)("em",{parentName:"p"},"transactional")," relational databases, & ",Object(o.b)("em",{parentName:"p"},"analytics")," storage on non-relational databases."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Storage & Transfer Tools layer")),Object(o.b)("p",null,"The Storage layer is responsible for the various interactions with different grid middleware tools & storage systems. The transfer tool interface is a feature of Rucio that enables the daemons to submit, query, and cancel transfers generically & independently from the actual transfer service being used."),Object(o.b)("p",null,"This layer is not a software that resides in a datacenter but is more representative of the various abstractions in a storage system. It can be configured dynamically & centrally to suite requirements."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Persistence Layer")),Object(o.b)("p",null,"This is the layer responsible for keeping all the data & application states for all daemons. Also known as the ",Object(o.b)("strong",{parentName:"p"},"catalog"),", it requires a transactional database."),Object(o.b)("p",null,"The persistence layer supports many different types of transactions relational database management systems such as SQLite, MySQL, PostgreSQL, or Oracle. Both upgrading & downgrading of the database schema are supported."))}u.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=a,f=u["".concat(s,".").concat(b)]||u[b]||p[b]||o;return r?n.a.createElement(f,i(i({ref:t},c),{},{components:r})):n.a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);