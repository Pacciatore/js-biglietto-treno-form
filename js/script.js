// Dichiarazione costanti
const costoPerKm = 0.21;
const scontoMinorenni = 0.2;
const scontoSenior = 0.4;
const maggioreEta = 18;
const seniorEta = 65;
const submitButton = document.getElementById('submitButton');

// Dichiarazione variabili


// Inizio istruzioni

submitButton.addEventListener('click',
    function () {

        const kmLength = parseInt(document.getElementById('kmTrip').value);
        console.log(kmLength);

        const passengerAge = parseInt(document.getElementById('ageRange').value);
        console.log(passengerAge)

        let ticketPrice = kmLength * costoPerKm;
        console.log(ticketPrice);

        switch (passengerAge) {
            case 0:
                ticketPrice -= ticketPrice * scontoMinorenni;
                console.log(ticketPrice);
                break;

            case 2:
                ticketPrice -= ticketPrice * scontoSenior;
                console.log(ticketPrice);
                break;
            default:
                console.log('nessuno sconto');
                break;
        }

        const ticket = document.getElementById('biglietto');
        console.log('Il costo del biglietto è: ' + ticketPrice.toFixed(2) + '€')
        ticket.innerHTML = 'Il costo del biglietto è: ' + ticketPrice.toFixed(2) + '€';

    })