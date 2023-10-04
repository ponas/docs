"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[9341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),k=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=k(e.components);return r.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=k(n),p=a,u=m["".concat(o,".").concat(p)]||m[p]||g[p]||l;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var k=2;k<l;k++)i[k]=n[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>k});var r=n(7462),a=(n(7294),n(3905));const l={slug:"/datadeling/begreper/",title:"Begreper i IntArk"},i=void 0,s={unversionedId:"datadeling/begreper/index",id:"datadeling/begreper/index",title:"Begreper i IntArk",description:"Forklaringer og utdypninger av terminologi og begreper brukt i IntArk og",source:"@site/docs/datadeling/begreper/index.md",sourceDirName:"datadeling/begreper",slug:"/datadeling/begreper/",permalink:"/docs/datadeling/begreper/",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/begreper/index.md",tags:[],version:"current",lastUpdatedAt:1696398656,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{slug:"/datadeling/begreper/",title:"Begreper i IntArk"},sidebar:"datadeling",previous:{title:"RabbitMQ",permalink:"/docs/datadeling/teknisk-plattform/rabbitmq"},next:{title:"Galvanisk skille",permalink:"/docs/datadeling/begreper/galvanisk-skille"}},o={},k=[{value:"Provisjonere",id:"provisjonere",level:2},{value:"Produsent",id:"produsent",level:2},{value:"Tilbyder",id:"tilbyder",level:2},{value:"Andre begrep",id:"andre-begrep",level:2}],d={toc:k};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Forklaringer og utdypninger av terminologi og begreper brukt i IntArk og\nteknisk plattform. Oversikten inkluderer ogs\xe5 begreper brukt andre steder, og\nhvordan de relateres til IntArk, for \xe5 unng\xe5 misforst\xe5elser."),(0,a.kt)("p",null,"Se ogs\xe5 ",(0,a.kt)("a",{parentName:"p",href:"https://data.norge.no"},"data.norge.no")," for relaterte begreper. Se ogs\xe5\n",(0,a.kt)("a",{parentName:"p",href:"/docs/datadeling/hva-er/roller"},"rollene i IntArk"),"."),(0,a.kt)("h2",{id:"provisjonere"},"Provisjonere"),(0,a.kt)("p",null,'\xc5 "kopiere" data fra et kildesystem til et endesystem, og holde dette\nfortl\xf8pende oppdatert.'),(0,a.kt)("p",null,"Mange systemer har behov for \xe5 provisjoneres, for eksempel med alle\nbrukerkontoer som skal ha tilgang. Begrepet Integrasjon brukes\nsom regel om \xe5 koble sammen tjenester, mens provisjonering er det \xe5 flytte\ndata. Alternativt kan et system bli oppdatert med informasjon ved\nbehov, ved s\xe5kalt ",(0,a.kt)("em",{parentName:"p"},"Just In Time provisjonering (JIT)"),". Et siste alternativ er\nsystemer som ikke kan integrere, og du m\xe5 legge inn data\nmanuelt."),(0,a.kt)("p",null,"Teknisk sett kan provisjonering foreg\xe5 gjennom eOppslag, og bli hendelsesbasert\nved bruk av eNotifikasjon. Eldre systemer integrerer ofte ved overf\xf8ring av\nstore, tunge filer, som har en del ulemper."),(0,a.kt)("p",null,"Se ogs\xe5: Integrasjon, Just In Time provisjonering"),(0,a.kt)("h2",{id:"produsent"},"Produsent"),(0,a.kt)("p",null,"Se ",(0,a.kt)("a",{parentName:"p",href:"/docs/datadeling/begreper#tilbyder"},"Tilbyder")),(0,a.kt)("h2",{id:"tilbyder"},"Tilbyder"),(0,a.kt)("p",null,"Rollen til en tjeneste eller person som tilbyr data. I utgangspunktet er\ntilbyderen autoritativt kildesystem for data som tilbys. Avhengig av\nkonteksten, kan dette ogs\xe5 v\xe6re snakk om en person, gruppe eller\nenhet."),(0,a.kt)("p",null,"Se ogs\xe5: Autoritativt kildesystem"),(0,a.kt)("h2",{id:"andre-begrep"},"Andre begrep"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Begrep"),(0,a.kt)("th",{parentName:"tr",align:null},"Forklaring"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Konsument"),(0,a.kt)("td",{parentName:"tr",align:null},"Rollen til en tjeneste eller system som \xf8nsker \xe5 motta data fra en tilbyder. Avhengig av kontekst, kan dette ogs\xe5 v\xe6re snakk om en person, gruppe, enhet, utvikler eller sluttbruker.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tjenesteportef\xf8lje"),(0,a.kt)("td",{parentName:"tr",align:null},"En oversikt over tjenester.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Tjenesteportef\xf8lje (Service Portfolio) er opprinnelig et oppslagsverk definert i ",(0,a.kt)("a",{parentName:"td",href:"http://wiki.en.it-processmaps.com/index.php/Service_Portfolio_Management#Service_Portfolio"},"ITIL"),"\xa0for planlagte, aktive og nedlagte tjenester i virksomheten. Teknisk plattform gir en oversikt tjenesters integrasjoner.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Konnektor"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste som integrerer mellom to systemer som ikke kan integreres direkte. Ofte gj\xf8res dette med mikrotjenester. Konnektorer inneholder ofte forretningslogikk.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Konnektorer b\xf8r f\xf8lge IntArk, ved at de blant annet bruker \xe5pne grensesnitt, har s\xe5 l\xf8se koblinger som mulig, og at forretningslogikk og m\xe5lsystem-spesifikke hensyn ikke legges i produserende system. Se mer under prinsippet ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/prinsippene#tjenesteorientert-arkitektur"},"Tjenesteorientert"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),'Merk at andre kan bruke begrepet "konnektor" ogs\xe5 for direkte-integrasjoner.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"M\xe5lsystem"),(0,a.kt)("td",{parentName:"tr",align:null},"Rollen til et system, n\xe5r det ",(0,a.kt)("strong",{parentName:"td"},"henter")," data fra et kildesystem.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Konsument.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Endesystem"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: M\xe5lsystem, Konsument.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Autoritativt kildesystem"),(0,a.kt)("td",{parentName:"tr",align:null},"Rollen til et system som institusjonen har bestemt skal v\xe6re kildesystemet for spesifikke dataelementer.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Tilbyder.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kildesystem"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: Autoritativt kildesystem.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System"),(0,a.kt)("td",{parentName:"tr",align:null},'Et IT-system. I denne konteksten brukes begrepet "system" for teknisk niv\xe5, mens "tjeneste" brukes i brukersammenheng. Definisjonen er vag og brukes forskjellig, s\xe5 begrepet b\xf8r unng\xe5s.',(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Tjeneste.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tjeneste"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste er noe som tilbyr funksjonalitet for noen. Tjenesten kan tilbys av et system, eller i samspillet mellom flere system.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: System.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API"),(0,a.kt)("td",{parentName:"tr",align:null},"Application Programming Interface: Maskinlesbart grensesnitt for en tjeneste eller system. IntArk setter noen f\xf8ringer og anbefalinger for hvordan API til kildesystem skal fungere, for eksempel at vi bruker ",(0,a.kt)("em",{parentName:"td"},"Web Service"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se blant annet ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/god-praksis/api-design"},"utforming av API"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Web Service")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sikker Datadeling"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste for \xe5 h\xe5ndtere avtaler om tilganger til data. I tjenesten kan du som dataeier ha oversikt over hvem som har tilgang til hva i dine systemer, og du kan opprette, fornye og avvikle tilganger til data.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: API Manager")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Notifikasjon"),(0,a.kt)("td",{parentName:"tr",align:null},"Vi bruker begrepet i IntArk om ",(0,a.kt)("strong",{parentName:"td"},"tynne meldinger")," som sendes til og fra meldingsk\xf8en, prim\xe6rt i integrasjonsm\xf8nsteret ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert"},"hendelsesbasert oppdatering"),". Se ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/begreper/notifikasjon"},"eget dokument som beskriver notifikasjoner i mer detalj"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API manager"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste som gir dataeiere kontroll over tilganger til sine API, og konsumenter mulighet for \xe5 f\xe5 tilgang. API manager er et system som realiserer de funksjonelle. API manager er en sentral komponent i IntArks tekniske plattform.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Sikker Datadeling")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API-katalog"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste som gir deg oversikt over alle API-er for en institusjon. I praksis inneholder ofte en API Manager ogs\xe5 ein API-katalog.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: API Manager, Datakatalog")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Datatilbyder"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: Tilbyder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Datakonsument"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: Konsument")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API gateway"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste som tar seg av selve tilgangskontrollen til API p\xe5 systemniv\xe5. Hvem som skal ha tilgang styres i API manager, og API gateway overholder dette. Dette er en sentral komponent i IntArks tekniske plattform.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Applikasjon"),(0,a.kt)("td",{parentName:"tr",align:null},"En applikasjon er vanligvis definert som en samling programvare som tilbyr ",(0,a.kt)("em",{parentName:"td"},"tjenester"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Gravitee bruker begrepet for entiteter som f\xe5r tilgang til API, alts\xe5 konsumentene. En applikasjon har en eier, og kan bli gitt tilganger. Du s\xf8ker om tilganger til API via applikasjonen du registrerer.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Konsument, Tjeneste.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: Applikasjon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authorization server"),(0,a.kt)("td",{parentName:"tr",align:null},"En rolle i Oauth 2-protokollen, som tar seg av tilgangskontroll.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se: Autorisasjonstjeneste")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Meldingsk\xf8"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste for \xe5 behandle meldinger og sikre at disse meldingene blir distribuert videre til tjenester som abonnerer p\xe5 valgt type melding. For tiden brukes systemet ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/teknisk-plattform/rabbitmq"},"RabbitMQ i IntArk"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Merk: I IntArk-sammenheng snakker vi bare om meldingsk\xf8 som tjenesten som behandler notifikasjoner og andre meldinger som skal bruker ",(0,a.kt)("strong",{parentName:"td"},"mellom tjenester"),". IntArk sier ingenting om meldingsk\xf8er som brukes internt i systemer.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/begreper/notifikasjon"},"Notifikasjon"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API portal"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: API-katalog")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Autentiseringstjeneste"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste som kan autentisere sluttbrukeren og/eller systemet som \xf8nsker \xe5 konsumere data.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"I Oauth2 blir autentiseringstjenesten spesifisert i mer detalj.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Datakatalog"),(0,a.kt)("td",{parentName:"tr",align:null},'En oversikt over alle data, spesielt kildedata, som er tilgjengelig, og hvordan du kan f\xe5 tilgang til dette. Dette er relatert til DigDirs "Orden i eget hus". En datakatalog kan v\xe6re en API-katalog, men det kan ogs\xe5 v\xe6re to uavhengige tjenester som kan relatere til hverandre. Det er planer om en felles datakatalog for sektoren i fremtiden.',(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: API-katalog.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Autorisasjonstjeneste"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste som tar seg av tilgangskontrollen ved uthenting av data fra API.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"I Oauth2 er dette en rolle som er spesifisert i detalj, og der du som tjeneste eller sluttbruker f\xe5r utsted en n\xf8kkel (token) du kan bruke for \xe5 hente ut data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"N\xf8kkelutsteder"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: Autorisasjonstjeneste")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Event streaming"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: Hendelsesstr\xf8mming")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hendelsesstr\xf8mming"),(0,a.kt)("td",{parentName:"tr",align:null},"N\xe5r du behandler mange meldinger under ett, kalles dette gjerne hendelsesstr\xf8mming.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Meldingsk\xf8, Notifikasjoner")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Galvanisk skille"),(0,a.kt)("td",{parentName:"tr",align:null},'Opprinnelig et elektronikk-begrep, men som er tatt inn for \xe5 beskrive tjenester som har et strengt skille mellom innlogging i applikasjonen og ikke i operativsystemet. Det er da et "galvanisk skille", s\xe5 innloggingshemmeligheter er isolert til applikasjonen. Et eksempel er webapplikasjoner som bruker Feide-p\xe5logging.',(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se mer informasjon under ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/begreper/galvanisk-skille"},"forvaltningsveilederen"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Retrofit"),(0,a.kt)("td",{parentName:"tr",align:null},"Retrofit handler om \xe5 forlenge levetiden til gammel teknologi ved \xe5 legge p\xe5 ny teknologi utenp\xe5. I IntArk-sammenheng handler dette som oftest om \xe5 lage egne mikrotjenester som oversetter og forenkler integrasjon med et gammelt system, slik at den kan bli IntArk-kompatibelt.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se mer informasjon under ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/malgrupper/anskaffer/"},"forvaltning"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Masterdata"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: Autoritativt kildesystem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Web Service"),(0,a.kt)("td",{parentName:"tr",align:null},"Web Service (WS) er en type API (integrasjonsgrensesnitt), som er den vanligste m\xe5ten \xe5 dele data p\xe5 internett i dag. WS er en sekkebetegnelse, som inneholder blant annet RESTfulle API.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/god-praksis/bruk-av-webservice"},"IntArk anbefaler bruk av webservice for API"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\xc5pent grensesnitt"),(0,a.kt)("td",{parentName:"tr",align:null},"Et \xe5pent grensesnitt er et grensesnitt som alle skal kunne utvikle integrasjoner mot, i motsetning til propriet\xe6re, lukkede grensesnitt.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"\xc5pent grensesnitt er et krav i IntArk, og f\xf8lger integrasjonsprinsippet om ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/prinsippene#tilgjengelige-data"},"Tilgjengelighet: Autoritative data skal tilbys gjennom \xe5pne grensesnitt"),". Grensenitt som er bransjestandard foretrekkes ofte, siden det reduserer faren for lock in.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Autorisasjon"),(0,a.kt)("td",{parentName:"tr",align:null},"Autorisasjon er prosessen med \xe5 bestemme om en autentisert entitet er berettiget \xe5 f\xe5 en tilgang. Dette betyr at en tjeneste verifiserer, vha. regler som er satt for tjenesten, om entiteten skal gis en tilgang eller ikke. Tilgang kan for eksempel v\xe6re om entiteten skal slippes inn i tjenesten, om de skal f\xe5 ekstra funksjonalitet i tjenesten eller endret utseende p\xe5 tjenesten. Tjenester som sjekker tilganger bedriver ",(0,a.kt)("em",{parentName:"td"},"tilgangskontroll."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Autoritativ"),(0,a.kt)("td",{parentName:"tr",align:null},"Autoritativ refererer til hvem som bestemmer (autorit\xe6r). I IntArk-sammenheng er dette hvilket system eller tjeneste som er en autorit\xe6r kilde for data.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se: Autoritativt kildesystem")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Integrasjon"),(0,a.kt)("td",{parentName:"tr",align:null},"Det \xe5 integrere tjenester i konteksten IT og arkitektur er det \xe5 p\xe5se at tjenester kommuniserer. Dette kan foreg\xe5 som en dialog mellom tjenestene eller som monolog fra en tjeneste til en annen. Hensikten er \xe5 sikre at data blir kjent i de tjenester som trenger dem.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Begrepet integrasjon brukes om selve den tekniske kommunikasjonen, mens begrepet ",(0,a.kt)("em",{parentName:"td"},"datadeling")," er bredere og inkluderer ogs\xe5 det utenfor det tekniske, for eksempel datakvalitet, ansvarsplassering og informasjonsforvaltning.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Datadeling")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Datadeling"),(0,a.kt)("td",{parentName:"tr",align:null},"Datadeling handler om alt som m\xe5 til for at du skal kunne dele data mellom tjenester, prosesser og mennesker.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Vi f\xf8lger ",(0,a.kt)("a",{parentName:"td",href:"https://doc.difi.no/nasjonal-arkitektur/nab_arkitekturlandskap_segmentarkitektur_datadeling/#_hva_er_datadeling"},"Digitaliseringsdirektoratets definisjon av datadeling"),":",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Datadeling handler om \xe5 forsyne forretningsprosesser og dataanalyse med n\xf8dvendig datagrunnlag."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"De fleste akt\xf8rer sitter p\xe5 begge sider i dette bildet, og m\xe5 kunne b\xe5de dele og innhente data og hendelser. I beskrivelsene skilles det likevel gjerne p\xe5 rollene som")," tilbyder ",(0,a.kt)("em",{parentName:"td"},"og")," konsument",(0,a.kt)("em",{parentName:"td"},"."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"Begrepet datadeling er ut fra dette \xe5 oppfatte som kortform for ",(0,a.kt)("strong",{parentName:"em"},"deling og innhenting av data og hendelser"),"."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Integrasjon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Just In Time provisjonering"),(0,a.kt)("td",{parentName:"tr",align:null},"Just In Time (JIT) provisjonering er\xa0",(0,a.kt)("em",{parentName:"td"},"provisjonering"),"\xa0som gj\xf8res i \xf8yeblikket de provisjonerte dataene trengs. Et eksempel kan v\xe6re at man sl\xe5r opp informasjon om en bruker n\xe5r vedkommende logger inn.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Provisjonering")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Masterdata Management"),(0,a.kt)("td",{parentName:"tr",align:null},"Masterdata Management (MDM)\xa0bestemmer hvilke system/tjeneste som er ansvarlig (",(0,a.kt)("em",{parentName:"td"},"autoritativ"),") for hvilke data. MDM omfatter ogs\xe5 dataenes semantikk, som vil si hva dataene betyr ut fra gitt kontekst, og videre dataens kvalitet: Hvilken grad av feil og mangler er tolerert?",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Autoritativt kildesystem, Informasjonsforvaltning")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Informasjonsforvaltning"),(0,a.kt)("td",{parentName:"tr",align:null},"Prosesser, rutiner og funksjoner for \xe5 sikre god datakvalitet i institusjonens data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mikrotjeneste"),(0,a.kt)("td",{parentName:"tr",align:null},"En liten webservice som er spesialisert til \xe5 gj\xf8re \xe9n ting. ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/begreper/mikrotjeneste"},"Mer om Micro Services"),". Mikrotjenester som brukes i IntArk-sammenheng kalles for en konnektor.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Konnektor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Micro Service"),(0,a.kt)("td",{parentName:"tr",align:null},"Se: Mikrotjeneste")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Return On Investment"),(0,a.kt)("td",{parentName:"tr",align:null},"Return On Investment (ROI): Et begrep om hva man f\xe5r for en investering. I IntArk-sammenheng er ROI ofte vesentlig for \xe5 vurdere om en tjeneste skal oppgraderes for \xe5 kunne integreres med, eller om det skal vere et unntak. Dette fra ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/god-praksis/api-design/#prinsipper-for-godt-api-design"},"prinsippet Fleksibel"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sp\xf8rring"),(0,a.kt)("td",{parentName:"tr",align:null},'Handlingen \xe5 ta kontakt med et API for \xe5 be om data. Fra engelsk "request".',(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Uttrekk")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Teknisk gjeld"),(0,a.kt)("td",{parentName:"tr",align:null},"Teknisk gjeld er et abstrakt begrep som handler om endringer som m\xe5 gj\xf8res i en applikasjon for \xe5 f\xe5 denne til \xe5 f\xf8lge gjeldende regler, \xf8nsket funksjonalitet og fleksibilitet, og etterkomme retningslinjer. Teknisk gjeld \xf8ker typisk gjennom en applikasjons levetid, med mindre teknisk gjeld adresseres. \xd8kende teknisk gjeld medf\xf8rer \xf8kt ",(0,a.kt)("em",{parentName:"td"},"time-to-market")," og synkende return-on-investment.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enterprise Service Bus"),(0,a.kt)("td",{parentName:"tr",align:null},"Enterprise Service Bus (ESB) er engelsk begrep for tjenestebuss.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se: Tjenestebuss")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Teknisk plattform"),(0,a.kt)("td",{parentName:"tr",align:null},"IntArk sin tekniske plattform er verkt\xf8yet som hjelper institusjonene med \xe5 dele data trygt og sikkert, ved \xe5 gi oversikt over hvem som har tilgang til hvilke data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Time to Market"),(0,a.kt)("td",{parentName:"tr",align:null},"Time To Market (TTM): Et begrep om tiden det tar \xe5 lansere funksjonalitet. En mer fleksibel arkitektur, med for eksempel l\xf8sere koblinger, gir kortere TTM.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Uttrekk"),(0,a.kt)("td",{parentName:"tr",align:null},"Resultatet man f\xe5r etter en ",(0,a.kt)("em",{parentName:"td"},"sp\xf8rring")," mot en ",(0,a.kt)("em",{parentName:"td"},"webservice."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"Se ogs\xe5: Sp\xf8rring")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Datakvalitet"),(0,a.kt)("td",{parentName:"tr",align:null},"Kvaliteten p\xe5 data. God kvalitet er vesentlig for \xe5 kunne gjenbruke data, og med det ha en god og effektiv datadeling. Dataeier er ansvarlig for god datakvalitet for sine autoritative data. Noen kriterier til datakvalitet:",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"}," At data er komplette",(0,a.kt)("br",null))," At data er maskinlesbare",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"}," At data er riktig formaterte",(0,a.kt)("br",null))," At data er oppdaterte")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tilstandsl\xf8s"),(0,a.kt)("td",{parentName:"tr",align:null},"En tjeneste som ikke lagrer egne data, inkludert sesjonsdata, er tilstandsl\xf8s. Tilstandsl\xf8se mikrotjenester er ofte enklere \xe5 h\xe5ndtere, b\xe5de fordi det er enklere \xe5 skalere horisontalt ved mye last, og krever mindre drift.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Idempotent h\xe5ndtering"),(0,a.kt)("td",{parentName:"tr",align:null},"Hvis et kall mot et endepunkt i et API er garantert \xe5 gi samme resultat ved gjentagende kall, er det idempotent. Dette er sentralt i hendelsesdrevet provisjonering.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API-eier"),(0,a.kt)("td",{parentName:"tr",align:null},"Den som er ansvarlig for et API hos en institusjon. Dette kan for eksempel v\xe6re tjenesteansvarlig eller dataforvalter, eller v\xe6re en egen rolle, avhengig av hvordan institusjonen har l\xf8st dette.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"L\xf8s kobling"),(0,a.kt)("td",{parentName:"tr",align:null},"Et prinsipp om at en integrasjon b\xf8r v\xe6re mest mulig uavhengig av systemet, tjenesten eller leverand\xf8ren. En kobling mellom to system er l\xf8s hvis det er enkelt \xe5 bytte ut det ene systemet, uten at det andre systemet m\xe5 endres. Se mer utdypende forklaring i ",(0,a.kt)("a",{parentName:"td",href:"/docs/datadeling/begreper/los-kobling"},"L\xf8s kobling"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tett kobling"),(0,a.kt)("td",{parentName:"tr",align:null},"Det omvendte av en l\xf8s kobling. For integrasjoner \xf8nsker du som regel ikke tette koblinger, da det gj\xf8r det vanskeligere eller mer kostbart \xe5 bytte ut systemer. Se: L\xf8s kobling.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Datasett"),(0,a.kt)("td",{parentName:"tr",align:null},"En samling av data-elementer. Se: Kildedata")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kildedata"),(0,a.kt)("td",{parentName:"tr",align:null},"Datasett som er autoritativt. Se: Autoritativt kildesystem.")))))}g.isMDXComponent=!0}}]);