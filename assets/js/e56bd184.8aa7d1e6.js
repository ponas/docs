"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[1562],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),k=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=k(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=k(r),p=o,v=g["".concat(l,".").concat(p)]||g[p]||d[p]||i;return r?n.createElement(v,a(a({ref:t},m),{},{components:r})):n.createElement(v,a({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var k=2;k<i;k++)a[k]=r[k];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>k});var n=r(7462),o=(r(7294),r(3905));const i={description:"Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng.",title:"Mikrotjeneste"},a="Mikrotjeneste",s={unversionedId:"datadeling/begreper/mikrotjeneste",id:"datadeling/begreper/mikrotjeneste",title:"Mikrotjeneste",description:"Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng.",source:"@site/docs/datadeling/begreper/mikrotjeneste.md",sourceDirName:"datadeling/begreper",slug:"/datadeling/begreper/mikrotjeneste",permalink:"/docs/datadeling/begreper/mikrotjeneste",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/begreper/mikrotjeneste.md",tags:[],version:"current",lastUpdatedAt:1679664223,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{description:"Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng.",title:"Mikrotjeneste"},sidebar:"datadeling",previous:{title:"L\xf8s kobling",permalink:"/docs/datadeling/begreper/los-kobling"},next:{title:"Notifikasjon",permalink:"/docs/datadeling/begreper/notifikasjon"}},l={},k=[{value:"Hva er en mikrotjeneste i IntArk?",id:"hva-er-en-mikrotjeneste-i-intark",level:2},{value:"Om SOAP og REST",id:"om-soap-og-rest",level:2},{value:"Om ESB og tette koblinger",id:"om-esb-og-tette-koblinger",level:2},{value:"Om ESB og voksesmerter",id:"om-esb-og-voksesmerter",level:2},{value:"Om sentraliserte komponenter i et micro service landskap",id:"om-sentraliserte-komponenter-i-et-micro-service-landskap",level:2},{value:"Oppsummert",id:"oppsummert",level:2}],m={toc:k};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mikrotjeneste"},"Mikrotjeneste"),(0,o.kt)("p",null,"Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng."),(0,o.kt)("h2",{id:"hva-er-en-mikrotjeneste-i-intark"},"Hva er en mikrotjeneste i IntArk?"),(0,o.kt)("p",null,"En mikrotjeneste er en liten tjeneste som er spesialisert til \xe5 gj\xf8re \xe9n ting. I IntArk-sammenheng bruker vi mikrotjenester som konnektorer der det er n\xf8dvendig."),(0,o.kt)("h2",{id:"om-soap-og-rest"},"Om SOAP og REST"),(0,o.kt)("p",null,'For \xe5 forst\xe5 hvordan begrepet "micro service" vokste frem, m\xe5 vi ta et steg tilbake og se p\xe5 utviklingen av web services. Det finnes to hovedkategorier av web services: REST og SOAP. I begynnelsen var SOAP den dominerende. Dette fordi den vokste ut av objektorientert programmering. Objektorientert programmering var popul\xe6rt fordi man kunne lage objektet, f.eks. bil, og gi det egenskaper (som farge, motor, d\xf8rer, pris). SOAP var utviklet av store akt\xf8rer som IBM, Microsoft og Oracle, med Microsoft i spissen. Dette var i en tid da deres hegemoni var p\xe5 sitt st\xf8rste. REST, p\xe5 sin side, var utviklet av forskere i CERN, alts\xe5 det samme teamet som sto bak WWW. Det tok betydelig med tid f\xf8r teknologien festet seg i forretningstradisjonen. At den fikk grep, skyldtes prim\xe6rt:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Den var mye enklere \xe5 bruke og implementere"),(0,o.kt)("li",{parentName:"ul"},"Det var helt \xe5pen og uavhengig av leverand\xf8r, og enkelt \xe5 benytte p\xe5 tvers av tjenester"),(0,o.kt)("li",{parentName:"ul"},"Den var intuitiv \xe5 forst\xe5 og bruke")),(0,o.kt)("h2",{id:"om-esb-og-tette-koblinger"},"Om ESB og tette koblinger"),(0,o.kt)("p",null,"I den gamle SOAP tiden var integrasjon i st\xf8rre grad overlatt til eksperter. Integrasjoner var gjerne samlet i en kjerne som ga sentral kontroll. Disse kjernene ble kalt Enterprise Service Bus (ESB) eller tjenestebuss. (Disse skiller seg fra UiOs bruk av termen i sin integrasjonsarkitektur, der ESB/tjenestebuss bare betyr at tjenesten er sentralisert). ESB-en tilb\xf8d standardiserte integrasjonsgrensesnitt (API), som konsumentene kunne koble seg opp mot. I SOAP var integrasjoner bygget som kommandoer med argumenter, slik man kjenner fra kommandolinjeprogrammer. For \xe5 gj\xf8re det enklere \xe5 integrere ble det ofte laget egne API-programmer som kj\xf8rte p\xe5 klienten. P\xe5 samme m\xe5te var det flere API p\xe5 bussen som delte biblioteker med programkode. Slik kunne man gjenbruke kode og spare utviklingsarbeid, men det medf\xf8rte ogs\xe5 tette\xa0 koblinger. Tette koblinger vil si at hvis man endrer noe i produsent eller API, m\xe5 det ogs\xe5 samtidig endres i konsumenten. Dvs at om man f.eks. oppgraderer en database fra\xa0 versjon 8 til 9, s\xe5 m\xe5 man ogs\xe5 oppgradere biblioteket i bussen for \xe5 reflektere dette. Siden dette biblioteket kan v\xe6re delt med et annet API, hvor databasen enda ikke er oppgradert, m\xe5 det h\xe5ndteres, ellers vil API-et knekke. Videre m\xe5 klienten/konsumenten oppgradere sitt bibliotek. Hvis konsumenten benytter begge API-er, alts\xe5 b\xe5de det som ble oppgradert til versjon 9 og det som fortsatt er p\xe5 versjon 8, er dette ofte umulig \xe5 samkj\xf8re. Uansett var det komplisert."),(0,o.kt)("p",null,"REST ikke krever noe API-spesifikk program p\xe5 konsumenten, men REST kan likevel benytte delte biblioteker og ha de samme utfordingene i en ESB. En micro service deler ikke biblioteker med andre API. Det er noe av det som gj\xf8r den til en micro service; Man kan gj\xf8re endringer uten at det affekterer noen andre API."),(0,o.kt)("h2",{id:"om-esb-og-voksesmerter"},"Om ESB og voksesmerter"),(0,o.kt)("p",null,'ESB-er hadde/har mye funksjonalitet. De kan se hvor en datapakke skal ved \xe5 se p\xe5 overskrifter, de kan konvertere formater og protokoller, sette sammen data mm. Dette medf\xf8rte at man etter hvert fikk en lock in situasjon mot sin egen ESB, den ble veldig dyr \xe5 skifte ut. Dessuten medf\xf8rte kompleksiteten i ESB-en at integrasjoner krevde h\xf8y grad av spesialkompetanse, men ble s\xe5rbare p\xe5 turn-over, og det tok lang tid \xe5 integrere. Videre har gjerne en ESB mye annen logikk, dvs. vurderinger som :"F\xf8rst skal jeg gj\xf8re det, og hvis svaret er A, s\xe5 skal jeg gj\xf8r ditt, mens hvis svaret er B, s\xe5 skal jeg gj\xf8re datt". Denne type logikk kalles orkestrering. Det er som dirigenten av et orkester, som forteller medlemmene i ensemblet hva de skal gj\xf8re. Et micro service landskap, derimot, er bygget p\xe5 at alle vet bare hva en selv skal gj\xf8re. Vi sier da at l\xf8sningen er koreografert. Dette etter dans, der det ikke er noen dirigent, men hver danser kjenner sin egen rolle. L\xf8sningene kan naturligvis kombineres. Hovedsaken er at man unng\xe5r en endringshemmende lock in situasjonen som oppst\xe5r dersom man orkestrerer mye logikk i en programvaretjeneste.'),(0,o.kt)("h2",{id:"om-sentraliserte-komponenter-i-et-micro-service-landskap"},"Om sentraliserte komponenter i et micro service landskap"),(0,o.kt)("p",null,"For \xe5 lage oversikt og forenkle administrasjon og tilgang, er micro service landskap gjerne samlet bak en s\xe5kalt API Manager (ogs\xe5 kjent som API Gateway eller API Gatekeeper). Foruten \xe5 hjelpe konsumenter med \xe5 finne frem til de data de trenger og utstede adgangsbevis, vil API Gatewayen holde orden p\xe5 hvem som benytter hvilke data. Slik kan man n\xe5 ut til konsumenter i god tid med endringer i API. N\xe5r API endres m\xe5 konsumenten endre i sin ende, og vanligvis l\xf8ses dette ved versjonering. Det inneb\xe6rer at man kj\xf8rer gammelt og nytt API parallelt i en periode (f.eks. 3 eller 6 mnd), hvilket gir konsumenten mulighet til selv \xe5 finne et passende tidspunkt \xe5 flytte over til det nye API-et."),(0,o.kt)("h2",{id:"oppsummert"},"Oppsummert"),(0,o.kt)("p",null,"En micro service har tre hovedkarekteristikker:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Den er liten, intuitiv/selvforklarende, og brukes til et spesielt form\xe5l"),(0,o.kt)("li",{parentName:"ul"},"Den har ingen kodeavhengigheter til andre tjenester"),(0,o.kt)("li",{parentName:"ul"},"Den er en del av en koreografert l\xf8sning")))}d.isMDXComponent=!0}}]);