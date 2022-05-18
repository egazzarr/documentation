(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{169:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),i=(n(0),n(412)),c=["components"],a={title:"rucio-judge-cleaner"},s={unversionedId:"bin/rucio-judge-cleaner",id:"bin/rucio-judge-cleaner",isDocsHomePage:!1,title:"rucio-judge-cleaner",description:"`",source:"@site/../docs/bin/rucio-judge-cleaner.md",sourceDirName:"bin",slug:"/bin/rucio-judge-cleaner",permalink:"/documentation/bin/rucio-judge-cleaner",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-judge-cleaner.md",version:"current",frontMatter:{title:"rucio-judge-cleaner"},sidebar:"docs",previous:{title:"rucio-hermes2",permalink:"/documentation/bin/rucio-hermes2"},next:{title:"rucio-judge-evaluator",permalink:"/documentation/bin/rucio-judge-evaluator"}},l=[],u={toc:l};function d(e){var r=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-judge-cleaner [-h] [--run-once] [--threads THREADS]\n                           [--sleep-time SLEEP_TIME]\n\nThe Judge-Cleaner daemon is responsible for cleaning expired replication\nrules. It deletes rules by checking if the 'expired_at' date property is older\nthan the current timestamp. If the rule is expired, it will first remove one\nlock for the replica and parent datasets if the DID belongs to any. Then it\nwill set a tombstone to the replica to mark it as deletable if there are no\nrules protecting the replica. After these steps, the rule gets deleted.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: total number of threads on this\n                        process\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n\nUpload a file to your RSE:: $ rucio upload --rse MOCK --scope mock --name file\nfilename.txt Set a replication rule for the file with a lifetime of one\nsecond:: $ rucio add-rule mock:file 1 MOCK2 --lifetime 1 Check the replication\nrules and the replicas:: $ rucio list-rules mock:file ID ACCOUNT SCOPE:NAME\nSTATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC) CREATED (UTC)\n-------------------------------- --------- ------------ ----------------------\n---------------- -------- ------------------- -------------------\nc273c7ed75724143ad21c667e659456b root mock:file REPLICATING[0/1/0] MOCK2 1\n2018-12-03 09:53:09 2018-12-03 09:53:08 06f012771b0546dca0c908441c048964 root\nmock:file OK[1/0/0] MOCK 1 2018-12-03 09:52:19 $ python from rucio.db.sqla\nimport session, models from rucio.core.rse import get_rse_id rse_id =\nget_rse_id('MOCK2')\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().tombstone // None\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().lock_cnt // 1 The first rule was created\nwith an expiration date of one second after the creation date. Run the\ndaemon:: $ rucio-judge-cleaner --run-once Check the replication rules and the\nreplicas:: $ rucio list-rules mock:file ID ACCOUNT SCOPE:NAME\nSTATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC) CREATED (UTC)\n-------------------------------- --------- ------------ ----------------------\n---------------- -------- --------------- -------------------\n06f012771b0546dca0c908441c048964 root mock:file OK[1/0/0] MOCK 1 2018-12-03\n09:52:19 $ python from rucio.db.sqla import session, models from\nrucio.core.rse import get_rse_id rse_id = get_rse_id('MOCK2')\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().tombstone // datetime.datetime(1970, 1,\n1, 0, 0)\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().lock_cnt // 0 The rule we created before\nwas deleted and the replica of the file on RSE MOCK2 got a tombstone because\nthere is no protecting rule anymore.\n")))}d.isMDXComponent=!0},412:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=t,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?o.a.createElement(m,a(a({ref:r},l),{},{components:n})):o.a.createElement(m,a({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);