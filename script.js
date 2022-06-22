// 1. chiedere età e km da percorrere con un form
// 2. calcolare il prezzo
// 3. calcolare il prezzo finale
// 4. stampare il risultato in pagina con massimo 2 decimali

const button = document.getElementById('button');
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

    if (age = 'minorenne'){
        finalPrice = (price / 100 * 80);
        console.log(finalPrice);    
    } else if (age = 'over65') {
        finalPrice = (price / 100 * 60);
        console.log(finalPrice);  
    } else {
        finalPrice = price;
        console.log(finalPrice);  
    }

})




