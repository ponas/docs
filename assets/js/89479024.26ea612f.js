"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[3431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=r.createContext({}),o=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=o(e.components);return r.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},j=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,g=e.parentName,k=M(e,["components","mdxType","originalType","parentName"]),j=o(n),d=i,y=j["".concat(g,".").concat(d)]||j[d]||s[d]||a;return n?r.createElement(y,l(l({ref:t},k),{},{components:n})):r.createElement(y,l({ref:t},k))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=j;var M={};for(var g in t)hasOwnProperty.call(t,g)&&(M[g]=t[g]);M.originalType=e,M.mdxType="string"==typeof e?e:i,l[1]=M;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}j.displayName="MDXCreateElement"},8433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>M,toc:()=>o});var r=n(7462),i=(n(7294),n(3905));const a={slug:"/datadeling/teknisk-plattform/",title:"IntArk sin tekniske plattform",sidebar_position:1},l=void 0,M={unversionedId:"datadeling/teknisk-plattform/index",id:"datadeling/teknisk-plattform/index",title:"IntArk sin tekniske plattform",description:"IntArk sin tekniske plattform hjelper deg med integrasjonsarbeidet, og utvides",source:"@site/docs/datadeling/teknisk-plattform/index.md",sourceDirName:"datadeling/teknisk-plattform",slug:"/datadeling/teknisk-plattform/",permalink:"/docs/datadeling/teknisk-plattform/",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/teknisk-plattform/index.md",tags:[],version:"current",lastUpdatedAt:1696398656,formattedLastUpdatedAt:"Oct 4, 2023",sidebarPosition:1,frontMatter:{slug:"/datadeling/teknisk-plattform/",title:"IntArk sin tekniske plattform",sidebar_position:1},sidebar:"datadeling",previous:{title:"Rollene i fellestjenesten for Datadeling",permalink:"/docs/datadeling/hva-er/roller/"},next:{title:"Oversikt over den tekniske plattformen",permalink:"/docs/datadeling/teknisk-plattform/oversikt"}},g={},o=[{value:"API manager",id:"api-manager",level:2},{value:"Administrasjon av dine API og tilganger",id:"administrasjon-av-dine-api-og-tilganger",level:3},{value:"API Gateway",id:"api-gateway",level:2},{value:"Tilgangskontroll for dine API",id:"tilgangskontroll-for-dine-api",level:3},{value:"Selvbetjeningsportal for RabbitMQ",id:"selvbetjeningsportal-for-rabbitmq",level:2},{value:"Administrasjon av tilgang til dine meldinger",id:"administrasjon-av-tilgang-til-dine-meldinger",level:3},{value:"Meldingsk\xf8",id:"meldingsk\xf8",level:2},{value:"H\xe5ndtering av dine meldinger",id:"h\xe5ndtering-av-dine-meldinger",level:3},{value:"Konnektorer",id:"konnektorer",level:2}],k={toc:o};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"IntArk sin tekniske plattform hjelper deg med integrasjonsarbeidet, og utvides\nved behov. Verkt\xf8yene bygger p\xe5 de ",(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/om/komponenter"},"funksjonelle komponentene i\nIntArk"),"."),(0,i.kt)("h2",{id:"api-manager"},"API manager"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gravitee",src:n(8204).Z,width:"200",height:"185"})),(0,i.kt)("h3",{id:"administrasjon-av-dine-api-og-tilganger"},"Administrasjon av dine API og tilganger"),(0,i.kt)("p",null,"Vi bruker ",(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/teknisk-plattform/gravitee"},"Gravitee")," som API\nManager, og hver institusjon f\xe5r sin egen, isolerte Gravitee-instans."),(0,i.kt)("p",null,"Mer detaljer om API manager:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/datadeling/teknisk-plattform/gravitee"},"Hvordan vi bruker Gravitee")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/datadeling/teknisk-plattform/oversikt"},"Tekniske detaljer"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/veiledere"},"Veiledere for API manager"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/datadeling/veiledere/innforing"},"Veileder for \xe5 komme i gang med IntArk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api"},"Veileder for \xe5 registrere et API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang"},"Veileder for \xe5 s\xf8ke om tilgang til API"))),(0,i.kt)("h2",{id:"api-gateway"},"API Gateway"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gravitee",src:n(8204).Z,width:"200",height:"185"})),(0,i.kt)("h3",{id:"tilgangskontroll-for-dine-api"},"Tilgangskontroll for dine API"),(0,i.kt)("p",null,"API gateway er en proxy for ditt API, som brukes for tilgangskontroll og\nlogging. API gateway styres av API manager. Teknisk sett er dette to separate\nkomponenter i samme produkt."),(0,i.kt)("p",null,"Vi bruker ",(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/teknisk-plattform/gravitee"},"Gravitee")," som API\nGateway."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/datadeling/teknisk-plattform/oversikt"},"Tilkoblingsdetaljer"))),(0,i.kt)("h2",{id:"selvbetjeningsportal-for-rabbitmq"},"Selvbetjeningsportal for RabbitMQ"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BROM",src:n(4432).Z,title:"Logo for BROM er laget av Freepik fra www.flaticon.com",width:"512",height:"512"})),(0,i.kt)("h3",{id:"administrasjon-av-tilgang-til-dine-meldinger"},"Administrasjon av tilgang til dine meldinger"),(0,i.kt)("p",null,"En enkel selvbetjening foran RabbitMQ, s\xe5 datatilbydere og konsumenter kan selv forvalte sine tilganger til notifikasjoner."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/datadeling/teknisk-plattform/brom"},"Mer detaljer om Selvbetjeningsportalen for RabbitMQ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/datadeling/veiledere/meldingsk%C3%B8/opprett-tjeneste"},"Veileder for \xe5 registrere din tjeneste i selvbetjeningsportalen"))),(0,i.kt)("h2",{id:"meldingsk\xf8"},"Meldingsk\xf8"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RabbitMQ",src:n(8593).Z,width:"569",height:"88"})),(0,i.kt)("h3",{id:"h\xe5ndtering-av-dine-meldinger"},"H\xe5ndtering av dine meldinger"),(0,i.kt)("p",null,"RabbitMQ ser til at meldinger, spesielt\n",(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/begreper/notifikasjon"},"notifikasjoner"),", leveres mellom\ntjenester. Dette brukes blant annet i integrasjonsm\xf8nsteret ",(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert"},"hendelsesbasert\nprovisjonering"),"."),(0,i.kt)("p",null,"Bruk helst ",(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/teknisk-plattform/brom"},"Selvbetjeningsportalen for\nRabbitMQ")," for \xe5 administrere dine\ntjenester og tilganger. RabbitMQ krever mer teknisk innsikt \xe5 bruke, og i\ntillegg hjelper Selvbetjeningsportalen deg \xe5 sette opp meldingsk\xf8er p\xe5 en\nstandard m\xe5te."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/datadeling/teknisk-plattform/oversikt"},"Tilkoblingsdetaljer"))),(0,i.kt)("h2",{id:"konnektorer"},"Konnektorer"),(0,i.kt)("p",null,"Jo flere som f\xf8lger IntArk for sine integrasjoner, jo mer IntArk-kompatible\nkonnektorer kan gjenbrukes av andre. Se ",(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/kode"},"kodeeksempler"),"\nog ",(0,i.kt)("a",{parentName:"p",href:"/docs/datadeling/erfaringer"},"erfaringsdelingen"),"."))}s.isMDXComponent=!0},4432:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTAgNTEwIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IlhNTElEXzE0MzVfIj48cGF0aCBpZD0iWE1MSURfMTQ0MF8iIGQ9Im00NzMuMjk4IDM2OC43NzVjLTE1LjkxMS02LjkzNi0zNy41NzUtMTMuMjQ4LTYzLjA2My0xOC40MTEtNS4xMzYtMjguMjE5LTE3LjkxNS01NC43MzItMzYuOTY0LTc2LjM1NC4wNzItLjA3My4xNDMtLjE0NS4yMTUtLjIxOCAxMy44MzEtMTQuMDI2IDIzLjgyNC0yNC4xNTkgMzYuNTQ4LTU5LjQyNSAyOC44OTYtODAuMDkyLTIuMTMzLTE2My4yMjEtMy40NjktMTY2LjcyMWwtNi4yMTEtMTYuMjgxLTE1LjE3NiA4LjU2NWMtMy4yNjIgMS44NDEtODAuMjIgNDYuMDA4LTEwOS4xMTggMTI2LjEtMTAuMDQxIDI3LjgzMS0xMC44NTggMzguNDA5LTEwLjYgNTQuOTQ5LTYuOTY1LS40NTktMTMuOTU2LS40NTktMjAuOTIxIDAgLjI1OC0xNi41NC0uNTU5LTI3LjExOC0xMC42LTU0Ljk0OS0yOC44OTctODAuMDkyLTEwNS44NTUtMTI0LjI1OS0xMDkuMTE3LTEyNi4xbC0xNS4xNzYtOC41NjUtNi4yMTEgMTYuMjgxYy0xLjMzNSAzLjUtMzIuMzY1IDg2LjYyOS0zLjQ2OSAxNjYuNzIxIDEyLjcyNCAzNS4yNjYgMjIuNzE3IDQ1LjM5OSAzNi41NDggNTkuNDI1LjA3Mi4wNzMuMTQzLjE0NS4yMTUuMjE4LTE5LjA4IDIxLjY1Ny0zMS44NjkgNDguMjIyLTM2Ljk4OCA3Ni40OTMtMjUuNDQzIDUuMTI2LTQ3LjAxNyAxMS4zNjUtNjIuODQyIDE4LjIwMy05LjEyNyAzLjk0NS0zNi44OTkgMTUuOTQ2LTM2Ljg5OSAzOC44MjcgMCAyMy42NDMgMjYuNzgzIDQxLjM5NyA4MS44OCA1NC4yNzYgNDYuNDE3IDEwLjg1IDEwNy44OTggMTYuODI1IDE3My4xMiAxNi44MjVzMTI2LjcwNC01Ljk3NSAxNzMuMTItMTYuODI1YzU1LjA5Ny0xMi44NzkgODEuODgtMzAuNjMzIDgxLjg4LTU0LjI3NiAwLTIyLjc1OS0yNy42MjQtMzQuODAxLTM2LjcwMi0zOC43NTh6bS00NDMuMDczIDM5LjAyM2MyLjk5Mi00LjM0OSAxOS44MDQtMTUuNzczIDY2Ljk5OS0yNi4xMTh2NTIuODA1Yy0uOTY5LS4yMDUtMS45MzktLjQwOS0yLjg5NS0uNjE4LTQ2LjcwNy0xMC4yMDgtNjEuNzkxLTIxLjkxOS02NC4xMDQtMjYuMDY5em05Ni45OTkgMzIuMDY4di02MS40NTZjMC0zNS43NzYgMTQuNDEyLTY4Ljk0MSA0MC41OC05My4zODdsMTAuODY1LTEwLjE1cy0xNy42MjUtMTguOTMyLTIwLjc5NC0yMi4xNDVjLTEyLjM4LTEyLjU1NS0xOS4yLTE5LjQ3MS0yOS42ODktNDguNTQyLTE3LjYxMy00OC44MTYtOC45Ny0xMDAuNzM3LTIuMTkyLTEyNy41MSAyMi4zMTggMTYuMjgzIDYyLjExNSA1MC43MjQgNzkuNzI3IDk5LjUzNiA5LjIxNSAyNS41NDIgOS4wODUgMzEuODYzIDguNzcxIDQ3LjEzNy0uMDg2IDQuMTkzLjA4NiAzMi41MDkuMDg2IDMyLjUwOWwxNy40Ny0zLjE2NmMxNS4wNjYtMi43MyAzMC44NC0yLjczIDQ1LjkwNiAwbDE3LjQ3IDMuMTY2cy4xNzMtMjguMzE2LjA4Ni0zMi41MDljLS4zMTQtMTUuMjczLS40NDUtMjEuNTk1IDguNzcxLTQ3LjEzNyAxNy42MTMtNDguODE2IDU3LjQxNS04My4yNTggNzkuNzI2LTk5LjUzNyA2Ljc4IDI2Ljc4MiAxNS40MiA3OC42OTktMi4xOTEgMTI3LjUxLTEwLjQ4OSAyOS4wNzItMTcuMzA5IDM1Ljk4OC0yOS42ODkgNDguNTQyLTMuMTY5IDMuMjEzLTIwLjc5NCAyMi4xNDUtMjAuNzk0IDIyLjE0NWwxMC44NjUgMTAuMTVjMjYuMTY4IDI0LjQ0NSA0MC41OCA1Ny42MTEgNDAuNTggOTMuMzg3djYxLjQ1NmMtMzcuNzIzIDUuNjk5LTgxLjg3NiA4Ljc2OC0xMjcuNzc2IDguNzY4cy05MC4wNTUtMy4wNjctMTI3Ljc3OC04Ljc2N3ptMjg4LjQ0Ny01Ljk5OWMtLjk1Ni4yMDktMS45MjYuNDEzLTIuODk1LjYxOHYtNTIuOTMyYzQ3LjEgMTAuMzg0IDYzLjk1MyAyMS44NzUgNjYuOTkxIDI2LjI1OC0yLjMzOCA0LjE2Mi0xNy40NCAxNS44NTktNjQuMDk2IDI2LjA1NnoiLz48cGF0aCBpZD0iWE1MSURfMTQ0M18iIGQ9Im0yMDcgMzE5LjYzNWMtNy44NDYgMC0xNS4zNjMgNi44OTktMTUgMTUgLjM2NCA4LjEyNyA2LjU5MSAxNSAxNSAxNSA3Ljg0NiAwIDE1LjM2My02Ljg5OSAxNS0xNS0uMzY0LTguMTI3LTYuNTkxLTE1LTE1LTE1eiIvPjxwYXRoIGlkPSJYTUxJRF8xNDQ0XyIgZD0ibTMwMyAzMTkuNjM1Yy03Ljg0NiAwLTE1LjM2MyA2Ljg5OS0xNSAxNSAuMzY0IDguMTI3IDYuNTkxIDE1IDE1IDE1IDcuODQ2IDAgMTUuMzYzLTYuODk5IDE1LTE1LS4zNjQtOC4xMjctNi41OTEtMTUtMTUtMTV6Ii8+PHBhdGggaWQ9IlhNTElEXzE0NDVfIiBkPSJtMjY5LjUgMzY3LjYzNWgtMzB2MjJoLTE4Ljc1djMwaDY3LjV2LTMwaC0xOC43NXoiLz48L2c+PC9zdmc+"},8204:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},8593:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);