"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),k=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=k(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=k(r),f=a,p=m["".concat(s,".").concat(f)]||m[f]||d[f]||l;return r?n.createElement(p,i(i({ref:t},g),{},{components:r})):n.createElement(p,i({ref:t},g))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var k=2;k<l;k++)i[k]=r[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var n=r(7462),a=(r(7294),r(3905));const l={author:["Einar Jerpseth"],title:"Tjenesteportef\xf8lje"},i=void 0,o={unversionedId:"datadeling/erfaringer/uio/portefolje",id:"datadeling/erfaringer/uio/portefolje",title:"Tjenesteportef\xf8lje",description:"Her beskrives det\xa0hvilken informasjon som b\xf8r finnes i en tjenesteportef\xf8lje versus en tjenestekatalog for \xe5 underbygge god og kostnadseffektiv integrasjon. Dokumentet er veiledende og det oppfordres til \xe5 ha en pragmatisk holdning i vurderingen av hva som er praktisk informasjon og detaljeringsniv\xe5.",source:"@site/docs/datadeling/erfaringer/uio/portefolje.md",sourceDirName:"datadeling/erfaringer/uio",slug:"/datadeling/erfaringer/uio/portefolje",permalink:"/docs/datadeling/erfaringer/uio/portefolje",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/erfaringer/uio/portefolje.md",tags:[],version:"current",lastUpdatedAt:1679664223,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{author:["Einar Jerpseth"],title:"Tjenesteportef\xf8lje"},sidebar:"datadeling",previous:{title:"Teknisk beskrivelse av UiOs integrasjonsarkitektur",permalink:"/docs/datadeling/erfaringer/uio/om-uio-arkitekturmodell"},next:{title:"Styringsmodellen til UiO:IntArk",permalink:"/docs/datadeling/om/styringsmodellen/"}},s={},k=[{value:"Felter til bruk i tjenesteportef\xf8lje",id:"felter-til-bruk-i-tjenesteportef\xf8lje",level:2},{value:"Felter til bruk i tjenestekatalog",id:"felter-til-bruk-i-tjenestekatalog",level:2},{value:"Felter til bruk i tjenesteregister",id:"felter-til-bruk-i-tjenesteregister",level:2}],g={toc:k};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Her beskrives det\xa0hvilken informasjon som b\xf8r finnes i en tjenesteportef\xf8lje versus en tjenestekatalog for \xe5 underbygge god og kostnadseffektiv integrasjon. Dokumentet er veiledende og det oppfordres til \xe5 ha en pragmatisk holdning i vurderingen av hva som er praktisk informasjon og detaljeringsniv\xe5."),(0,a.kt)("p",null,"I dette dokumentet er de fire termene tjenesteportef\xf8lje, tjenestekatalog, tjenesteoversikt og tjenesteregister definert som f\xf8lger:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"En tjenesteportef\xf8lje er et forvaltningsverkt\xf8y for flere tjenester under samme forvaltning. Dette gj\xf8res fordi tjenestene har et avhengighetsforhold til hverandre. Dette avhengighetsforholdet kan medf\xf8re at optimalisering av en tjeneste medf\xf8rer uplanlagt merarbeid hos andre, slik at totalen g\xe5r i minus. Form\xe5let med en tjenesteportef\xf8lje er alts\xe5 \xe5 f\xe5 forutsigbarhet mht. kostnader, leveringstider og ressursbruk for tjenestene i portef\xf8ljen under ett. Bruksomr\xe5det er internt."),(0,a.kt)("li",{parentName:"ul"},"En tjenestekatalog er den delen av tjenesteportef\xf8ljen som virksomheten viser sine (potensielle) konsumenter. Essensiell informasjon i en tjenestekatalog er\xa0tjenestens innhold, kontaktpunkter og regler for bruk. En tjenestekatalog kan sy sammen informasjon fra flere tjenesteportef\xf8ljer, men en tjenesteportef\xf8lje kan ogs\xe5 ha flere tjenestekataloger. Dette avhenger av hvordan virksomheten opplever det mest hensiktsmessig \xe5 formidle informasjon om sine tjenester."),(0,a.kt)("li",{parentName:"ul"},"En tjenesteoversikt er en opplisting av tjenester i en eller flere tjenestekataloger. Tjenestene er beskrevet sv\xe6rt overfladisk og normalt lenker tjenesteoversikten til den mer informasjonsrike tjenestekatalogen."),(0,a.kt)("li",{parentName:"ul"},"Et tjenesteregister er en samling av dokumenterte integrasjonsgrensesnitt. Tjenesteregisteret er en del av tjenestekatalogen. Da informasjonen i registeret er detaljert og bare av interesse for utviklere, er denne delen av tjenestekatalogen trukket ut i en egen tjeneste. Et tjenesteregister kan igjen sy sammen eller segregere informasjon fra en eller flere tjenestekataloger.")),(0,a.kt)("p",null,"Husk at dette er skrevet med fokus p\xe5 integrasjonsgrensesnitt (API). Det er p\xe5 ingen m\xe5te noen opplisting over generelle felter i en tjenesteportef\xf8lje/-katalog."),(0,a.kt)("h2",{id:"felter-til-bruk-i-tjenesteportef\xf8lje"},"Felter til bruk i tjenesteportef\xf8lje"),(0,a.kt)("p",null,"Tjenesteportef\xf8ljen trenger informasjon om API innen tre overordnede kategorier: forankring, forvaltning og validering.Detaljniv\xe5 kan variere mht. hva interessentene opplever som hensiktsmessig. Ofte vil hensikt og m\xe5l begrunnes p\xe5 et h\xf8yere niv\xe5 for tjenesten."),(0,a.kt)("p",null,"Innen forankring b\xf8r det sies noe om hva hensikten med API er. Dette inkluderer kort- og langsiktige m\xe5l og m\xe5lekriterier. I vurdering av hensikt b\xf8r det ogs\xe5 inng\xe5 vurderinger som er gjort mht. legalitet/konfidensialitet, intendert m\xe5lgruppe og API-kategori. API-kategori vil si om API er ment for offentligheten eller internt, om det har en betalingsmodell, om det krever en registerering, er underlagt lovgivning eller annet. Om API er for strengt begrenset bruk (produsentens egne utviklere) er det ikke n\xf8dvendig for integrasjonsarkitekturen at det er oppf\xf8rt i tjenesteportef\xf8ljen. Systemeier kan allikevel \xf8nske oppf\xf8ring mht. dokumentasjon, budsjettering eller m\xe5ling av ressursbruk."),(0,a.kt)("p",null,"Under forvaltning b\xf8r det v\xe6re:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lenker til dokumentasjon rundt tekniske implementasjon. I det tekniske designet b\xf8r det v\xe6re gjort vurdering mht. gjenbruk, hvordan delte data holdes konsistente p\xe5 tvers av tjenester, samt i hvilken grad man det vil p\xe5virke konsumentene om man skiller ut funksjonalitet fra kildesystemet eller bytter kildesystem."),(0,a.kt)("li",{parentName:"ul"},"Det b\xf8r v\xe6re beskrevet hvilke delegeringer som er gjort. F.eks. kan utviklere v\xe6re delegert rettighet til selv \xe5 utvikle mer funksjonalitet eller andre grupperinger kan v\xe6re delegert muligheten til \xe5 gi tilganger til systemeierens data. Sistnevnte skjer typisk i situasjoner hvor det er laget uttrekk sammensatt fra forskjellige kildesystemer og som er lagt under sentral forvaltning."),(0,a.kt)("li",{parentName:"ul"},"Det b\xf8r beskrives eventuell juridiske forhold, f.eks. hvorvidt det kreves en databehandleravtale og hvorvidt denne er standardisert og elektronisk")),(0,a.kt)("p",null,"Validering av en tjeneste b\xf8r foreg\xe5 p\xe5 et tidspunkt planlagt da tjenesten sist ble validert. Vi skal ikke her gi noen fasit p\xe5 validering, men kan kort nevne at m\xe5loppn\xe5else, ROS-analyse, compliance med lovverk og interne f\xf8ringer, samt brukerunders\xf8kelser er vanlig tiltak i et valideringsprogram. Integrasjonsarkitekturen tilf\xf8rer et krav om validering av kvaliteten p\xe5 egne data. (Som oftest finner man at kvaliteten p\xe5 dataene er lavere enn antatt)."),(0,a.kt)("h2",{id:"felter-til-bruk-i-tjenestekatalog"},"Felter til bruk i tjenestekatalog"),(0,a.kt)("p",null,"Husk: All informasjon i tjenestekatalogen skal v\xe6re hentet fra tjenesteportef\xf8ljen. Det skal alts\xe5 ikke dukke opp nye informasjonsomr\xe5der; tjenestekatalogen skal tilrettelegge den informasjon som er relevant for konsumenten. Grovt sett kan API-informasjonen i tjenestekatalogen deles i overordnede forretningsmessige forhold og deres praktiske implikasjoner. Overgangen har en tendens til \xe5 v\xe6re gradvis. I tabellen under er dette illustrert:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Forretningsmessige forhold"),(0,a.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Masterdata"),(0,a.kt)("td",{parentName:"tr",align:null},"Beskrivelse av hvilke overordnede typer data kan man forvente \xe5 finne og hvordan dataene henger sammen med relevante data i andre tjenester")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kategori"),(0,a.kt)("td",{parentName:"tr",align:null},"Dette feltet b\xf8r besvare sp\xf8rsm\xe5l som: Er API tilgjenglig for alle? Krever det registrering? Er det begrenset ved lovgivning? Er det en betalingstjeneste?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Praktiske implikasjoner")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tilgang til API"),(0,a.kt)("td",{parentName:"tr",align:null},"Informasjon om hvor API er \xe5 finne og hvordan man f\xe5r tilgang. Lenker til standardisert avtaleverk.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Informasjon om kontraktsforhold"),(0,a.kt)("td",{parentName:"tr",align:null},"Dette er b\xe5de overordnet informasjon om hvilke lover og regler som gjelder. Det er ogs\xe5 informasjon av annen art, som l\xf8fter om ytelse og oppetid (SLA) eller i hvilken grad produsent forplikter seg til versjonering av sine API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dokumentasjon"),(0,a.kt)("td",{parentName:"tr",align:null},"Lenker til tekniske dokumentasjon eller annen informasjon som tjenestens forvaltningssyklus og valideringskriteria.")))),(0,a.kt)("h2",{id:"felter-til-bruk-i-tjenesteregister"},"Felter til bruk i tjenesteregister"),(0,a.kt)("p",null,"I tjenesteregister m\xe5 det v\xe6re lenker til tjenestekatalog/-portef\xf8lje avhengig av APIs kategori eller utviklers rolle. (En tjenesteportef\xf8lje/-katalog er ofte samme programvare hvor tilgangen til informasjon er segregert p\xe5 rolle). Det b\xf8r ogs\xe5 v\xe6re lenker til utvidet teknisk informasjon. Videre kan det v\xe6re felt for egne kontaktpunkt for utviklere."))}d.isMDXComponent=!0}}]);