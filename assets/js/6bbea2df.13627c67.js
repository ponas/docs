"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[9146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,k=p["".concat(o,".").concat(u)]||p[u]||g[u]||s;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<s;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const s={slug:"/datadeling/god-praksis/integrasjonsmonster/gammeldags-batch/",title:"Gammeldags fullstendig provisjonering"},l=void 0,i={unversionedId:"datadeling/god-praksis/integrasjonsmonster/gammel-batch",id:"datadeling/god-praksis/integrasjonsmonster/gammel-batch",title:"Gammeldags fullstendig provisjonering",description:'Detaljer om integrasjonsm\xf8nsteret "fullstendig provisjonering".',source:"@site/docs/datadeling/god-praksis/integrasjonsmonster/gammel-batch.md",sourceDirName:"datadeling/god-praksis/integrasjonsmonster",slug:"/datadeling/god-praksis/integrasjonsmonster/gammeldags-batch/",permalink:"/docs/datadeling/god-praksis/integrasjonsmonster/gammeldags-batch/",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/god-praksis/integrasjonsmonster/gammel-batch.md",tags:[],version:"current",lastUpdatedAt:1697103066,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{slug:"/datadeling/god-praksis/integrasjonsmonster/gammeldags-batch/",title:"Gammeldags fullstendig provisjonering"},sidebar:"datadeling",previous:{title:"API som datalager",permalink:"/docs/datadeling/god-praksis/integrasjonsmonster/datalager/"},next:{title:"Hendelsesbasert provisjonering",permalink:"/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert/"}},o={},d=[{value:"N\xe5r b\xf8r dette brukes?",id:"n\xe5r-b\xf8r-dette-brukes",level:2},{value:"Fordeler",id:"fordeler",level:2},{value:"Ulemper",id:"ulemper",level:2},{value:"Fallgruver",id:"fallgruver",level:2},{value:"Se ogs\xe5",id:"se-ogs\xe5",level:2}],m={toc:d};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Detaljer om integrasjonsm\xf8nsteret "fullstendig provisjonering".'),(0,a.kt)("p",null,"Dette er muligens det simpleste integrasjonsm\xf8nsteret som i noen tilfeller kan\nanbefales som integrasjonsm\xf8nster. Styrken til m\xf8nsteret er at det er enkelt og\nvelkjent, og derfor relativt rimelig \xe5 utvikle, og kan derfor vurderes for\nenkle, mindre tjenester."),(0,a.kt)("p",null,"Kort oppsummert er flyten i integrasjonsm\xf8nsteret:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Be om ",(0,a.kt)("em",{parentName:"li"},"alle")," data fra kildesystemets API"),(0,a.kt)("li",{parentName:"ol"},"Overskriv alle data hos konsumenten")),(0,a.kt)("p",null,"En slik fullstendig provisjonering vil vere b\xe5de tid- og ressurskrevende, s\xe5 i\npraksis blir slike integrasjoner ofte bare kj\xf8rt en gang om natta."),(0,a.kt)("p",null,"Optimalisering kan gj\xf8res, for eksempel:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Konsumenten, eller en konnektor, kan sammeligne data mellom konsument og\ntilbyder, for \xe5 redusere mengden data som m\xe5 oppdateres hos konsumenten.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tilbyderen kan ha muligheter for \xe5 filtrere ut data som hentes ut. For\neksempel \xe5 bare hente ut data som har blitt endret siden forrige\nsynkronisering. Dette vil kunne betraktelig redusere mengden data som m\xe5\nbehandles, men du vil m\xe5tte sikre at utdatere/slettet data ogs\xe5 blir slettet\nhos konsumenten."))),(0,a.kt)("p",null,"Eksempler p\xe5 tjenester som bruker dette integrasjonsm\xf8nsteret:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Gamle systemer som er vurdert til \xe5 v\xe6re for kostbare \xe5 oppgradere, uten at\ndet gir nok gevinst. Dette f\xf8lger prinsippet ","[Avvik m\xe5\nbegrunnes]","(/docs/datadeling/prinsippene/#Avvik m\xe5 begrunnes).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Gamle systemer som st\xe5r p\xe5 vent for oppgradering eller videreutvikling.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rapporteringstjenester med h\xf8y toleranse for utdaterte data."))),(0,a.kt)("h2",{id:"n\xe5r-b\xf8r-dette-brukes"},"N\xe5r b\xf8r dette brukes?"),(0,a.kt)("p",null,"Dette m\xf8nsteret b\xf8r vanligvis ikke brukes, men kan vurderes for mindre\ntjenester som ikke har behov for oppdaterte data."),(0,a.kt)("p",null,"M\xf8nsteret gjelder system-til-system-integrasjoner, alts\xe5 der sluttbrukeren ikke\ner direkte involvert."),(0,a.kt)("h2",{id:"fordeler"},"Fordeler"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ofte det enkleste og rimeligste alternativet \xe5 utvikle.")),(0,a.kt)("h2",{id:"ulemper"},"Ulemper"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Passer best for system-til-system-integrasjoner."),(0,a.kt)("li",{parentName:"ul"},"Fullstendige provisjoneringer tar tid, s\xe5 du vil f\xe5 forsinkelser. Sluttbrukere har ofte forvetninger om at tjenester skal vere klare umiddelbart."),(0,a.kt)("li",{parentName:"ul"},"Fullstendige provisjeringer er ressurskrevende, spesielt for kildesystemet, og ved store datamengder."),(0,a.kt)("li",{parentName:"ul"},"Har du veldig mange konsumenter vil det sette h\xf8yere krav til ytelsen hos tilbyderen. Dette kan kompenseres ved for eksempel caching i API manager.")),(0,a.kt)("h2",{id:"fallgruver"},"Fallgruver"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Integrerer via et standard API, og ikke ta snarveier om filer. Eldre\nkildesystemer har ofte brukt dette m\xf8nsteret, men basert seg p\xe5 \xe5 produserer\negne filer med relevante data, ofte skreddersydd per konsument. Dette frar\xe5des,\nda det reduserer muligheten for gjenbruk, og du f\xe5r sikkerhetsutfordringer\nrundt fildeling og opprydning. Selv med dette m\xf8nsteret b\xf8r data deles gjennom\net standard API.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Opprydding vil kunne skape utfordringer, spesielt ved uthenting av subsett\nfra kildesystemet."))),(0,a.kt)("h2",{id:"se-ogs\xe5"},"Se ogs\xe5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert/"},"Hendelsesbasert provisjonering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/god-praksis/api-design"},"Utforming av API"))))}g.isMDXComponent=!0}}]);