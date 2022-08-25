// Dichiarazione costanti
const costoPerKm = 0.21;
const scontoMinorenni = 0.2;
const scontoSenior = 0.4;
const maggioreEta = 18;
const seniorEta = 65;
const submitButton = document.getElementById('submitButton');
const cancelButton = document.getElementById('cancelButton');

// Dichiarazione variabili


// Inizio istruzioni

submitButton.addEventListener('click',
    function () {

        // Dichiarazione costanti

        const kmLength = parseInt(document.getElementById('kmTrip').value);
        console.log('kmLength ' + kmLength);

        const passengerAge = parseInt(document.getElementById('ageRange').value);
        console.log('passengerAge ' + passengerAge)

        let ticketResumeContent = document.getElementById('ticket-content');
        console.log(ticketResumeContent.classList);
        let ticketErrorMessage = document.getElementById('error-message');

        const passengerName = document.getElementById('passengerName').value;
        console.log('passengerName ' + passengerName);
        console.log('passengerName string ' + isNaN(passengerName) + passengerName.trim().length)

        const ticketName = document.getElementById('name');
        const ticketFinalPrice = document.getElementById('ticket-price');
        const cpCode = document.getElementById('cp-code');

        // Dichiarazione variabili

        let ticketType = document.getElementById('ticket-type');
        console.log('ticketType outside ' + ticketType.innerHTML);

        let ticketPrice = kmLength * costoPerKm;
        console.log('ticketPrice outside ' + ticketPrice);

        let wagon = document.getElementById('wagon');


        // Inizio istruzioni
        if (passengerName.trim().length > 0 && !isNaN(kmLength) && kmLength > 0) {

            ticketErrorMessage.innerHTML = '';
            ticketResumeContent.classList.remove('visually-hidden');
            console.log(ticketResumeContent.classList);

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

            console.log('Il costo del biglietto è: ' + ticketPrice.toFixed(2) + '€')

            ticketName.innerHTML = passengerName;
            ticketFinalPrice.innerHTML = ticketPrice.toFixed(2) + '€';
            wagon.innerHTML = Math.floor((Math.random() * 12) + 1); //Numero casuale per la carrozza
            cpCode.innerHTML = Math.floor(Math.random() * 90000) + 10000; //Numero casuale di 5 cifre

        } else {

            ticketResumeContent.classList.add('visually-hidden');
            ticketErrorMessage.innerHTML = 'I dati inseriti sono errati! Controllare nome e cognome o km da percorrere!';
            console.log('I dati inseriti sono sbagliati!')

        }


    })

cancelButton.addEventListener('click',
    function () {

        let kmLength = document.getElementById('kmTrip');
        console.log('kmLength ' + kmLength);

        let passengerName = document.getElementById('passengerName');
        console.log('passengerName ' + passengerName);

        kmLength.value = '';
        passengerName.value = '';

    })