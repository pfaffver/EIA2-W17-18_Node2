"use strict";
// Node-Http-Modul importieren
const Http = require("http");
// Node-Url-Modul importieren
const Url = require("url");
var ServerTest;
(function (ServerTest) {
    // Port vom Process-Objekt erfragen 
    let port = process.env.PORT;
    // Port nicht definiert -> lokale Maschine, Port selbst definieren
    //if (port == undefined)
    //port = 8100;
    // Server-Objekt kreieren
    let server = Http.createServer();
    // Event-Handler installieren
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    // Auf dem Port horchen
    server.listen(port);
    // Listening-Event: R�ckmeldung wenn horchen l�uft
    function handleListen() {
        console.log("Server listening on port " + port);
    }
    // Request-Event: Verarbeiten der Request und erstellen der Response
    function handleRequest(_request, _response) {
        console.log("Ich h�re Stimmen!!");
        // Header: Antwort kommt im HTML-Format mit uft-8
        _response.setHeader("content-type", "text/html; charset=utf-8");
        // Header: ?
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Response-Body
        _response.write("Vielen Dank - Deine Bestellung ist bei uns wie folgt eingegangen:" + "<br>" + "Warenkorb" + "<br>");
        // _response.write("Port: " + port + "<br>");
        //  _response.write("Method: " + _request.method + "<br>");
        // _response.write("Url: " + _request.url + "<br>");
        // _response.write("Headers: " + _request.headers + "<br>       
        // ?
        let query = Url.parse(_request.url, true).query;
        // ?
        _response.write("Baumart" + ": " + query["Deine Baumart"] + "<br>");
        _response.write("Beleuchtung" + ": " + query["Deine Beleuchtung"] + "<br>");
        if (query["Deine Halterung"] == "Auswahl4") {
            _response.write("Halterung: schwarz <br>");
        }
        if (query["Deine Halterung"] == "Auswahl5") {
            _response.write("Halterung: gold <br>");
        }
        if (query["Deine Halterung"] == "Auswahl6") {
            _response.write("Halterung: silber <br>");
        }
        if (query["CheckboxSchmuckartikel"] == "check") {
            _response.write("Schmuckartikel: Christbaumkugeln, bunt " + query["StepperSchmuckartikel9"] + "Stk. <br>");
        }
        if (query["CheckboxSchmuckartikel"] == "check,check") {
            _response.write("Schmuckartikel: Christbaumkugeln, bunt " + query["StepperSchmuckartikel9"] + "Stk. <br>");
            _response.write("Schmuckartikel: Christbaumkugeln, rot gestreift " + query["StepperSchmuckartikel10"] + "Stk. <br>");
        }
        if (query["CheckboxSchmuckartikel"] == "check,check,check") {
            _response.write("Schmuckartikel: Christbaumkugeln, bunt " + query["StepperSchmuckartikel9"] + "Stk. <br>");
            _response.write("Schmuckartikel: Christbaumkugeln, rot gestreift " + query["StepperSchmuckartikel10"] + "Stk. <br>");
            _response.write("Schmuckartikel: Lametta, silber " + query["StepperSchmuckartikel11"] + "Stk. <br>");
        }
        if (query["CheckboxSchmuckartikel"] == "check,check,check,check") {
            _response.write("Schmuckartikel: Christbaumkugeln, bunt " + query["StepperSchmuckartikel9"] + "Stk. <br>");
            _response.write("Schmuckartikel: Christbaumkugeln, rot gestreift " + query["StepperSchmuckartikel10"] + "Stk. <br>");
            _response.write("Schmuckartikel: Lametta, silber " + query["StepperSchmuckartikel11"] + "Stk. <br>");
            _response.write("Schmuckartikel: Lametta, gold " + query["StepperSchmuckartikel12"] + "Stk. <br>");
        }
        _response.write("<p>Lieferadresse<p>" + "Name" + ": " + query["Name"] + "<br>");
        _response.write("Strasse" + ": " + query["Strasse"] + "<br>");
        _response.write("Hausnummer" + ": " + query["Hausnummer"] + "<br>");
        _response.write("Wohnort" + ": " + query["Ort"] + "<br>");
        _response.write("Postleitzahl" + ": " + query["PLZ"] + "<br>");
        _response.write("E-Mail" + ": " + query["E-Mail"] + "<br>");
        if (query["Deine Lieferoption"] == "Auswahl13") {
            _response.write("Lieferung erfolgt via: Standard <br>");
        }
        if (query["Deine Lieferoption"] == "Auswahl14") {
            _response.write("Lieferung erfolgt via: Expressversand <br>");
        }
        // Antwort abschlie�en und abschicken
        _response.end();
    }
})(ServerTest || (ServerTest = {}));
//# sourceMappingURL=ServerTest.js.map