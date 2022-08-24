// Dichiarazione costanti
const costoPerKm = 0.21;
const scontoMinorenni = 0.2;
const scontoSenior = 0.4;
const maggioreEta = 18;
const seniorEta = 65;

// Dichiarazione variabili
let kmDaPercorrere;
let etaPasseggero;

let prezzoBiglietto;

let message1 = 'Il prezzo del biglietto è ';
let message2 = ', senza sconti applicati.';
let message2Min = '€, sconto per i minorenni applicato.';
let message2Mag = ', sconto per gli over 65 applicato.';

let fineAcquisto;

// Inizio istruzioni

do {

    // Richiesta km da percorrere con controllo del valore numerico
    do {
        kmDaPercorrere = parseFloat(prompt('Inserire numero di kilometri che si vuole percorrere:'));
        console.log('kmDaPercorrere ' + kmDaPercorrere);

        // Messaggio di errore
        if (isNaN(kmDaPercorrere)) {
            alert('Il valore inserito non è un valore numerico.');
        }

    } while (isNaN(kmDaPercorrere));

    // Richiesta età del passegero con controllo del valore numerico
    do {
        etaPasseggero = parseFloat(prompt('Inserire età passeggero:'));
        console.log('etaPassegero ' + etaPasseggero);

        // Messaggio di errore
        if (isNaN(etaPasseggero)) {
            alert('Il valore inserito non è un valore numerico.');
        }

    } while (isNaN(etaPasseggero));

    // Calcolo del costo del biglietto
    prezzoBiglietto = costoPerKm * kmDaPercorrere;
    console.log('prezzoBiglietto ' + prezzoBiglietto);


    // Se il passeggero è maggiorenne controlli se è senior ed applica gli sconti di conseguenza,
    // Altrimenti stampi il prezzo del biglietto pieno
    if (etaPasseggero < maggioreEta) {

        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * scontoMinorenni);
        prezzoBiglietto = prezzoBiglietto.toFixed(2);
        alert(message1 + prezzoBiglietto + message2Min);

    } else if (etaPasseggero >= seniorEta) {

        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * scontoSenior);
        prezzoBiglietto = prezzoBiglietto.toFixed(2);
        alert(message1 + prezzoBiglietto + message2Mag);

    } else {

        alert(message1 + prezzoBiglietto + message2);

    }

    // TODO vedere perché entra in loop questo controllo
    // do {
    //     fineAcquisto = prompt('Terminare la fase di acquisto? (S/N)');
    // } while (fineAcquisto != 'N' || fineAcquisto != 'No' || fineAcquisto != 'n' || fineAcquisto != 'no' || fineAcquisto != 'S' || fineAcquisto != 'Si' || fineAcquisto != 's' || fineAcquisto != 'si');

    fineAcquisto = prompt('Terminare la fase di acquisto? (S/N)');

} while (fineAcquisto === 'N' || fineAcquisto === 'No' || fineAcquisto === 'n' || fineAcquisto === 'no');