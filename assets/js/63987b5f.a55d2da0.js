(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(411)),o=["components"],c={title:"1.26.12",sidebar_label:"1.26.12"},s={unversionedId:"release-notes/1.26.12",id:"release-notes/1.26.12",isDocsHomePage:!1,title:"1.26.12",description:"General",source:"@site/../docs/release-notes/1.26.12.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.12",permalink:"/documentation/release-notes/1.26.12",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.12.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1653488775,formattedLastUpdatedAt:"5/25/2022",sidebar_label:"1.26.12",frontMatter:{title:"1.26.12",sidebar_label:"1.26.12"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Release management: Update paramiko dependency due to security advisory ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5412"},"#5412")),Object(i.b)("li",{parentName:"ul"},"Release management: Pin the ",Object(i.b)("inlineCode",{parentName:"li"},"werkzeug")," package version prior to 2.1.0 in Flask 1.1.2 versions ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5419"},"#5419")),Object(i.b)("li",{parentName:"ul"},"Replicas: geoip database is always downloaded, even if no URL configured/License key given ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5233"},"#5233")),Object(i.b)("li",{parentName:"ul"},"Testing: Print the integration test server logs in the actions ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5253"},"#5253"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Jinja2 3.1.0 is incompatible with Flask 1.1.2 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5398"},"#5398")),Object(i.b)("li",{parentName:"ul"},"Release management: Flask fails after itsdangerous module\u2019s update ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5258"},"#5258")),Object(i.b)("li",{parentName:"ul"},"Testing: test_upload_download of test-server fails ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5023"},"#5023")),Object(i.b)("li",{parentName:"ul"},"Testing: ",Object(i.b)("inlineCode",{parentName:"li"},"common/test_rucio_server")," file path bug ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5037"},"#5037"))))}p.isMDXComponent=!0},411:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);