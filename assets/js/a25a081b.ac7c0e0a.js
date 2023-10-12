"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[5131],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},k=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),g=d(r),m=a,p=g["".concat(o,".").concat(m)]||g[m]||u[m]||i;return r?n.createElement(p,l(l({ref:t},k),{},{components:r})):n.createElement(p,l({ref:t},k))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={title:"Hva er IntArk i praksis, for utviklere"},l=void 0,s={unversionedId:"datadeling/malgrupper/utvikler/intro",id:"datadeling/malgrupper/utvikler/intro",title:"Hva er IntArk i praksis, for utviklere",description:"Hva du som utvikler trenger \xe5 vite om IntArk, enten du lager integrasjoner",source:"@site/docs/datadeling/malgrupper/utvikler/intro.md",sourceDirName:"datadeling/malgrupper/utvikler",slug:"/datadeling/malgrupper/utvikler/intro",permalink:"/docs/datadeling/malgrupper/utvikler/intro",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/malgrupper/utvikler/intro.md",tags:[],version:"current",lastUpdatedAt:1697103066,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{title:"Hva er IntArk i praksis, for utviklere"},sidebar:"datadeling",previous:{title:"IntArk for utviklere",permalink:"/docs/datadeling/malgrupper/utvikler/"},next:{title:"Integrasjonsprinsippene for IntArk",permalink:"/docs/datadeling/prinsippene"}},o={},d=[{value:"Hva er IntArk for meg som utvikler?",id:"hva-er-intark-for-meg-som-utvikler",level:2},{value:"Hva m\xe5 jeg gj\xf8re i praksis?",id:"hva-m\xe5-jeg-gj\xf8re-i-praksis",level:2},{value:"Hva du m\xe5 tenke p\xe5",id:"hva-du-m\xe5-tenke-p\xe5",level:2}],k={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hva du som utvikler trenger \xe5 vite om IntArk, enten du lager integrasjoner\neller tjenester. Dokumentet fordrer at du har lest det mer generelle ",(0,a.kt)("a",{parentName:"p",href:"https://www.uninett.no/Intark"},"Hva er\nIntArk"),"."),(0,a.kt)("h2",{id:"hva-er-intark-for-meg-som-utvikler"},"Hva er IntArk for meg som utvikler?"),(0,a.kt)("p",null,"IntArk best\xe5r av en del overordnede f\xf8ringer for hvordan vi skal dele data i\nsektoren, og noen tekniske verkt\xf8y for \xe5 gj\xf8re dette enklere. Meningen med\nIntArk er \xe5 gj\xf8re det enklere \xe5 dele data i sektoren, for \xe5 enklere kunne\ndigitalisere."),(0,a.kt)("p",null,"For deg som utvikler finner du det mest praktiske i:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Du m\xe5 registrere dine API i institusjonens API manager, og styre data via\ninstitusjonen API gateway."),(0,a.kt)("li",{parentName:"ul"},"Du m\xe5 f\xe5 tilgang til andre sine API via institusjonens API manager."),(0,a.kt)("li",{parentName:"ul"},"Du kan f\xe5 tilgang til notifikasjoner fra kildesystemer du har tilgang til.")),(0,a.kt)("p",null,"Merk at du m\xe5 ogs\xe5 forholde deg til f\xf8ringene fra IntArk, spesielt hvis du utvikler p\xe5 en tjeneste som inneholder data som andre vil kunne bruke."),(0,a.kt)("h2",{id:"hva-m\xe5-jeg-gj\xf8re-i-praksis"},"Hva m\xe5 jeg gj\xf8re i praksis?"),(0,a.kt)("p",null,"Du som utvikler kildesystemer m\xe5:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tilgjengeliggj\xf8re dine data via ",(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/god-praksis/api-design"},"et API som f\xf8lger anbefalingene fra IntArk"),"."),(0,a.kt)("li",{parentName:"ul"},"Dokumentere ditt API. F.eks. med OpenAPI (swagger)."),(0,a.kt)("li",{parentName:"ul"},"Produsere ",(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/god-praksis/notifikasjonsdesign"},"notifikasjoner som f\xf8lger anbefalingene fra IntArk"),"."),(0,a.kt)("li",{parentName:"ul"},"Registrere ditt API i ",(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/teknisk-plattform/oversikt"},"institusjonens API manager"),".")),(0,a.kt)("p",null,"Som konsument m\xe5 du:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finne og s\xf8ke om tilgang til data fra kildesystemer. Tilganger og data skal g\xe5 gjennom institusjonens API manger og API gateway.")),(0,a.kt)("h2",{id:"hva-du-m\xe5-tenke-p\xe5"},"Hva du m\xe5 tenke p\xe5"),(0,a.kt)("p",null,"IntArk setter noen f\xf8ringer for integrasjoner, slik at vi enklere kan samarbeide om integrasjoner og datadeling. Noen f\xf8ringer vil kunne gj\xf8re det vanskeligere for enkelte, selv om det er til nytte for sektoren som helhet."),(0,a.kt)("p",null,"Noen eksempler p\xe5 f\xf8ringer fra IntArk:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Du m\xe5 v\xe6re bevisst p\xe5 dine data. Hvis ditt system inneholder data, m\xe5 de defineres et felles sted i din institusjon, s\xe5 andre kan finne de.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Hvis du trenger noen data, m\xe5 du f\xf8rst sjekke om dette, eller noe tilsvarende, finnes i andre kildesystemer. Prioriter gjenbruk av data. Hvis det finnes tilsvarende data andre steder, men ikke kan brukes for eksempel grunnet for d\xe5rlig datakvalitet, plikter du \xe5 informere gitt dataeier om dette. \xc5 produsere nye, tiln\xe6rmet like data, vil kunne skape forvirring og ekstraarbeid for institusjonen senere."))),(0,a.kt)("li",{parentName:"ul"},"Alle kildesystem m\xe5 ha konkretisert en dataeier, som har ansvaret for \xe5 tilgjengeliggj\xf8re data. Dette kan ofte vere den samme som tjenesteeier."),(0,a.kt)("li",{parentName:"ul"},"Alle kildesystem er pliktige til \xe5 gj\xf8re sine data tilgjengelige via et API. Det finnest f\xf8ringer og anbefalinger rundt utforming av API, bruk av bransjestandarder, og beste praksis rundt bruk av protokoller."),(0,a.kt)("li",{parentName:"ul"},"Kildesystem skal ikke utvikle skredders\xf8m per konsument, men er pliktig til \xe5 eksponere sine data i et mest mulig generelt grensesnitt. Konsumerende tjenester er selv ansvarlige for sin forretningslogikk."),(0,a.kt)("li",{parentName:"ul"},"Som konsument kan du kreve tilgang til data fra andre kildesystemer, s\xe5 lenge du har et reelt behov, men du kan ikke kreve spesialtilpasninger.")))}u.isMDXComponent=!0}}]);