"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[3596],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=d(t),v=a,u=g["".concat(o,".").concat(v)]||g[v]||k[v]||i;return t?r.createElement(u,s(s({ref:n},m),{},{components:t})):r.createElement(u,s({ref:n},m))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={author:["Einar Jerpseth"],title:"Web Services for Dummies"},s=void 0,l={unversionedId:"datadeling/veiledere/annet/anskaffelse/webservicefordummies",id:"datadeling/veiledere/annet/anskaffelse/webservicefordummies",title:"Web Services for Dummies",description:"Vi vet ikke hvilke tjenester vi trenger i fremtiden, men b\xe5de endringstakten og",source:"@site/docs/datadeling/veiledere/annet/anskaffelse/webservicefordummies.md",sourceDirName:"datadeling/veiledere/annet/anskaffelse",slug:"/datadeling/veiledere/annet/anskaffelse/webservicefordummies",permalink:"/docs/datadeling/veiledere/annet/anskaffelse/webservicefordummies",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/veiledere/annet/anskaffelse/webservicefordummies.md",tags:[],version:"current",lastUpdatedAt:1679664223,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{author:["Einar Jerpseth"],title:"Web Services for Dummies"},sidebar:"datadeling",previous:{title:"Sanntidsoppdatering",permalink:"/docs/datadeling/veiledere/annet/anskaffelse/sanntidsoppdatering"},next:{title:"F\xe5 tilgang til et API",permalink:"/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang"}},o={},d=[],m={toc:d};function k(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Vi vet ikke hvilke tjenester vi trenger i fremtiden, men b\xe5de endringstakten og\nkravene til digitalisering \xf8ker. Det er derfor viktig \xe5 tenke p\xe5 fremtidige\nkostnader, dvs. at i ROS- og kost/nytte-analyser b\xf8r man legge inn et godt\nslingringsmonn for at IT-tjenesten skal ha endringsevne. Man skal kunne endre,\ns\xe5gar skifte ut, enhver programvare uten at dette utl\xf8ser store kostnader,\nheller ikke i andre deler av virksomheten."),(0,a.kt)("p",null,"Tidligere har vi gjort programvarevalg som har gjort bytte av programvare\nveldig kostbart, f.eks. programvare for arkiv, l\xf8nn, regnskap, integrasjon, og\nstudentsystem. I noen IT-tjenester med mange integrasjoner knyttet til seg, har\nvi v\xe6rt i en ",(0,a.kt)("em",{parentName:"p"},"lock in")," situasjon (Synkroniseringseffekt). I praksis betyr dette\nat programvaren ikke kan skiftes ut fordi kostnadene ved skiftet blir for\nstore. Illustrasjonen under viser hvordan programvaren BAS leverer data til\n\xe5tte forskjellige konsumenter, d.v.s. mottagere av data. Hvis man byttet ut\nprogramvaren BAS, ville det utl\xf8se endringer, og dermed kostnader, i alle disse\nkonsumentene. Og alle m\xe5 skifte til samme tid."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1931).Z,width:"232",height:"208"})),(0,a.kt)("p",null,"I realiteten har vi gjerne ikke \xe5tte konsumenter, som i tegningen, men 50+.\nHvis alle disse har egne spesialtilpassede uttrekk (datasett) kan ingenting\ngjenbrukes, og alt blir p\xe5virket av et bytte."),(0,a.kt)("p",null,"Hvis det derimot hadde v\xe6rt et API mellom BAS og konsumentene, slik at hver\nkonsument hentet dataene de trengte og selv tilpasset den til sitt format,\nkunne man endret eller skiftet ut hele BAS uten at dette skapte\nstore endringer for noen av konsumentene. S\xe5 lenge API-et til ny og gammel BAS\nf\xf8lger samme API."),(0,a.kt)("p",null,"I praksis vil det alltids bli mindre endringer. For eksempel kunne det hende at\nnytt BAS ville m\xe5tte endre intern id for alle sine entiteter. Dette er likevel\nmye mindre kostbart \xe5 endre p\xe5, enn \xe5 m\xe5tte bytte ut hele integrasjonen."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4791).Z,width:"232",height:"270"})),(0,a.kt)("p",null,"Mellom BAS (produsent/kildesystem) ser vi at det er kommet et API. Dette er\ntegnet inn med en hvit og en svart side. Den hvite siden, den konsumentene\nsnakker med (de vet ikke om den svarte siden), beh\xf8ver ikke endres. Den svarte\nsiden kan hente eller levere data til flere kildesystemer. Hvilke kildesystemer\nsom kommuniseres med beh\xf8ver ikke konsumenten vite om. Heller ikke om den\nsvarte siden benytter SQL, snakker med leverand\xf8rens egen (proriet\xe6re) WS,\neller annet. Slik kan man s\xf8ml\xf8st og over en tidsperiode bytte ut\nBAS-programvaren, uten at dette medf\xf8rer planlegging, prioritering og\nkoordinering med konsumentene."),(0,a.kt)("p",null,"Det er ikke alltid leverand\xf8rens WS tilbyr de data man \xf8nsker seg, og opp mot\nstore skyleverand\xf8rer kan det v\xe6re umulig \xe5 f\xe5 dette implementert som en liten\nkunde. Derfor er det mange vurderinger som m\xe5 gj\xf8res mht. API n\xe5r IT-tjenester\nanskaffes. Den aller viktigste er: Skal man bygge, eller ha muligheten til \xe5\nbygge, en egen WS? Dette virker kanskje som en uoverkommelig stor oppgave, men\ndet finnes mange rammeverk i dag som gj\xf8r dette arbeidet veldig overkommelig.\nDet avhenger naturligvis om man bare skal tilby data, eller hvor rik\nfunksjonalitet man \xf8nsker \xe5 tilby. Man kan kombinere: Lage en selvutviklet WS\nfor dataene mange konsumenter benytter, og benytte leverand\xf8rens for de f\xe5\nkonsumentene med spesielle behov. Dette er vist i illustrasjonen under."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1679).Z,width:"405",height:"322"})),(0,a.kt)("p",null,"Videre: Dersom IT-tjenesten kommer fra en leverand\xf8r med et WS API som\ntilfredsstiller de \xf8nsker vi har til utforming, kan man vurdere noen andre\nmuligheter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Kan man lisens- og utviklingsmessig beholde og endre leverand\xf8rens API, selv\nom man bytter ut leverand\xf8rens bakenforliggende programvare?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Skal man vente med \xe5 bygge en egen WS til man er i en situasjon hvor man skal\nskifte bakenforliggende programvare, og da bygge den selvlagde slik at det p\xe5\nden hvite siden ser ut som leverand\xf8rens? Alts\xe5 slik at konsumentene ikke\nmerker at man skifter API?"))))}k.isMDXComponent=!0},4791:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/ny-bas-5553b35fdfb73b771760ebb104b4f773.jpg"},1931:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/old-push-567d9c0aff907ff760805fb99e6bfda1.jpg"},1679:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/ws-kjope-bygge-59932b788d3da7fc02c3c2b70113ef65.jpg"}}]);