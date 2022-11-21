// Descrizione:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    - va applicato uno sconto del 20% per i minorenni
//    - va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let kilometres = parseFloat (prompt("Inserisci il numero di chilometri che vuoi percorrere"));
const userAge = parseInt (prompt("Inserisci la tua età"));

let ticketPrice = (kilometres * .21);
let over65Disc = (ticketPrice * 0.4);
let under18Disc = (ticketPrice * 0.2);


if (userAge > 65){
    ticketPrice = ((kilometres * .21) - (over65Disc));
}   else if (userAge < 18) {
    ticketPrice = ((kilometres * .21) - (under18Disc)); 
}

document.getElementById("output").innerHTML = (`Prezzo del biglietto: ${ticketPrice.toFixed(2)}`);