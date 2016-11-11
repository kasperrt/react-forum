#Angular prototype

##To set up project: 
```
npm install  
npm run postinstall  
npm start 
```

##Documentation (In norwegian)
###Interfaces:
Vi har brukt interfaces for Post og Profile klassene for å beskrive hvilke attributter disse skal ha slik at det ikke vil være mulig å legge inn et feil strukturert objekt som vil brekke koden. Disse ligger i hver sin fil, helholdsvis profile.ts og post.ts i app-mappen. 

###Services: 
For å levere data til komponentene bruker vi services. Dette er ikke strengt talt nødvendig i en mockup, men dersom vi skulle gått videre med angular og skulle hente data ut fra en database ville det vært lurt. 
Service klassene er lagret i en egen mappe kalt services i app-mappen. Her har hver service en egen mappe og i denne ligger en fil på formen `“komponent”.service.ts.`

Profile.service.ts genererer et Profile objekt som sendes videre, mens posts.service.ts genererer en liste med posts. 
Servicene blir hentet inn av hovedkomponenten, app.component.ts, som får dem inn som providers og dermed tillater sine barnekomponenter å bruke dem. 

###Components: 
Komponentene inneholder det som faktisk vises på skjermen. 
Hver komponent har en selector som forteller hvor i html-dokumentet komponenten skal legges. Komponenten vil legges der den finner en html-tag som matcher sin selector. 

Hver komponent har også en template som inneholder html-kode som sier hvordan komponenten skal se ut. 
Vi har valgt å dele opp i komponentene i Profile, Home og App:
####App: 
App er hovedkomponenten som pakkes rundt de andre komponentene. Denne får også inn data fra services (se punktet om services) slik at underkomponentene kan bruke dataen. For app-komponenten har vi valgt å legge template-koden (html) i en egen html-fil som hentes inn av komponenten ved templateUrl for å gjøre det ryddigere. 
####Home: 
Home kompoenenten er den som sier hvordan forsiden skal se ut. Denne implementerer OnInit fro angular-core som tillater den å rendres når posts fra servicen blir hentet. Når all dataen er inne vil ngOnInit-metoden sørge for at komponenten rendres med en liste av alle postene den har fått inn. 
####Profile: 
Profile-komponenten sier hvordan profilsiden skal se ut. Denne har i likhet med app-komponenten fått templatekoden lagt i en egen html-fil som hentes inn via templateUrl. I likhet med home-komponenten implementerer den OnInit slik at den kan få inn data fra profile-servicen og rendre komponenten når dataen er inne. 

###AppModule
Dette er root-modulen i appen vår, og den eneste modulen vi har. 
En module er en samling med komponenter som har ett samlet formål, i at den samlet tilbyr en workflow, feature eller andre ting. Det er vanlig å ha flere modules i en applikasjon, men siden vår applikasjon er liten, så har vi bare 1. 

En module består av en rekke ting:

* Declarations  er settet med klasser som tilhører modulen, i vår app er dette AppComponent,ProfileComponent, HomeComponent.
* exports, som er ett subset av declarations, og viser hva som er synlig og  lovlig å    bruke for andre moduler. I vår AppModule eksporter vi ingenting annet enn modulen selv, da vi ikke har andre moduler i applikasjonen vår. 
* imports,  componenter som er nødvendig for denne modulen. Vi importerer BrowserModule og routing. 
* providers, som er samlingen med services som denne modulen tilbyr andre. Her har vi heller ingenting. 
* Directives: Er klasser som brukes til å forandre view dynamisk i Angular. I vår app bruker vi kun ROUTER_DIRECTIVES, og den brukes til routing. 

###Routing 
Brukes til å vise ett bestemt component view basert på URLen. I vår applikasjon bruker vi dette til å vise to forskjellige views når man er inne på /home og /profile 
App.routing.ts er filen hvor vi deklarerer hvilke paths som leder hvor. Det vil si, hvilke komponenter som skal loades inn når man går inn på en gitt URL
Vi bruker `<base href="/">`  til å fortelle routingen at URLen skal være på formatet “domene”/route
For å linke til en path via routing bruker vi `<a routerLink="/profile" class="profileButton">Min Profil</a>`, her med ett eksempel som linker til profil-viewet. 
Main
Vi bruker main.ts til å koble opp selve topp-nivået av appen. I vårt tilfelle ser vi at den bootstrapper vår AppModule, som er den eneste modulen vi har. 
