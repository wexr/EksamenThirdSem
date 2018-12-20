//Til at åbne serveren
//REST (REpresentational State Transfer) : Client -> Server via HTTP protokol.
//RESTful API's(Application Programming Interface) (Tillader 2 stykker software at snakke sammen)
// require(Resolve: find file - Loading: what type - Wrapping: give private scope)
//        (Evaluation: what the VM does with the code - Caching: Gemmer den så det ikke skal gøres igen.)
//Bliver brugt til at loade libraries og moduler.
var app = require('express')();
var bcrypt = require('bcrypt-nodejs'); //Bruges til at hash bl.a. passwords.
//Åbner serveren, ud fra express app. 
var http = require('http').Server(app);
//Til Json objekter, går at serveren kan læse json objekterne agtigt.
//Parser det om til læseligt JSON objekter for serveren. 
bodyParser = require('body-parser');

//HUSK AT BRUGE BODYPARSER TIL POST REQUESTS
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//require mysql
//Bliver brugt til at loade libraries og moduler.
var mysql = require('mysql');

//get request Layer 7: Application. 
//Layer 6: Præsentation : omdanner data til kendt standard
//Layer 5: Sessions: Er en del af TCP - Den enkelte forbindelse mellem 2 comps.
//Som gør brug af TCP/UDP på Layer 4: Transport. (Transmission Control Protocol / User Datagram Protocol)
//Som kører over Layer 3: Internet via ip4 eller ipv6 : Tildele ip for at gøre computeren unik.
//Layer 2: data link. F.eks MAC adress, alle kabler etc.
//Layer 1: De fysiske komponenter.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

//get request Layer 7: Application. Som gør brug af TDCP/UDP på Layer 6: Transport.
//Som kører over Layer 5: Internet via ip4 eller ipv6
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

//get request Layer 7: Application. Som gør brug af TDCP/UDP på Layer 6: Transport.
//Som kører over Layer 5: Internet via ip4 eller ipv6
app.get('/konti.html', function (req, res) {
    res.sendFile(__dirname + '/konti.html');
})

//get request Layer 7: Application. Som gør brug af TDCP/UDP på Layer 6: Transport.
//Som kører over Layer 5: Internet via ip4 eller ipv6
app.get('/om.html', function (req, res) {
    res.sendFile(__dirname + '/om.html');
})

//get request Layer 7: Application. Som gør brug af TDCP/UDP på Layer 6: Transport.
//Som kører over Layer 5: Internet via ip4 eller ipv6
app.get('/krypto.html', function (req, res) {
    res.sendFile(__dirname + '/krypto.html');
})

//Require route
//Bliver brugt til at loade libraries og moduler.
var route = require('./route/routes')
route(app)



//starter serveren på port 8008
http.listen(8008, function () {
    console.log('Lytter på *:8008');
})