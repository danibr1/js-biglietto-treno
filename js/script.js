/* 
* Il programma dovrà chiedere all'utente:
* 1. il numero di chilometri che vuole percorrere;
* 2. l'età del passeggero;
*
* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
* - il prezzo del biglietto è definito in base ai km (0.21 € al km)
* - va applicato uno sconto del 20% per i minorenni
* - va applicato uno sconto del 40% per gli over 65.
*
* L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
* 
*/

function calcPrice() {

    // Km da percorrere
    var km = parseInt( document.getElementById('km').value );
    // Età del passeggero
    var age = parseInt( document.getElementById('age').value );
    // Costo fisso per Km
    var kmPrice = 0.21;

    // Inizializzo var per il prezzo totale
    var totPrice;

    // Controllo
    if (!isNaN(km)){
        if(!isNaN(age)){
            if (age < 18){
                totPrice = ((km * kmPrice) - ((km * kmPrice) * 0.2));
                document.getElementById("price-type").innerHTML = 'Il prezzo scontato del 20% è: ';   
                document.getElementById("price").innerHTML = totPrice.toFixed(2) + '€';
            } 
            else if ( (age >= 18) && (age <= 65) ){
                totPrice = (km * kmPrice);
                document.getElementById("price-type").innerHTML = 'Il prezzo non scontato è: ';   
                document.getElementById("price").innerHTML = totPrice.toFixed(2) + '€';
            } 
            else {
                totPrice = ((km * kmPrice) - ((km * kmPrice) * 0.4)); 
                document.getElementById("price-type").innerHTML = 'Il prezzo scontato del 40% è: ';   
                document.getElementById("price").innerHTML = totPrice.toFixed(2) + '€';
            }
        }else{
            alert('Per favore compila i campi in formato numerico.')
        }
    }else{
        alert('Per favore compila i campi in formato numerico.')
    }
}


