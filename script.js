// 1. chiedere età e km da percorrere con un form
// 2. calcolare il prezzo
// 3. calcolare il prezzo finale
// 4. stampare il risultato in pagina con massimo 2 decimali

const button = document.getElementById('button');
const reset = document.getElementById('reset');
const elementName = document.getElementById('name');
const elementAge = document.getElementById('age');
const elementKm = document.getElementById('km');

button.addEventListener('click', function(){
    const name = elementName.value;
    let age = elementAge.value;
    const km = parseInt(elementKm.value);
    const price = (km * 0.21);


    console.log(name);
    console.log(age);
    console.log(km);
    console.log(price);

    let finalPrice = ''

    if (age === 'minorenne'){
        finalPrice = (price / 100 * 80).toFixed(2);
        console.log(finalPrice);  
        const offerParagraph = document.getElementById('offer');
        offerParagraph.innerText = 'Ridotto' 
    } else if (age === 'over65') {
        finalPrice = (price / 100 * 60).toFixed(2);
        console.log(finalPrice);  
        const offerParagraph = document.getElementById('offer');
        offerParagraph.innerText = 'Pensionati' 
    } else {
        finalPrice = price;
        console.log(finalPrice);  
        const offerParagraph = document.getElementById('offer');
        offerParagraph.innerText = 'Standard' 
    }


    const priceParagraph = document.getElementById('ticket-price');
    priceParagraph.innerText = finalPrice + '€'

    const nameParagraph = document.getElementById('ticket-name');
    nameParagraph.innerText = name

    const carrozza = Math.floor(Math.random() * 10) + 1;
    console.log(carrozza)

    const carrozzaParagraph = document.getElementById('carrozza');
    carrozzaParagraph.innerText = carrozza

})




reset.addEventListener('click', function(){
    elementName.value = '';
    elementAge.value = '';
    elementKm.value = '';

})



