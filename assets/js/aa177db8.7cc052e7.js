(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{240:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),i=(r(0),r(361)),a=["components"],c={title:"Running rucio-c3po"},s={unversionedId:"bin/rucio-c3po",id:"bin/rucio-c3po",isDocsHomePage:!1,title:"Running rucio-c3po",description:"`",source:"@site/../docs/bin/rucio-c3po.md",sourceDirName:"bin",slug:"/bin/rucio-c3po",permalink:"/documentation/bin/rucio-c3po",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-c3po.md",version:"current",frontMatter:{title:"Running rucio-c3po"}},p=[],l={toc:p};function u(e){var n=e.components,r=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-c3po [-h] [--run-once] [--threads THREADS] [--only-workload]\n                  [--dry_run DRY_RUN] [--sampling] [--algorithms ALGORITHMS]\n                  [--datatypes DATATYPES] [--dest_rse_expr DEST_RSE_EXPR]\n                  [--max_bytes_hour MAX_BYTES_HOUR]\n                  [--max_files_hour MAX_FILES_HOUR]\n                  [--max_bytes_hour_rse MAX_BYTES_HOUR_RSE]\n                  [--max_files_hour_rse MAX_FILES_HOUR_RSE]\n                  [--min_popularity MIN_POPULARITY]\n                  [--min_recent_requests MIN_RECENT_REQUESTS]\n                  [--max_replicas MAX_REPLICAS]\n                  [--waiting-time-read-free-space WAITING_TIME_READ_FREE_SPACE]\n                  [--waiting-time-read-workload WAITING_TIME_READ_WORKLOAD]\n                  [--waiting-time-print-workload WAITING_TIME_PRINT_WORKLOAD]\n                  [--waiting-time-read-dids WAITING_TIME_READ_DIDS]\n                  [--waiting-time-place-replica WAITING_TIME_PLACE_REPLICA]\n                  [--sleep-time SLEEP_TIME]\n\nThe C3PO daemon is responsible for dynamic data placement.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: number of threads\n  --only-workload       Only run the workload collector\n  --dry_run DRY_RUN, --dry-run DRY_RUN\n                        Do not create any rules\n  --sampling            In the end flip a to decide to create a rule or not\n  --algorithms ALGORITHMS\n                        The placement algorithm or, if in dry_run, a comma\n                        separated list of algorithms\n  --datatypes DATATYPES\n                        Comma separated list of datatype that should trigger\n                        the placement\n  --dest_rse_expr DEST_RSE_EXPR, --dest-rse-expr DEST_RSE_EXPR\n                        RSE expression defining the allowed destination RSEs\n  --max_bytes_hour MAX_BYTES_HOUR, --max-bytes-hour MAX_BYTES_HOUR\n                        Max number of bytes that c3po is allow to replicate\n                        per hour\n  --max_files_hour MAX_FILES_HOUR, --max-files-hour MAX_FILES_HOUR\n                        Max number of files that c3po is allow to replicate\n                        per hour\n  --max_bytes_hour_rse MAX_BYTES_HOUR_RSE, --max-bytes-hour-rse MAX_BYTES_HOUR_RSE\n                        Max number of bytes that c3po is allow to replicate\n                        per hour per rse\n  --max_files_hour_rse MAX_FILES_HOUR_RSE, --max-files-hour-rse MAX_FILES_HOUR_RSE\n                        Max number of files that c3po is allow to replicate\n                        per hour prse_rse\n  --min_popularity MIN_POPULARITY, --min-popularity MIN_POPULARITY\n                        Min number of popularity accesses for a DID in the\n                        last 7 days to trigger\n  --min_recent_requests MIN_RECENT_REQUESTS, --min-recent-requests MIN_RECENT_REQUESTS\n                        Min number of times a DID has to be requested in the\n                        last hour to trigger\n  --max_replicas MAX_REPLICAS, --max-replicas MAX_REPLICAS\n                        Max number of replicas above which not to trigger\n                        anymore\n  --waiting-time-read-free-space WAITING_TIME_READ_FREE_SPACE\n                        Waiting time for reading free space\n  --waiting-time-read-workload WAITING_TIME_READ_WORKLOAD\n                        Waiting time for reading workload\n  --waiting-time-print-workload WAITING_TIME_PRINT_WORKLOAD\n                        Waiting time for printing workload\n  --waiting-time-read-dids WAITING_TIME_READ_DIDS\n                        Waiting time for reading dids\n  --waiting-time-place-replica WAITING_TIME_PLACE_REPLICA\n                        Waiting time for placing replicas\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n")))}u.isMDXComponent=!0},361:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=t,d=u["".concat(a,".").concat(m)]||u[m]||_[m]||i;return r?o.a.createElement(d,c(c({ref:n},p),{},{components:r})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);