(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{233:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),i=(n(0),n(412)),a=["components"],c={title:"rucio-minos-temporary-expiration"},u={unversionedId:"bin/rucio-minos-temporary-expiration",id:"bin/rucio-minos-temporary-expiration",isDocsHomePage:!1,title:"rucio-minos-temporary-expiration",description:"`",source:"@site/../docs/bin/rucio-minos-temporary-expiration.md",sourceDirName:"bin",slug:"/bin/rucio-minos-temporary-expiration",permalink:"/documentation/bin/rucio-minos-temporary-expiration",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-minos-temporary-expiration.md",version:"current",frontMatter:{title:"rucio-minos-temporary-expiration"},sidebar:"docs",previous:{title:"rucio-light-reaper",permalink:"/documentation/bin/rucio-light-reaper"},next:{title:"rucio-minos",permalink:"/documentation/bin/rucio-minos"}},p=[],s={toc:p};function l(e){var r=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-minos-temporary-expiration [-h] [--run-once] [--threads THREADS]\n                                        [--bulk BULK]\n                                        [--sleep-time SLEEP_TIME]\n\nThis special type of minos daemon lists the expired TEMPORARY_UNAVAILABLE\nreplicas and puts them back into AVAILABLE state.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n")))}l.isMDXComponent=!0},412:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),f=t,b=l["".concat(a,".").concat(f)]||l[f]||m[f]||i;return n?o.a.createElement(b,c(c({ref:r},p),{},{components:n})):o.a.createElement(b,c({ref:r},p))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);