"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[8],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,u=m["".concat(s,".").concat(g)]||m[g]||k[g]||i;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={description:"Hjelp til oppsett av DF\xd8 SAP sine REST API.",title:"DF\xd8 SAP"},l="DF\xd8 SAP",o={unversionedId:"datadeling/teknisk-plattform/api/dfo-sap",id:"datadeling/teknisk-plattform/api/dfo-sap",title:"DF\xd8 SAP",description:"Hjelp til oppsett av DF\xd8 SAP sine REST API.",source:"@site/docs/datadeling/teknisk-plattform/api/dfo-sap.md",sourceDirName:"datadeling/teknisk-plattform/api",slug:"/datadeling/teknisk-plattform/api/dfo-sap",permalink:"/docs/datadeling/teknisk-plattform/api/dfo-sap",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/teknisk-plattform/api/dfo-sap.md",tags:[],version:"current",lastUpdatedAt:1697103066,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{description:"Hjelp til oppsett av DF\xd8 SAP sine REST API.",title:"DF\xd8 SAP"},sidebar:"datadeling",previous:{title:"Oversikt over den tekniske plattformen",permalink:"/docs/datadeling/teknisk-plattform/oversikt"},next:{title:"Felles Studentsystem - FS-API",permalink:"/docs/datadeling/teknisk-plattform/api/fs"}},s={},p=[{value:"Om API-ene",id:"om-api-ene",level:2},{value:"Standardoppsett",id:"standardoppsett",level:2},{value:"Hvordan sette opp API-ene",id:"hvordan-sette-opp-api-ene",level:2},{value:"Hvordan verifisere at API-et fungerer:",id:"hvordan-verifisere-at-api-et-fungerer",level:3}],d={toc:p};function k(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"df\xf8-sap"},"DF\xd8 SAP"),(0,a.kt)("p",null,"Hjelp til oppsett av DF\xd8 SAP sine REST API."),(0,a.kt)("h2",{id:"om-api-ene"},"Om API-ene"),(0,a.kt)("p",null,"DF\xd8s l\xf8sninger for \xf8konomi og l\xf8nn brukes av mange i sektoren. DF\xd8 tilbyr API som er felles for sektoren, men der hver institusjon f\xe5r ut sine data."),(0,a.kt)("p",null,"DF\xd8 tilbyr flere ulike API-er for ulike data, som ansattinformasjon, stillingsdata og organisasjonsdata. Se ",(0,a.kt)("a",{parentName:"p",href:"https://api-portal.dfo.no/"},"DF\xd8s API-portal")," for mer informasjon."),(0,a.kt)("p",null,'For \xe5 kunne bruke DF\xd8s API m\xe5 din institusjon bli "oppgradert" hos DF\xd8. Mange institusjoner m\xe5 i dag forholde seg til CSV-filer fra DF\xd8. Dette m\xe5 gj\xf8res i dialog med DF\xd8, og dette vil kunne ta tid.'),(0,a.kt)("p",null,"DF\xd8 krever autentisering via\n",(0,a.kt)("a",{parentName:"p",href:"https://samarbeid.digdir.no/maskinporten/maskinporten/25"},"Maskinporten")," i sin\nkommunikasjon, s\xe5 institusjonen m\xe5 registrere seg der f\xf8r integrasjonen kan\np\xe5begynnes. Maskinporten benytter ",(0,a.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/public-key-authentication"},"Public Key Authentication")," for autentisering. Oppsettet inneb\xe6rer at institusjonen genererer en hemmelig privat n\xf8kkel til seg selv og en korresponderende offentlig n\xf8kkel til Maskinporten. Den private n\xf8kkelen brukes for \xe5 bekrefte identiteten til innehaveren, i dette tilfellet institusjonen. Den offentlige n\xf8kkelen brukes av Maskinporten for \xe5 autentisere institusjonen og til \xe5 autorisere tilgang."),(0,a.kt)("p",null,"Som de fleste andre APIene settes APIet opp med autentisering mot v\xe5r API gateway, og deretter sendes requesten videre til backend-APIet. I API gatewayen legger vi p\xe5 token og evt. API-n\xf8kkel som brukes mot DF\xd8s APIer. Tjenesten som utsteder token kan enten settes opp i Gravitee (",(0,a.kt)("a",{parentName:"p",href:"/docs/datadeling/teknisk-plattform/api/maskinporten"},"se bruksanvisning her"),") eller hos den enkelte institusjon"),(0,a.kt)("h2",{id:"standardoppsett"},"Standardoppsett"),(0,a.kt)("p",null,"DF\xd8 er en fellestjeneste, og m\xe5/b\xf8r derfor settes opp likt hos alle institusjoner. Du kan sette dette opp ved \xe5 laste inn fil med standardoppsett:"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(5217).Z},"Lonnssystem-api-template.json")),(0,a.kt)("h2",{id:"hvordan-sette-opp-api-ene"},"Hvordan sette opp API-ene"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Registrer din institusjon hos Maskinporten, ",(0,a.kt)("a",{parentName:"p",href:"https://samarbeid.digdir.no/maskinporten/konsument/119"},"se planleggingsaktiviteten her"),". Registrer deretter en integrasjon i maskinporten, se veiledning her(",(0,a.kt)("a",{parentName:"p",href:"https://docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web.html"},"https://docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web.html"),") Sluttresultatet er at du har en integrasjon hvor du kan autentisere vha. virksomhetssertifikat eller et sertifikat du har laget selv (og som bare brukes mot denne integrasjonen) Integrasjonen m\xe5 ha blitt tildelt de n\xf8dvendige scopes og du m\xe5 ha issuer-ID tilgjengelig")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Opprett tokentjeneste om du ikke har gjort det tidligere og gi APIet tilgang."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Om du vil lage en i gravitee ",(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/teknisk-plattform/api/maskinporten"},"se veiledning her")," Gi deretter SAP-APIet tilgang ved \xe5 opprette en applikasjon for dette og s\xf8k om tilgang til maskinporten-APIet. N\xe5r tilgangen er gitt f\xe5r du en API-n\xf8kkel som vi bruker i neste steg"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Last ned standardoppsettet over, og opprett tjenesten i API manager. Se ",(0,a.kt)("a",{parentName:"p",href:"/docs/datadeling/veiledere/api-manager/importer-api"},"veileder for \xe5 registrere en tjeneste i API manager via fil"),"."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"G\xe5 inn i APIet og endre p\xe5 Navn og beskrivelse"),(0,a.kt)("li",{parentName:"ol"},"G\xe5 til proxy -",">"," Entrypoint og evt. endre dette"),(0,a.kt)("li",{parentName:"ol"},"Hvis prod: g\xe5 inn p\xe5 proxy -",">",' backend services. Fjern "-test" fra URLen slik at det st\xe5r ',(0,a.kt)("a",{parentName:"li",href:"https://api.dfo.no"},"https://api.dfo.no")),(0,a.kt)("li",{parentName:"ol"},"Klikk p\xe5 Design og policy-en HTTP Callout. Endre URL til den til tokentjenesten. Endre headeren X-Gravitee-Api-Key til n\xf8kkelen fra punkt 2 om du har satt opp maskinporten-API i API Manager. Under headeren iss legger du inn ISSUER-ID for maskinporten-integrasjonen. Om du kj\xf8rer token-tjenesten selv, konfigurer sikker autentisering og evt. headere/parametre etter behov."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Registrer DF\xd8 SAP som tjeneste i ",(0,a.kt)("em",{parentName:"p"},"Selvbetjeningsportalen for RabbitMQ")," (se ",(0,a.kt)("a",{parentName:"p",href:"/docs/datadeling/veiledere/meldingsk%C3%B8/opprett-tjeneste"},"veileder for \xe5 registrere tjenesten"),"). Hent ut tilkoblingsdetaljene som det blir opplyst om."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Om DF\xd8 skal publisere meldinger direkte til deres RabbitMQ, send en foresp\xf8rsel om etablering av notifikasjonsoverf\xf8ring til ",(0,a.kt)("a",{parentName:"p",href:"mailto:it-support@dfo.no."},"it-support@dfo.no.")," Legg ved tilkoblingsdetaljene som du finner i selvbetjeningsportalen. Passordet b\xf8r sendes via en sikker tredje kanal (",(0,a.kt)("em",{parentName:"p"},"ikke")," via e-post).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Om dere heller vil hente meldinger fra rabbitmq hos DF\xd8 (eller en annen rabbitmq-installasjon) gj\xf8res det vel \xe5 sette opp en shovel i rabbitMQ. Det finnes flere oppskrifter p\xe5 hvordan man setter opp shovel. Her er oppskrift p\xe5 en m\xe5te man kan sette det opp i rabbitMQ, mens man fremdeles gj\xf8r tilgangsstyring i BROM. Dette krever ekstra tilganger i rabbitMQ for \xe5 gj\xf8re n\xf8dvendig oppsett."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Registrer applikasjon i BROM. Velg at den skal publisere meldinger. Velg et godt navn og beskrivelse, dette er applikasjonen som utviklere abonnerer p\xe5 om de vil ha meldinger fra deres SAP-installasjon")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Valgfritt) For \xe5 lett kunne se om shovel-en fungerer kan du opprette en applikasjon som abonnerer p\xe5 meldinger fra applikasjonen du opprettet i forrige punkt. Godkjenn denne. N\xe5r shovelen fungerer vil det komme meldinger inn i meldingsk\xf8en for denne applikasjonen. Merk: denne b\xf8r slettes i ettertid.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Om IntArk-koordinator ikke har n\xf8dvendige rettigheter i rabbitMQ fra f\xf8r,\xa0 kontakt support som oppretter bruker med n\xf8dvendinge rettigheter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"S\xf8rg for \xe5 ha tilkoblingsinformasjon (brukernavn, passord, vhost, k\xf8-navn, hostnavn) tilgjengelig")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Logg inn i rabbitMQ med bruker som har rettigheter til \xe5 opprette shovel. I BROM er det link til innloggingsiden her: ",(0,a.kt)("img",{alt:"applikasjonsinfo i BROM",src:n(3005).Z,width:"1143",height:"671"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Naviger til siden "Admin" og undemenyen "Shovel Management" ',(0,a.kt)("img",{alt:"webside for Shovel management i rabbitmq",src:n(3224).Z,width:"1247",height:"809"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under Add shovel, fyll ut:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Velg vhost med samme navn som applikasjonen i punkt 1 (ikke n\xf8dvendig, men gj\xf8r det lettere \xe5 holde oversikt senere)"),(0,a.kt)("li",{parentName:"ul"},"Gi et godt navn"),(0,a.kt)("li",{parentName:"ul"},"Under source s\xe5 er protocol nesten alltid AMQP 0.9.1, s\xe5 det kan st\xe5"),(0,a.kt)("li",{parentName:"ul"},"source URI: adresse for \xe5 koble seg p\xe5 DF\xd8s rabbitmq riktig. Denne er litt komplisert. Den skal v\xe6re amqps://BRUKERNAVN:",(0,a.kt)("a",{parentName:"li",href:"mailto:PASSORD@mq.dfo.no"},"PASSORD@mq.dfo.no"),"/VHOST")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TIPS: lag denne i notepad eller annen tekstbehandler og bruk klipp og lim for \xe5 fylle inn i rabbitMQ. Feltet for dette i RabbitMQ er for kort til \xe5 se evt. feil")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"source queue: navn p\xe5 k\xf8"),(0,a.kt)("li",{parentName:"ul"},"destination URI: her er det samme rabbimtmq som vi er logget inn p\xe5, s\xe5 denne er lettere Fyll inn amqp:///VHOST (hvor vhost er navnet p\xe5 applikasjonen fra punkt 1) ",(0,a.kt)("em",{parentName:"li"},"OBS: merk at det er 3 skr\xe5streker!")),(0,a.kt)("li",{parentName:"ul"},"Endre fra queue til exchange"),(0,a.kt)("li",{parentName:"ul"},"fyll inn navn p\xe5 exchange. Det er outgoing_APPLIKASJONSNAVN (alts\xe5 outgoing + underscore + navn p\xe5 appliasjon. Du kan og se det under tilkoblingsdetaljer p\xe5 publiseringsiden i brom)"),(0,a.kt)("li",{parentName:"ul"},"routing key: La denne v\xe6re blank. (Da vil meldingene beholde routing key som de har i kilden. Om du setter en verdi her til denne verdien overskrive eksisterende routing key)"),(0,a.kt)("li",{parentName:"ul"},'Til sist trykk p\xe5 "add shovel" G\xe5 til siden "Shovel status" og se at shovlen du har laget endrer status til Started. Om den ikke endrer seg fra Starting til Started ila. et par minutter: sjekk tilkoblingsdetaljene, slett shovelen og opprett p\xe5 nytt')))))))),(0,a.kt)("p",null,"API-et og meldingsh\xe5ndtering er n\xe5 satt opp."),(0,a.kt)("h3",{id:"hvordan-verifisere-at-api-et-fungerer"},"Hvordan verifisere at API-et fungerer:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Opprett din egen klient (applikasjon) i API manager, om du ikke har dette allerede.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Be om tilgang til API-et.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Godkjenn tilgangen til API-et. Du har n\xe5 f\xe5tt en egen API-n\xf8kkel for din klient.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Bruk klientens API-n\xf8kkel, og sjekk at du f\xe5r hentet ut data:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Med curl (husk \xe5 endre det som st\xe5r i uthevet tekst):")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'\ncurl --include -H "X-Gravitee-Api-Key: **API-n\xf8kkel**" https://gw-**INSTANS**.intark.uh-it.no/**lonn**/v1/organisasjoner/v1/\n\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Med Powershell (husk \xe5 endre det som st\xe5r i uthevet tekst):")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\n$headers = @{\n  'Accept' = 'application/json'\n  'X-Gravitee-Api-Key' = **API-n\xf8kkel**\n}\nInvoke-WebRequest -Headers $headers -Uri \"https://gw-**INSTANS**.intark.uh-it.no/**lonn**/v1/organisasjoner/v1\"\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Hvis alt er ok kan du forvente \xe5 f\xe5 tilbake noe som starter med "HTTP 200" og JSON-data.')))))}k.isMDXComponent=!0},5217:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/Lonnssystem-api-template-c2bb7618a89eb9664e1329b1d0449852.json"},3005:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20211006190506-1-76008a2e1ddd40fbd524c65ba3682e6c.png"},3224:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rabbitmq-shovel-1-a1ca366ec6382f9218019e3e4f4b160a.png"}}]);