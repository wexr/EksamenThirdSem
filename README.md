# Eksamen programmering 2018
**Benjamin Ejrup - DAT 3. Semester**

I denne eksamens opgave har jeg fået arbejde som full stack developer i en softwareudviklingsvirksomhed i Danmark.  Jeg udvikler software for forskellige virksomheder, og denne gang skal jeg arbejde med en softwareløsning for den fiktive bank, Crypto Bank, som handler med kryptovalutaer.

**Mine Opgaver:**

**1. Teknologispørgsmål**
Under planlægningen af bankoperationen blev ledelsen enige om til udviklingsformål, at etablere en forbindelse mellem to servere, som var forbundet med en LAN forbindelse til internettet, og placeret på 2 forskellige lokationer og IP adresser. Der skal oprettes en Socket forbindelse til kommunikationen, der primært vil bestå af konto- og kundeoplysninger. Hvilken information om de 2 servere skal du kende/definere, for at kunne etablere en socketforbindelse imellem dem, og hvilken protokol vil du bruge til at overføre data? I hvilket lag i OSI 7-lags modellen er denne/disse protokoller beskrevet?

**2. Teknologispørgsmål**
For at øge sikkerheden for 2 servere, skal der opsættes en Firewall i hver ende af kommunikationen. Hvilken type Firewall ville du vælge til at håndtere indkomne data på netværket, og hvorfor?

**3. Database**
Design og opret en database som kan indeholde data om kundernes konti. Følgende skal tages i betragtning til din database: 

Databasens navn skal være CryptoBank. 
Kunderne skal identificeres ved en unik ID og og et kodeord, og banken skal have CPR-nummer, navn og adresse på kunderne. 
En kunde kan have flere konti.
En konto skal bl.a. indeholde kontonummer, kunde-id, valutatype og saldo.
En konto kan kun indeholde mønter fra en bestemt type kryptovaluta, f.eks. Bitcoin, Ether eller Lintcoin.
Det skal være muligt at gennemføre overførsler fra en konto til en anden. 
Alle transaktioner (overførsler) skal gemmes. Tænk over, hvilke data er vigtige for en transaktion, og hvordan du vil gemme transaktionerne i databasen.
Hvis overførslen fra konto A til konto B er i samme valuta, skal der ikke opkræves gebyr. 
Hvis overførslen fra konto A til konto B er i forskellige valuta-typer, skal den aktuelle valutakurs anvendes.

Eksempel på kurs-objekt: 
bitcoin_ether_kurs	 = { 
base: "BTC",
target: "ETH",
price: "38.37516482",
}

Opret nogle brugere og konti i din database. Eksporter databasen og gem en kopi i din afleveringsmappe.  

**4. HTML**
Opret et HTML dokument med navnet konti.html, som giver overblik over bankens konti og deres indestående. Brug en **html-tabel** til at vise alt data om de registrerede konti. Indtast en enkelt linje med dummy data fra en fiktiv konto for at vise, hvordan tabellen vil se ud. 

**5. SERVER + DATABASE**
Nu skal du bygge en serverapplikation, som gør din HTML-side tilgængeligt via HTTP og også kobler databasens data til HTML-siden. Brug en kopi af din HTML kode som udgangspunkt til det template, som du vil udfylde med data fra databasen.

**6. RESTful API - GET Request**
Udvid din serverapplikation således, at den kan tjene som en RESTful endpoint, der viser aktuelle kontooplysninger i JSON format. Endpointens relative URL’er kunne f.eks. være /api/konto og /api/konto/{{kontonavn}}.

**7. RESTful - POST Request**
Sørg for, at der kan oprettes nye konti via en RESTful endpoint. Brug Postman til testing, og/eller opret en HTML form for indtastning af konti. 

Hvis du har god tid, må du også gerne implementere PUT og DELETE requests på endpointen. 

**8. CSS & Client side JS**
Nu skal du forbedre din HTML-sides brugervenlighed vha. CSS og JavaScript. Vis, at du kan bruge flere forskellige selectors, og et udvalg af mulige properties. Brug evt. et frontend framework som f.eks. Bootstrap til din tabel. 

**9. Komponent**
Du skal udvikle et modul, som kan indlæse aktuelle og Bitcoin/Eur kurser fra https://api.cryptonator.com/api/ticker/btc-eur, og returnere disse. 

Hvis du har mere tid, kan du videreudvikle modulet, så den kan også oplyse Bitcoin/DKK kurs, given at 1 euro koster 7.46 krone.   

Illustrer, hvordan modulet kan bruges. (API dokumentation findes på https://www.cryptonator.com/api)
