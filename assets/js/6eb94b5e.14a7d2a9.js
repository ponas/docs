"use strict";(self.webpackChunkdocs_uninett_no=self.webpackChunkdocs_uninett_no||[]).push([[351],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return d}});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),o=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},k=function(e){var t=o(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},I=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,k=g(e,["components","mdxType","originalType","parentName"]),I=o(n),d=i,C=I["".concat(s,".").concat(d)]||I[d]||m[d]||r;return n?l.createElement(C,a(a({ref:t},k),{},{components:n})):l.createElement(C,a({ref:t},k))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=I;var g={};for(var s in t)hasOwnProperty.call(t,s)&&(g[s]=t[s]);g.originalType=e,g.mdxType="string"==typeof e?e:i,a[1]=g;for(var o=2;o<r;o++)a[o]=n[o];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}I.displayName="MDXCreateElement"},325:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return s},metadata:function(){return o},assets:function(){return k},toc:function(){return m},default:function(){return d}});var l=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],g={title:"Grunnleggende feils\xf8king ved problemer i lokalnett"},s=void 0,o={unversionedId:"cnaas/grunnleggende-feilsok-lokalnett",id:"cnaas/grunnleggende-feilsok-lokalnett",title:"Grunnleggende feils\xf8king ved problemer i lokalnett",description:"Innledning",source:"@site/docs/cnaas/grunnleggende-feilsok-lokalnett.md",sourceDirName:"cnaas",slug:"/cnaas/grunnleggende-feilsok-lokalnett",permalink:"/docs/cnaas/grunnleggende-feilsok-lokalnett",editUrl:"https://github.com/sikt-no/docs/tree/master/docs/cnaas/grunnleggende-feilsok-lokalnett.md",tags:[],version:"current",lastUpdatedAt:1646830058,formattedLastUpdatedAt:"3/9/2022",frontMatter:{title:"Grunnleggende feils\xf8king ved problemer i lokalnett"},sidebar:"cnaas",previous:{title:'Driftsinstruks for kunder av "Lokalnett fra Uninett - CNaaS"',permalink:"/docs/cnaas/driftsinstruks-kunde"},next:{title:"N\xf8dvendig informasjon f\xf8r eskalering av lokalnett-relaterte saker til Uninett.",permalink:"/docs/cnaas/info-ved-eskalering"}},k={},m=[{value:"Innledning",id:"innledning",level:2},{value:"Tr\xe5dbasert tilkobling",id:"tr\xe5dbasert-tilkobling",level:2},{value:"Sjekk at brukerpunktet er tilkoblet svitsjen i etasjefordeler/kommunikasjonsrom.",id:"sjekk-at-brukerpunktet-er-tilkoblet-svitsjen-i-etasjefordelerkommunikasjonsrom",level:3},{value:"Sjekk om det er link p\xe5 nettkortet.",id:"sjekk-om-det-er-link-p\xe5-nettkortet",level:3},{value:"Tr\xe5dl\xf8s tilkobling (Wi-Fi)",id:"tr\xe5dl\xf8s-tilkobling-wi-fi",level:2},{value:"Tilkobling til eduroam",id:"tilkobling-til-eduroam",level:3},{value:"Tilkobling til gjestenett",id:"tilkobling-til-gjestenett",level:3},{value:"Sjekk kvaliteten p\xe5 signalet",id:"sjekk-kvaliteten-p\xe5-signalet",level:3},{value:"Windows",id:"windows",level:4},{value:"Mac",id:"mac",level:4},{value:"Linux",id:"linux",level:4},{value:"Sjekk om brukeren f\xe5r IPv4/IPv6-adresse og identifisering av brukerens MAC-adresse.",id:"adresser",level:2},{value:"Windows",id:"windows-1",level:3},{value:"Mac",id:"mac-1",level:3},{value:"Linux",id:"linux-1",level:3},{value:"Sjekk n\xe5barhet til ressurser",id:"sjekk-n\xe5barhet-til-ressurser",level:2},{value:"Sjekk om det er mulig \xe5 kj\xf8re ping mot default gateway.",id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-ping-mot-default-gateway",level:3},{value:"Windows",id:"windows-2",level:4},{value:"Mac",id:"mac-2",level:4},{value:"Linux",id:"linux-2",level:4},{value:"Sjekk om det er mulig \xe5 kj\xf8re navneoppslag mot f.eks www.google.com",id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-navneoppslag-mot-feks-wwwgooglecom",level:3},{value:"Windows",id:"windows-3",level:4},{value:"Mac",id:"mac-3",level:4},{value:"Linux",id:"linux-3",level:4}],I={toc:m};function d(e){var t=e.components,g=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,l.Z)({},I,g,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(68).Z,width:"177",height:"48"})),(0,r.kt)("h2",{id:"innledning"},"Innledning"),(0,r.kt)("p",null,"Denne artikkelen har som m\xe5l \xe5 gi hjelp til brukerst\xf8tte n\xe5r brukere har problemer med tilkobling til eller bruk av lokalnettet. Den inneholder da litt tips og triks slik at brukerst\xf8tte kan isolere problemet og gir viktig grunnlag for feils\xf8king ved eskalering til Uninett."),(0,r.kt)("h2",{id:"tr\xe5dbasert-tilkobling"},"Tr\xe5dbasert tilkobling"),(0,r.kt)("h3",{id:"sjekk-at-brukerpunktet-er-tilkoblet-svitsjen-i-etasjefordelerkommunikasjonsrom"},"Sjekk at brukerpunktet er tilkoblet svitsjen i etasjefordeler/kommunikasjonsrom."),(0,r.kt)("p",null,"Verifiser at brukerpunktet er tilkoblet i etasjefordeler/kommunikasjonsrom og at patche-kabelen er tilstrekkelig koblet inn i panelet og switchen. "),(0,r.kt)("h3",{id:"sjekk-om-det-er-link-p\xe5-nettkortet"},"Sjekk om det er link p\xe5 nettkortet."),(0,r.kt)("p",null,"Dersom det ikke er link p\xe5 nettkortet s\xe5..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"... kan det v\xe6re feil p\xe5 kabelen mellom brukerpunkt og maskin. Bytt kabelen og sjekk igjen. "),(0,r.kt)("li",{parentName:"ul"},'... nettkortet p\xe5 brukerens maskin kan v\xe6re "disablet" i operativsystemet til brukeren. Sjekk at nettkortet er skrudd p\xe5 i operativsystemet. '),(0,r.kt)("li",{parentName:"ul"},"... kan det v\xe6re feil med kablingen. Vurder m\xe5ling (via elektromont\xf8r) av punktet dersom du allerede byttet patchekabel i punkt 1. ")),(0,r.kt)("h2",{id:"tr\xe5dl\xf8s-tilkobling-wi-fi"},"Tr\xe5dl\xf8s tilkobling (Wi-Fi)"),(0,r.kt)("h3",{id:"tilkobling-til-eduroam"},"Tilkobling til eduroam"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verifiser at brukeren har brukernavn/passord i lokalt brukerdatabase.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Om dette er en eduroam gjestebruker skal sp\xf8rsm\xe5l om brukernavn, passord og oppsett g\xe5 direkte fra bruker til egen institusjon.  "))),(0,r.kt)("li",{parentName:"ul"},"Sjekk at tr\xe5dl\xf8snettet eduroam er synlig for klienten."),(0,r.kt)("li",{parentName:"ul"},"Kj\xf8r eduroam-oppsett p\xe5 ",(0,r.kt)("a",{parentName:"li",href:"https://www.eduroam.no/connect"})),(0,r.kt)("li",{parentName:"ul"},"Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering. ")),(0,r.kt)("h3",{id:"tilkobling-til-gjestenett"},"Tilkobling til gjestenett"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sjekk at det tr\xe5dl\xf8se gjestenettet er synlig for klienten."),(0,r.kt)("li",{parentName:"ul"},"Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering. ")),(0,r.kt)("h3",{id:"sjekk-kvaliteten-p\xe5-signalet"},"Sjekk kvaliteten p\xe5 signalet"),(0,r.kt)("p",null,"Kvaliteten p\xe5 signalet sett fra klienten kan gi en pekepinn p\xe5 om problemet er basert p\xe5 signalstyrke og ogs\xe5 gi nyttig informasjon ved eventuell eskalering. Dette kan sjekkes p\xe5 de forskjellige operativsystemene slik:"),(0,r.kt)("h4",{id:"windows"},"Windows"),(0,r.kt)("p",null,"Kj\xf8r kommandoen ",(0,r.kt)("inlineCode",{parentName:"p"},"netsh wlan show interface"),". Her f\xe5r du masse nyttig informasjon, men f\xf8rst og fremst s\xe5 b\xf8r det kikkes p\xe5 linjen ",(0,r.kt)("em",{parentName:"p"},"Signal")," som angi signalstyrken i prosent. "),(0,r.kt)("p",null,"Denne informasjonen b\xf8r v\xe6re med i en eventuell eskalering uavhengig om det er d\xe5rlig eller bra signal, siden det gir informasjon om SSID (tr\xe5dl\xf8snettnavn), MAC-adressen til klienten, kanal/b\xe5nd, protokoller med mer. "),(0,r.kt)("h4",{id:"mac"},"Mac"),(0,r.kt)("p",null,"HER KOMMER MER SNART!"),(0,r.kt)("h4",{id:"linux"},"Linux"),(0,r.kt)("p",null,"P\xe5 Linux kan man installere ",(0,r.kt)("inlineCode",{parentName:"p"},"wavemon")," og kj\xf8re dette. Da vil man f\xe5 masse nyttig informasjon, slik som signalkvalitet og signalstyrke. "),(0,r.kt)("p",null,"Denne informasjonen b\xf8r v\xe6re med i en eventuell eskalering uavhengig om det er d\xe5rlig eller bra signal, siden det gir informasjon om SSID (tr\xe5dl\xf8snettnavn), MAC-adressen til klienten, kanal/b\xe5nd, protokoller med mer. "),(0,r.kt)("h2",{id:"adresser"},"Sjekk om brukeren f\xe5r IPv4/IPv6-adresse og identifisering av brukerens MAC-adresse."),(0,r.kt)("h3",{id:"windows-1"},"Windows"),(0,r.kt)("p",null,"F\xf8rst finn rett nettkort \xe5 feils\xf8ke. Dette kan finnes ved \xe5 kj\xf8re ",(0,r.kt)("inlineCode",{parentName:"p"},"netsh interface show interface")," som gir deg en liste over nettkort. Nettkortet du skal feils\xf8ke m\xe5 ha status ",(0,r.kt)("em",{parentName:"p"},"Tilkoblet")," eller ",(0,r.kt)("em",{parentName:"p"},"Connected"),". For tr\xe5dbasert tilkobling heter det ofte noe som starter med ",(0,r.kt)("em",{parentName:"p"},"Ethernet"),". Nettkort som heter noe med ",(0,r.kt)("em",{parentName:"p"},"vEthernet")," er IKKE de som du skal se p\xe5 n\xe5. "),(0,r.kt)("p",null,"Kj\xf8r kommandoen: ",(0,r.kt)("inlineCode",{parentName:"p"},"ipconfig"),". Finn s\xe5 rett innslag basert p\xe5 nettkort-navnet du fant over. Sjekk deretter f\xf8lgende:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finnes det en IP-adresse for IPv4? ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Denne skal IKKE v\xe6re noe som starter p\xe5 169.254.x.x. Dette betyr i prinsippet kortet ikke har IPv4-adresse."),(0,r.kt)("li",{parentName:"ul"},'Dersom maskinen ikke har IPv4-adresse, s\xe5 er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering. '))),(0,r.kt)("li",{parentName:"ul"},"Finnes det en IP-adresse for IPv6? ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Merk at det ikke er nok at maskinen har en adresse som starter p\xe5 fe80::. Den skal ogs\xe5 ha en fullverdig IPv6-adresse som f.eks starter p\xe5 2001:700:"),(0,r.kt)("li",{parentName:"ul"},"Dersom maskinen ikke har IPv6-adresse, s\xe5 KAN dette v\xe6re grunnen til problemene dersom IPv6 er skrudd p\xe5 p\xe5 dette nettet. Uansett s\xe5 kan dette meldes inn ved eskalering. ")))),(0,r.kt)("p",null,"Noter deg ogs\xe5 kortets MAC-adresse slik at du har dette til eventuell eskalering. Dette finner du som ",(0,r.kt)("em",{parentName:"p"},"Fysisk adresse"),"/",(0,r.kt)("em",{parentName:"p"},"Physical address")," i resultatet av kommandoen over. "),(0,r.kt)("h3",{id:"mac-1"},"Mac"),(0,r.kt)("p",null,"HER KOMMER MER SNART!"),(0,r.kt)("h3",{id:"linux-1"},"Linux"),(0,r.kt)("p",null,"Kj\xf8r kommandoen: ",(0,r.kt)("inlineCode",{parentName:"p"},"ip a"),". Da vil IPv4 vises som ",(0,r.kt)("em",{parentName:"p"},"inet")," og IPv6 vises som ",(0,r.kt)("em",{parentName:"p"},"inet6"),". Finn rett nettkort og sjekk f\xf8lgende:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finnes det en IP-adresse for IPv4? ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Dersom maskinen ikke har IPv4-adresse, s\xe5 er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering. '))),(0,r.kt)("li",{parentName:"ul"},"Finnes det en IP-adresse for IPv6? ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Merk at det ikke er nok at maskinen har en adresse som starter p\xe5 fe80::. Den skal ogs\xe5 ha en fullverdig IPv6-adresse som f.eks starter p\xe5 2001:700:"),(0,r.kt)("li",{parentName:"ul"},"Dersom maskinen ikke har IPv6-adresse, s\xe5 KAN dette v\xe6re grunnen til problemene dersom IPv6 er skrudd p\xe5 p\xe5 dette nettet. Uansett s\xe5 kan dette meldes inn ved eskalering. ")))),(0,r.kt)("p",null,"Noter deg ogs\xe5 kortets MAC-adresse slik at du har dette til eventuell eskalering. Dette finner du som ",(0,r.kt)("em",{parentName:"p"},"link/ether")," i resultatet av kommandoen over. "),(0,r.kt)("h2",{id:"sjekk-n\xe5barhet-til-ressurser"},"Sjekk n\xe5barhet til ressurser"),(0,r.kt)("p",null,"Dersom brukeren har IPv4-/IPv6-adresse og er tilkoblet nettet, men det fortsatt er problemer med nettet, s\xe5 m\xe5 f\xf8lgende sjekkes:"),(0,r.kt)("h3",{id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-ping-mot-default-gateway"},"Sjekk om det er mulig \xe5 kj\xf8re ping mot default gateway."),(0,r.kt)("h4",{id:"windows-2"},"Windows"),(0,r.kt)("p",null,"IPv4: Kj\xf8r kommandoen: ",(0,r.kt)("inlineCode",{parentName:"p"},"route print 0.0.0.0"),". Finn IP-adressen til default gateway og fors\xf8k en ping mot denne adressen.\nIPv6: Kj\xf8r kommandoen: ",(0,r.kt)("inlineCode",{parentName:"p"},"ping ::1"),". "),(0,r.kt)("p",null,"Fungerer ikke en eller begge dissee, s\xe5 bruk dette som informasjon ved eskalering."),(0,r.kt)("h4",{id:"mac-2"},"Mac"),(0,r.kt)("p",null,"HER KOMMER MER SNART!"),(0,r.kt)("h4",{id:"linux-2"},"Linux"),(0,r.kt)("p",null,"IPv4: Kj\xf8r kommandoen: ",(0,r.kt)("inlineCode",{parentName:"p"},"ip route")," og finn default-rute. Ping denne adressen.\nIPv6: Kj\xf8r kommandoen: ",(0,r.kt)("inlineCode",{parentName:"p"},"ping ::1"),". "),(0,r.kt)("p",null,"Fungerer ikke en eller begge dissee, s\xe5 bruk dette som informasjon ved eskalering."),(0,r.kt)("h3",{id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-navneoppslag-mot-feks-wwwgooglecom"},"Sjekk om det er mulig \xe5 kj\xf8re navneoppslag mot f.eks ",(0,r.kt)("a",{parentName:"h3",href:"http://www.google.com"},"www.google.com")),(0,r.kt)("h4",{id:"windows-3"},"Windows"),(0,r.kt)("p",null,"Kj\xf8r kommandoen ",(0,r.kt)("inlineCode",{parentName:"p"},"nslookup www.google.com"),". Da skal du f\xe5 svar med IP-adressen til denne siden. Fungerer ikke dette, s\xe5 bruk dette som informasjon ved eskalering. "),(0,r.kt)("h4",{id:"mac-3"},"Mac"),(0,r.kt)("p",null,"HER KOMMER MER SNART!"),(0,r.kt)("h4",{id:"linux-3"},"Linux"),(0,r.kt)("p",null,"Kj\xf8r kommandoen ",(0,r.kt)("inlineCode",{parentName:"p"},"host www.google.com"),". Da skal du f\xe5 svar med IP-adressen til denne siden. Fungerer ikke dette, s\xe5 bruk dette som informasjon ved eskalering."))}d.isMDXComponent=!0},68:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiCiAgIHdpZHRoPSIxNzcuMTYzNzUiCiAgIGhlaWdodD0iNDcuODgzMjUiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9IlZlY3RvciBTbWFydCBPYmplY3QuYWkiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTgiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnM2Ij48Y2xpcFBhdGgKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImNsaXBQYXRoMTYiPjxwYXRoCiAgICAgICAgIGQ9Im0gMCwzOC4zMDcgMTQxLjczMSwwIEwgMTQxLjczMSwwIDAsMCAwLDM4LjMwNyB6IgogICAgICAgICBpZD0icGF0aDE4IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI2MyIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4OTciCiAgICAgaWQ9Im5hbWVkdmlldzQiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjQuNDM2NTczMyIKICAgICBpbmtzY2FwZTpjeD0iOTQuMjU1OTI4IgogICAgIGlua3NjYXBlOmN5PSItMy42NzU2MjMiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMTAiIC8+PGcKICAgICBpZD0iZzEwIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaW5rc2NhcGU6bGFiZWw9IlZlY3RvciBTbWFydCBPYmplY3QiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsMCw0Ny44ODMyNSkiPjxnCiAgICAgICBpZD0iZzEyIj48ZwogICAgICAgICBpZD0iZzE0IgogICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgxNikiPjxnCiAgICAgICAgICAgaWQ9ImcyMCIKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDEuNzMxNCw2LjUwNDkpIj48cGF0aAogICAgICAgICAgICAgZD0ibSAwLDAgYyAwLC0zLjU3OSAtMi45MjgsLTYuNTA1IC02LjUwNSwtNi41MDUgbCAtMTI4LjcxOSwwIGMgLTMuNTgxLDAgLTYuNTA3LDIuOTI2IC02LjUwNyw2LjUwNSBsIDAsMjUuMjk3IGMgMCwzLjU3OCAyLjkyNiw2LjUwNSA2LjUwNyw2LjUwNSBsIDEyOC43MTksMCBDIC0yLjkyOCwzMS44MDIgMCwyOC44NzUgMCwyNS4yOTcgTCAwLDAgeiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNlZTMyNDM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBpZD0icGF0aDIyIiAvPjwvZz48ZwogICAgICAgICAgIGlkPSJnMjQiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMzA5MSwyOC45MDg3KSI+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gMCwwIDQuOTU4LDAgMCwtMTIuNjY4IGMgMCwtNC43MjkgLTMuMzE0LC03LjkzIC04LjU5NCwtNy45MyAtNS4yODEsMCAtOC41OTgsMy4yMDEgLTguNTk4LDcuOTMgbCAwLDEyLjY2OCA0Ljk2MywwIDAsLTEyLjc4NCBjIDAsLTIuNDIyIDEuNDQ0LC0zLjY5IDMuNjM1LC0zLjY5IDIuMTkxLDAgMy42MzYsMS4yNjggMy42MzYsMy42OSBMIDAsMCB6IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICAgIGlkPSJwYXRoMjYiIC8+PC9nPjxnCiAgICAgICAgICAgaWQ9ImcyOCIKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NS41NzQ3LDguNzExOSkiPjxwYXRoCiAgICAgICAgICAgICBkPSJtIDAsMCAtNy41NTksMTEuNzk5IDAsLTExLjc5OSAtNC44NDcsMCAwLDIwLjE5NyA0LjcwMSwwIDcuNTg2LC0xMS44MDIgMCwxMS44MDIgNC44NSwwIEwgNC43MzEsMCAwLDAgeiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBpZD0icGF0aDMwIiAvPjwvZz48cGF0aAogICAgICAgICAgIGQ9Im0gNjAuMjI5LDguNzEyIC00Ljk2LDAgMCwyMC4xOTcgNC45NiwwIDAsLTIwLjE5NyB6IgogICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgaWQ9InBhdGgzMiIgLz48ZwogICAgICAgICAgIGlkPSJnMzQiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjYuOTk1NiwyOC45MDg3KSI+PHBhdGgKICAgICAgICAgICAgIGQ9Ik0gMCwwIDcuNTg2LC0xMS44MDIgNy41ODYsMCAwLDAgeiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBpZD0icGF0aDM2IiAvPjwvZz48ZwogICAgICAgICAgIGlkPSJnMzgiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODAuMjIzNiwyOC45MDg3KSI+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gMCwwIDE0LjYyNiwwIDAsLTQuMTI1IC05LjY2NSwwIDAsLTMuNzc5IDguODA5LDAgMCwtNC4xMjcgLTguODA5LDAgMCwtNC4wNDIgOS42OTgsMCAwLC00LjEyNCBMIDAsLTIwLjE5NyAwLDAgeiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBpZD0icGF0aDQwIiAvPjwvZz48ZwogICAgICAgICAgIGlkPSJnNDIiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyLjI1MiwyOC45MDg3KSI+PHBhdGgKICAgICAgICAgICAgIGQ9Im0gMCwwIDAsLTQuMTg1IC01LjQ1MSwwIDAsLTE2LjAxMiAtNC45NjQsMCAwLDE2LjAxMiAtNS40NTEsMCAwLDQuMTg1IEwgMCwwIHoiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgICAgaWQ9InBhdGg0NCIgLz48L2c+PGcKICAgICAgICAgICBpZD0iZzQ2IgogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOS42NTcyLDI4LjkwODcpIj48cGF0aAogICAgICAgICAgICAgZD0ibSAwLDAgMCwtNC4xODUgLTUuNDU2LDAgMCwtMTYuMDEyIC00Ljk1NywwIDAsMTYuMDEyIC01LjQ1NiwwIDAsNC4xODUgTCAwLDAgeiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBpZD0icGF0aDQ4IiAvPjwvZz48ZwogICAgICAgICAgIGlkPSJnNTAiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMuNDYxOSw4LjcxMTkpIj48cGF0aAogICAgICAgICAgICAgZD0iTSAwLDAgLTcuNTg2LDExLjgwMiAtNy41ODYsMCAwLDAgeiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgICBpZD0icGF0aDUyIiAvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="}}]);