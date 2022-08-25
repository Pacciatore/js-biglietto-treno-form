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

        let ticketType = document.getElementById('ticket-type');
        console.log('ticketType outside ' + ticketType.innerHTML);

        let ticketPrice = kmLength * costoPerKm;
        console.log('ticketPrice outside ' + ticketPrice);

        switch (passengerAge) {
            case 0:
                ticketPrice -= ticketPrice * scontoMinorenni;
                ticketType.innerHTML = 'Biglietto Minori';
                console.log('ticketType ' + ticketType.innerHTML)
                console.log('ticketPrice ' + ticketPrice);
                break;

            case 2:
                ticketPrice -= ticketPrice * scontoSenior;
                ticketType.innerHTML = 'Biglietto Senior';
                console.log('ticketType ' + ticketType.innerHTML)
                console.log('ticketPrice ' + ticketPrice);
                break;
            default:
                console.log('nessuno sconto');
                break;
        }

        // const ticket = document.getElementById('biglietto');
        const passengerName = document.getElementById('passengerName').value;
        const ticketName = document.getElementById('name');
        const ticketFinalPrice = document.getElementById('ticket-price');
        let wagon = document.getElementById('wagon');
        const cpCode = document.getElementById('cp-code');

        console.log('Il costo del biglietto è: ' + ticketPrice.toFixed(2) + '€')
        ticketName.innerHTML = passengerName;
        ticketFinalPrice.innerHTML = ticketPrice.toFixed(2) + '€';
        wagon.innerHTML = Math.floor((Math.random() * 12) + 1);
        cpCode.innerHTML = Math.floor(Math.random() * 90000) + 10000;
        // ticket.innerHTML = 'Il costo del biglietto è: ' + ticketPrice.toFixed(2) + '€';

    })