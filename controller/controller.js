// Require mysql for at gøre brug af dens funktioner.
// ^Bliver brugt til at loade libraries og moduler.
var mysql = require('mysql');

//Ekspoterer hentinfo så den kan bruges i html.
exports.hentinfo = function (req, res) {
    //Laver connection til DB med credentials til at logge ind i MySQL workbench.
    var con = mysql.createConnection({
        host: "localhost",
        user: "admin",
        password: "1234"
    });
    con.connect(function (err) { // Callback funktion der conneccte til db samt table og sender et response tilbage med result.
        
        if (err) throw err; //Tjekker for fejl, hvis ingen fejl skriver connected. 
        console.log("Connected til MySQL : 1");
        con.query("use cryptobank;", function (err, result) { //callback der håndtere error samt result
            if (err) throw err;
            console.log("Connected til cryptobank : 1");
        });
        con.query("select * from kunde;", function (err, result) { //callback der håndtere error samt result
            if (err) throw err;
            console.log("Alt valgt fra kunde : 1");
            res.send(result);
            console.log("Alt done : 1")
        });
    });

}
//Ekspoterer hentinfo2 så den kan bruges i html.
exports.hentinfo2 = function (req, res) {
    console.log("ID der bliver trykket på i table: "+req.body.idnr+"")
    
    var con = mysql.createConnection({//Laver connection til DB 
        host: "localhost",
        user: "admin",
        password: "1234"
    });
        con.connect(function (err) {// Callback funktion der conneccte til db samt table og sender et response tilbage med result.
        
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected til MySQL : 2");
        con.query("use cryptobank;", function (err, result) {
            if (err) throw err;
            console.log("Connected til cryptobank : 2");
        });
            con.query("SELECT * FROM " + "konti" + " WHERE unikt_ID = '"+req.body.idnr+"' ORDER BY " + "konti_ID" + " LIMIT 1", function (err, result) {

            if (err) throw err;
            console.log("Result fra 2: " + result);
            console.log("Alt valgt fra konti : 2");
            res.send(result);
            console.log("Alt done: 2")
        });
    });

}

//Ekspoterer hentinfo2 så den kan bruges i html.
exports.hentinfo3 = function (req, res) {
    console.log("ID der bliver trykket på i table: "+req.body.idnr+"")
    
    var con = mysql.createConnection({//Laver connection til DB 
        host: "localhost",
        user: "admin",
        password: "1234"
    });
        con.connect(function (err) {// Callback funktion der conneccte til db samt table og sender et response tilbage med result.
        
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected til MySQL : 5");
        con.query("use cryptobank;", function (err, result) {
            if (err) throw err;
            console.log("Connected til cryptobank : 2");
        });
            con.query("SELECT * FROM " + "transaktion" + " WHERE unikt_ID = '"+req.body.idnr+"' ORDER BY " + "trans_ID" + " LIMIT 1", function (err, result) {

            if (err) throw err;
            console.log("Result fra 5: " + result);
            console.log("Alt valgt fra konti : 5");
            res.send(result);
            console.log("Alt done: 5")
        });
    });

}

exports.opretinfo = function (req, res) {
    //Laver connection til DB 
    var con = mysql.createConnection({
        host: "localhost",
        user: "admin",
        password: "1234"
    });
    //get request, hent informationen 
    con.connect(function (err) {// Callback funktion der conneccte til db samt table og sender et response tilbage med result.
        
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected til MySQL : 3");
        con.query("use cryptobank;", function (err, result) {
            if (err) throw err;
            console.log("Connected til cryptobank : 3");
        });
        con.query("INSERT INTO kunde(password, cpr, fnavn, lnavn, adresse)values('" + req.body.password + "'," + req.body.cpr + ",'" + req.body.fnavn + "','" + req.body.lnavn + "','" + req.body.adresse + "')", function (err, result) {
            if (err) throw err;
            console.log("Indsat information omkring " + req.body.fnavn + " ind i MySQL DB. : 3");
            res.send(result);
        });
    });
}

exports.opretinfo2 = function (req, res) {
    //Laver connection til DB 
    var con = mysql.createConnection({
        host: "localhost",
        user: "admin",
        password: "1234"
    });
    //get request, hent informationen 
    con.connect(function (err) {// Callback funktion der conneccte til db samt table og sender et response tilbage med result.
        
        //Tjekker for fejl, hvis ingen fejl skriver connected. 
        if (err) throw err;
        console.log("Connected til MySQL : 4");
        con.query("use cryptobank;", function (err, result) {
            if (err) throw err;
            console.log("Connected til cryptobank : 4");
        });
        con.query("INSERT INTO konti(unikt_ID, kontonr, valutatype, saldo)values(" + req.body.unikt_ID + "," + req.body.kontonr + ",'" + req.body.valutatype + "'," + req.body.saldo + ")", function (err, result) {
            if (err) throw err;
            console.log("Indsat information omkring ID " + req.body.unikt_ID + "  ind i MySQL DB. : 4");
            res.send(result);
        });
    });
}
