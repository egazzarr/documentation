(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),c=(t(0),t(350)),a=["components"],u={title:"Running rucio-abacus-account"},i={unversionedId:"bin/rucio-abacus-account",id:"bin/rucio-abacus-account",isDocsHomePage:!1,title:"Running rucio-abacus-account",description:"`",source:"@site/../docs/bin/rucio-abacus-account.md",sourceDirName:"bin",slug:"/bin/rucio-abacus-account",permalink:"/documentation/bin/rucio-abacus-account",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-abacus-account.md",version:"current",frontMatter:{title:"Running rucio-abacus-account"}},s=[],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"usage: rucio-abacus-account [-h] [--run-once] [--threads THREADS]\n                            [--enable-history]\n\nThe Abacus-Account daemon is responsible for updating account usages. It\nchecks if there are new entries in the UpdatedAccountCounter table and updates\nthe account counters in the AccountCounter table by adding or substrating the\namount and size of files and recalculating the quotas.\n\noptional arguments:\n  -h, --help         show this help message and exit\n  --run-once         One iteration only\n  --threads THREADS  Concurrency control: total number of threads on this\n                     process\n  --enable-history   Record account usage into history table every hour.\n\nUpload a file:: $ rucio upload --rse MOCK --scope mock filename.txt Check\naccount usage:: $ rucio list-account-usage username\n+-------+---------+---------+--------------+ | RSE | USAGE | LIMIT | QUOTA\nLEFT | |-------+---------+---------+--------------|\n+-------+---------+---------+--------------+ Run the daemon:: $ rucio-abacus-\naccount --run-once Check account usage again:: $ rucio list-account-usage\nusername +-------+------------+---------+--------------+ | RSE | USAGE | LIMIT\n| QUOTA LEFT | |-------+------------+---------+--------------| | MOCK |\n211.724 kB | 0.000 B | 0.000 B |\n+-------+------------+---------+--------------+\n")))}p.isMDXComponent=!0},350:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,d=p["".concat(a,".").concat(f)]||p[f]||b[f]||c;return t?o.a.createElement(d,u(u({ref:n},s),{},{components:t})):o.a.createElement(d,u({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=f;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);