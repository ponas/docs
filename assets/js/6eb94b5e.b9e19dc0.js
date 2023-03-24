"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[351],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),k=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=k(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=k(t),p=l,g=u["".concat(o,".").concat(p)]||u[p]||m[p]||i;return t?r.createElement(g,a(a({ref:n},d),{},{components:t})):r.createElement(g,a({ref:n},d))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var k=2;k<i;k++)a[k]=t[k];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>k});var r=t(7462),l=(t(7294),t(3905));const i={title:"Grunnleggende feils\xf8king ved problemer i lokalnett"},a=void 0,s={unversionedId:"cnaas/grunnleggende-feilsok-lokalnett",id:"cnaas/grunnleggende-feilsok-lokalnett",title:"Grunnleggende feils\xf8king ved problemer i lokalnett",description:"Innledning",source:"@site/docs/cnaas/grunnleggende-feilsok-lokalnett.md",sourceDirName:"cnaas",slug:"/cnaas/grunnleggende-feilsok-lokalnett",permalink:"/docs/cnaas/grunnleggende-feilsok-lokalnett",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/cnaas/grunnleggende-feilsok-lokalnett.md",tags:[],version:"current",lastUpdatedAt:1679664223,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{title:"Grunnleggende feils\xf8king ved problemer i lokalnett"},sidebar:"cnaas",previous:{title:'Driftsinstruks for kunder av "Lokalnett fra Sikt - CNaaS"',permalink:"/docs/cnaas/driftsinstruks-kunde"},next:{title:"N\xf8dvendig informasjon f\xf8r eskalering av lokalnett-relaterte saker til Sikt.",permalink:"/docs/cnaas/info-ved-eskalering"}},o={},k=[{value:"Innledning",id:"innledning",level:2},{value:"Feils\xf8kingsscript",id:"feils\xf8kingsscript",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Tr\xe5dbasert tilkobling",id:"tr\xe5dbasert-tilkobling",level:2},{value:"Sjekk at brukerpunktet er tilkoblet svitsjen i etasjefordeler/kommunikasjonsrom.",id:"sjekk-at-brukerpunktet-er-tilkoblet-svitsjen-i-etasjefordelerkommunikasjonsrom",level:3},{value:"Sjekk om det er link p\xe5 nettkortet.",id:"sjekk-om-det-er-link-p\xe5-nettkortet",level:3},{value:"Tr\xe5dl\xf8s tilkobling (Wi-Fi)",id:"tr\xe5dl\xf8s-tilkobling-wi-fi",level:2},{value:"Tilkobling til eduroam",id:"tilkobling-til-eduroam",level:3},{value:"Tilkobling til gjestenett",id:"tilkobling-til-gjestenett",level:3},{value:"Sjekk kvaliteten p\xe5 signalet",id:"sjekk-kvaliteten-p\xe5-signalet",level:3},{value:"Windows",id:"windows-1",level:4},{value:"Mac",id:"mac",level:4},{value:"Linux",id:"linux-1",level:4},{value:"Sjekk om brukeren f\xe5r IPv4/IPv6-adresse og identifisering av brukerens MAC-adresse.",id:"adresser",level:2},{value:"Windows",id:"windows-2",level:3},{value:"Mac",id:"mac-1",level:3},{value:"Linux",id:"linux-2",level:3},{value:"Sjekk n\xe5barhet til ressurser",id:"sjekk-n\xe5barhet-til-ressurser",level:2},{value:"Sjekk om det er mulig \xe5 kj\xf8re ping mot default gateway.",id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-ping-mot-default-gateway",level:3},{value:"Windows",id:"windows-3",level:4},{value:"Mac",id:"mac-2",level:4},{value:"Linux",id:"linux-3",level:4},{value:"Sjekk om det er mulig \xe5 kj\xf8re navneoppslag mot f.eks www.google.com",id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-navneoppslag-mot-feks-wwwgooglecom",level:3},{value:"Windows",id:"windows-4",level:4},{value:"Mac",id:"mac-3",level:4},{value:"Linux",id:"linux-4",level:4}],d={toc:k};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"innledning"},"Innledning"),(0,l.kt)("p",null,"Denne artikkelen har som m\xe5l \xe5 gi hjelp til brukerst\xf8tte n\xe5r brukere har problemer med tilkobling til eller bruk av lokalnettet. Den inneholder da litt tips og triks slik at brukerst\xf8tte kan isolere problemet og gir viktig grunnlag for feils\xf8king ved eskalering til Sikt."),(0,l.kt)("h2",{id:"feils\xf8kingsscript"},"Feils\xf8kingsscript"),(0,l.kt)("p",null,"Vi har utarbeidet en liste over kommandoer som kan kj\xf8res p\xe5 en klient for \xe5 f\xe5 mer info for feils\xf8king. Disse kommandoene har vi lagt inn i script-filer som kan lastes ned og kj\xf8res p\xe5 maskinene. MERK: Kj\xf8r dette n\xe5r maskinen har problemer!! Det er liten vits \xe5 kj\xf8re dette n\xe5r maskinen IKKE har problemer. "),(0,l.kt)("p",null,"Under kan du se en liste over script som kan kj\xf8res p\xe5 de forskellige operativsystemene. "),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,"Kopier koden nedenfor og legg den i en fil som heter ",(0,l.kt)("inlineCode",{parentName:"p"},"netinfo.cmd"),". Kj\xf8r s\xe5 denne p\xe5 maskina som har problemer. N\xe5r dette scriptet kj\xf8res s\xe5 blir det laget en fil ",(0,l.kt)("inlineCode",{parentName:"p"},"netinfo.log")," som kan vidersendes til CNaaS for dypere feils\xf8king."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"@echo off\nnetsh wlan show interface > netinfo.log\nnetsh interface ipv4 show route >> netinfo.log\nnetsh interface ipv4 show addresses >> netinfo.log\nnetsh interface ipv6 show route >> netinfo.log\nnetsh interface ipv6 show neig >> netinfo.log\nnetsh interface ipv6 show addresses >> netinfo.log\nnetsh interface ipv6 show dnsservers >> netinfo.log\narp -a >> netinfo.log\nnslookup www.vg.no >> netinfo.log\nnslookup dns-resolver1.uninett.no >> netinfo.log\nping -4 8.8.8.8 >> netinfo.log\nping -4 158.38.0.1 >> netinfo.log\nping -6 2001:700:0:ff00::1 >> netinfo.log\nping -6 2001:4860:4860::8888 >> netinfo.log\n")),(0,l.kt)("h3",{id:"linux"},"Linux"),(0,l.kt)("p",null,"Coming soon! "),(0,l.kt)("h2",{id:"tr\xe5dbasert-tilkobling"},"Tr\xe5dbasert tilkobling"),(0,l.kt)("h3",{id:"sjekk-at-brukerpunktet-er-tilkoblet-svitsjen-i-etasjefordelerkommunikasjonsrom"},"Sjekk at brukerpunktet er tilkoblet svitsjen i etasjefordeler/kommunikasjonsrom."),(0,l.kt)("p",null,"Verifiser at brukerpunktet er tilkoblet i etasjefordeler/kommunikasjonsrom og at patche-kabelen er tilstrekkelig koblet inn i panelet og switchen. "),(0,l.kt)("h3",{id:"sjekk-om-det-er-link-p\xe5-nettkortet"},"Sjekk om det er link p\xe5 nettkortet."),(0,l.kt)("p",null,"Dersom det ikke er link p\xe5 nettkortet s\xe5..."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"... kan det v\xe6re feil p\xe5 kabelen mellom brukerpunkt og maskin. Bytt kabelen og sjekk igjen. "),(0,l.kt)("li",{parentName:"ul"},'... nettkortet p\xe5 brukerens maskin kan v\xe6re "disablet" i operativsystemet til brukeren. Sjekk at nettkortet er skrudd p\xe5 i operativsystemet. '),(0,l.kt)("li",{parentName:"ul"},"... kan det v\xe6re feil med kablingen. Vurder m\xe5ling (via elektromont\xf8r) av punktet dersom du allerede byttet patchekabel i punkt 1. ")),(0,l.kt)("h2",{id:"tr\xe5dl\xf8s-tilkobling-wi-fi"},"Tr\xe5dl\xf8s tilkobling (Wi-Fi)"),(0,l.kt)("h3",{id:"tilkobling-til-eduroam"},"Tilkobling til eduroam"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verifiser at brukeren har brukernavn/passord i lokalt brukerdatabase.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Om dette er en eduroam gjestebruker skal sp\xf8rsm\xe5l om brukernavn, passord og oppsett g\xe5 direkte fra bruker til egen institusjon.  "))),(0,l.kt)("li",{parentName:"ul"},"Sjekk at tr\xe5dl\xf8snettet eduroam er synlig for klienten."),(0,l.kt)("li",{parentName:"ul"},"Kj\xf8r eduroam-oppsett p\xe5 ",(0,l.kt)("a",{parentName:"li",href:"https://www.eduroam.no/connect"})),(0,l.kt)("li",{parentName:"ul"},"Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering. ")),(0,l.kt)("h3",{id:"tilkobling-til-gjestenett"},"Tilkobling til gjestenett"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sjekk at det tr\xe5dl\xf8se gjestenettet er synlig for klienten."),(0,l.kt)("li",{parentName:"ul"},"Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering. ")),(0,l.kt)("h3",{id:"sjekk-kvaliteten-p\xe5-signalet"},"Sjekk kvaliteten p\xe5 signalet"),(0,l.kt)("p",null,"Kvaliteten p\xe5 signalet sett fra klienten kan gi en pekepinn p\xe5 om problemet er basert p\xe5 signalstyrke og ogs\xe5 gi nyttig informasjon ved eventuell eskalering. Dette kan sjekkes p\xe5 de forskjellige operativsystemene slik:"),(0,l.kt)("h4",{id:"windows-1"},"Windows"),(0,l.kt)("p",null,"Kj\xf8r kommandoen ",(0,l.kt)("inlineCode",{parentName:"p"},"netsh wlan show interface"),". Her f\xe5r du masse nyttig informasjon, men f\xf8rst og fremst s\xe5 b\xf8r det kikkes p\xe5 linjen ",(0,l.kt)("em",{parentName:"p"},"Signal")," som angi signalstyrken i prosent. "),(0,l.kt)("p",null,"Denne informasjonen b\xf8r v\xe6re med i en eventuell eskalering uavhengig om det er d\xe5rlig eller bra signal, siden det gir informasjon om SSID (tr\xe5dl\xf8snettnavn), MAC-adressen til klienten, kanal/b\xe5nd, protokoller med mer. "),(0,l.kt)("h4",{id:"mac"},"Mac"),(0,l.kt)("p",null,"HER KOMMER MER SNART!"),(0,l.kt)("h4",{id:"linux-1"},"Linux"),(0,l.kt)("p",null,"P\xe5 Linux kan man installere ",(0,l.kt)("inlineCode",{parentName:"p"},"wavemon")," og kj\xf8re dette. Da vil man f\xe5 masse nyttig informasjon, slik som signalkvalitet og signalstyrke. "),(0,l.kt)("p",null,"Denne informasjonen b\xf8r v\xe6re med i en eventuell eskalering uavhengig om det er d\xe5rlig eller bra signal, siden det gir informasjon om SSID (tr\xe5dl\xf8snettnavn), MAC-adressen til klienten, kanal/b\xe5nd, protokoller med mer. "),(0,l.kt)("h2",{id:"adresser"},"Sjekk om brukeren f\xe5r IPv4/IPv6-adresse og identifisering av brukerens MAC-adresse."),(0,l.kt)("h3",{id:"windows-2"},"Windows"),(0,l.kt)("p",null,"F\xf8rst finn rett nettkort \xe5 feils\xf8ke. Dette kan finnes ved \xe5 kj\xf8re ",(0,l.kt)("inlineCode",{parentName:"p"},"netsh interface show interface")," som gir deg en liste over nettkort. Nettkortet du skal feils\xf8ke m\xe5 ha status ",(0,l.kt)("em",{parentName:"p"},"Tilkoblet")," eller ",(0,l.kt)("em",{parentName:"p"},"Connected"),". For tr\xe5dbasert tilkobling heter det ofte noe som starter med ",(0,l.kt)("em",{parentName:"p"},"Ethernet"),". Nettkort som heter noe med ",(0,l.kt)("em",{parentName:"p"},"vEthernet")," er IKKE de som du skal se p\xe5 n\xe5. "),(0,l.kt)("p",null,"Kj\xf8r kommandoen: ",(0,l.kt)("inlineCode",{parentName:"p"},"ipconfig"),". Finn s\xe5 rett innslag basert p\xe5 nettkort-navnet du fant over. Sjekk deretter f\xf8lgende:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finnes det en IP-adresse for IPv4? ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Denne skal IKKE v\xe6re noe som starter p\xe5 169.254.x.x. Dette betyr i prinsippet kortet ikke har IPv4-adresse."),(0,l.kt)("li",{parentName:"ul"},'Dersom maskinen ikke har IPv4-adresse, s\xe5 er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering. '))),(0,l.kt)("li",{parentName:"ul"},"Finnes det en IP-adresse for IPv6? ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Merk at det ikke er nok at maskinen har en adresse som starter p\xe5 fe80::. Den skal ogs\xe5 ha en fullverdig IPv6-adresse som f.eks starter p\xe5 2001:700:"),(0,l.kt)("li",{parentName:"ul"},"Dersom maskinen ikke har IPv6-adresse, s\xe5 KAN dette v\xe6re grunnen til problemene dersom IPv6 er skrudd p\xe5 p\xe5 dette nettet. Uansett s\xe5 kan dette meldes inn ved eskalering. ")))),(0,l.kt)("p",null,"Noter deg ogs\xe5 kortets MAC-adresse slik at du har dette til eventuell eskalering. Dette finner du som ",(0,l.kt)("em",{parentName:"p"},"Fysisk adresse"),"/",(0,l.kt)("em",{parentName:"p"},"Physical address")," i resultatet av kommandoen over. "),(0,l.kt)("h3",{id:"mac-1"},"Mac"),(0,l.kt)("p",null,"HER KOMMER MER SNART!"),(0,l.kt)("h3",{id:"linux-2"},"Linux"),(0,l.kt)("p",null,"Kj\xf8r kommandoen: ",(0,l.kt)("inlineCode",{parentName:"p"},"ip a"),". Da vil IPv4 vises som ",(0,l.kt)("em",{parentName:"p"},"inet")," og IPv6 vises som ",(0,l.kt)("em",{parentName:"p"},"inet6"),". Finn rett nettkort og sjekk f\xf8lgende:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finnes det en IP-adresse for IPv4? ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Dersom maskinen ikke har IPv4-adresse, s\xe5 er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering. '))),(0,l.kt)("li",{parentName:"ul"},"Finnes det en IP-adresse for IPv6? ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Merk at det ikke er nok at maskinen har en adresse som starter p\xe5 fe80::. Den skal ogs\xe5 ha en fullverdig IPv6-adresse som f.eks starter p\xe5 2001:700:"),(0,l.kt)("li",{parentName:"ul"},"Dersom maskinen ikke har IPv6-adresse, s\xe5 KAN dette v\xe6re grunnen til problemene dersom IPv6 er skrudd p\xe5 p\xe5 dette nettet. Uansett s\xe5 kan dette meldes inn ved eskalering. ")))),(0,l.kt)("p",null,"Noter deg ogs\xe5 kortets MAC-adresse slik at du har dette til eventuell eskalering. Dette finner du som ",(0,l.kt)("em",{parentName:"p"},"link/ether")," i resultatet av kommandoen over. "),(0,l.kt)("h2",{id:"sjekk-n\xe5barhet-til-ressurser"},"Sjekk n\xe5barhet til ressurser"),(0,l.kt)("p",null,"Dersom brukeren har IPv4-/IPv6-adresse og er tilkoblet nettet, men det fortsatt er problemer med nettet, s\xe5 m\xe5 f\xf8lgende sjekkes:"),(0,l.kt)("h3",{id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-ping-mot-default-gateway"},"Sjekk om det er mulig \xe5 kj\xf8re ping mot default gateway."),(0,l.kt)("h4",{id:"windows-3"},"Windows"),(0,l.kt)("p",null,"IPv4: Kj\xf8r kommandoen: ",(0,l.kt)("inlineCode",{parentName:"p"},"route print 0.0.0.0"),". Finn IP-adressen til default gateway og fors\xf8k en ping mot denne adressen.\nIPv6: Kj\xf8r kommandoen: ",(0,l.kt)("inlineCode",{parentName:"p"},"ping ::1"),". "),(0,l.kt)("p",null,"Fungerer ikke en eller begge dissee, s\xe5 bruk dette som informasjon ved eskalering."),(0,l.kt)("h4",{id:"mac-2"},"Mac"),(0,l.kt)("p",null,"HER KOMMER MER SNART!"),(0,l.kt)("h4",{id:"linux-3"},"Linux"),(0,l.kt)("p",null,"IPv4: Kj\xf8r kommandoen: ",(0,l.kt)("inlineCode",{parentName:"p"},"ip route")," og finn default-rute. Ping denne adressen.\nIPv6: Kj\xf8r kommandoen: ",(0,l.kt)("inlineCode",{parentName:"p"},"ping ::1"),". "),(0,l.kt)("p",null,"Fungerer ikke en eller begge dissee, s\xe5 bruk dette som informasjon ved eskalering."),(0,l.kt)("h3",{id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-navneoppslag-mot-feks-wwwgooglecom"},"Sjekk om det er mulig \xe5 kj\xf8re navneoppslag mot f.eks ",(0,l.kt)("a",{parentName:"h3",href:"http://www.google.com"},"www.google.com")),(0,l.kt)("h4",{id:"windows-4"},"Windows"),(0,l.kt)("p",null,"Kj\xf8r kommandoen ",(0,l.kt)("inlineCode",{parentName:"p"},"nslookup www.google.com"),". Da skal du f\xe5 svar med IP-adressen til denne siden. Fungerer ikke dette, s\xe5 bruk dette som informasjon ved eskalering. "),(0,l.kt)("h4",{id:"mac-3"},"Mac"),(0,l.kt)("p",null,"HER KOMMER MER SNART!"),(0,l.kt)("h4",{id:"linux-4"},"Linux"),(0,l.kt)("p",null,"Kj\xf8r kommandoen ",(0,l.kt)("inlineCode",{parentName:"p"},"host www.google.com"),". Da skal du f\xe5 svar med IP-adressen til denne siden. Fungerer ikke dette, s\xe5 bruk dette som informasjon ved eskalering."))}m.isMDXComponent=!0}}]);