function btceur(bitcoin){

    var antalBitcoin = bitcoin;

    //url til api
    var url = "https://api.cryptonator.com/api/ticker/btc-eur"
    

    //require http request
    var xhr = require('xmlhttprequest').XMLHttpRequest
    var xmlhttp = new xhr;
    
    var test = 0; 
    //Ved hver readystatechange den modtager, tester den om den er 4(har fået response) og at serveren siger ok(200)
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
    
          //Laver hele JSON filen om til et object.  
          var myObj = JSON.parse(this.responseText);
          //printer euro kurs
          kurs = myObj.ticker.price;
          console.log("1 Bitcoint tilsvarer: " +(kurs) + " EURO");
        
          return kurs;
        }
    };

    //Bbner GET Requesten
    xmlhttp.open("GET", url, true);
    //Sender Requesten
    xmlhttp.send();
    }
    //EXPORT
    exports.convert = btceur;