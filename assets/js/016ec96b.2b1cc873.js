(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{412:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return n?o.a.createElement(f,a(a({ref:t},s),{},{components:n})):o.a.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(412)),c=["components"],a={title:"rucio-undertaker"},u={unversionedId:"bin/rucio-undertaker",id:"bin/rucio-undertaker",isDocsHomePage:!1,title:"rucio-undertaker",description:"`",source:"@site/../docs/bin/rucio-undertaker.md",sourceDirName:"bin",slug:"/bin/rucio-undertaker",permalink:"/documentation/bin/rucio-undertaker",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-undertaker.md",version:"current",frontMatter:{title:"rucio-undertaker"},sidebar:"docs",previous:{title:"rucio-transmogrifier",permalink:"/documentation/bin/rucio-transmogrifier"},next:{title:"rucio",permalink:"/documentation/bin/rucio"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-undertaker [-h] [--run-once] [--total-workers TOTAL_WORKERS]\n                        [--chunk-size CHUNK_SIZE] [--sleep-time SLEEP_TIME]\n\nThe Undertaker deamon is responsible for managing expired DIDs. It deletes\nDIDs, but not replicas by checking if there are DIDs where the 'expired_at'\ndate property is older than the current timestamp.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-workers TOTAL_WORKERS\n                        Total number of workers\n  --chunk-size CHUNK_SIZE\n                        Chunk size\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n\nCreate a DID that is already expired by setting its lifetime to -1:: $ python\nfrom rucio.db.sqla.constants import DIDType from rucio.client.didclient import\nDIDClient client = DIDClient() client.add_did(scope='mock', name='test',\ntype=DIDType.DATASET, lifetime=-1) Check if the DID exists:: $ rucio list-dids\nmock:test +--------------+--------------+ | SCOPE:NAME | [DID TYPE] |\n|--------------+--------------| | mock:test | DATASET |\n+--------------+--------------+ Run the daemon:: $ rucio-undertaker --run-once\nCheck if the DID exists:: $ rucio list-dids mock:test\n+--------------+--------------+ | SCOPE:NAME | [DID TYPE] |\n|--------------+--------------| +--------------+--------------+\n")))}l.isMDXComponent=!0}}]);