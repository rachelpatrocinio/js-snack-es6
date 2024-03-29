// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        name: 'Bootie',
        weight: 100
    },
    {
        name: 'Ellis',
        weight: 40
    },
    {
        name: 'Ridley',
        weight: 20
    },
    {
        name: 'Wanderer',
        weight: 150
    }
];
console.log(bikes);

// SOLUTION WITH CICLE .for -------------------------------------------------------------------------------------------------

// //MEMORIZZIAMO LA PRIMA BICI 
// let lightestBike = bikes[0];

// //CICLO LE BICI PER CONFRONTARE IL LORO PESO
// for (let i = 1; i < bikes.length; i++){
//     const bike = bikes[i];
//     // console.log(bike);
    
//     if(bike.weight < lightestBike.weight){
//         lightestBike = bike
//     }
// }
// console.log(lightestBike);

// //DESTRUCTURING OBJECT
// const { name, weight} = lightestBike;
// console.log(`La bici ${name} è la piu leggera, e pesa ${weight} KG`);






// METHOD .forEach + .find  ---------------------------------------------------------------------------------------------------

// //CREO UN ARRAY SOLO CON IL PESO DELLE BICI
// const weightOfBikes = bikes.map(({name, weight}) => weight);
// console.log(weightOfBikes);

// //MI MEMEORIZZO IL PRIMO PESO PER POTERLO CONFRONTARE 
// let lightestBikeFound = weightOfBikes[0];
// // CREO UN CICLO .forEach PER CONFRONTARE I VARI PESI
// weightOfBikes.forEach((el) => {
//     //SE L'ELEMENTO PESO CORRENTE E'MINORE DEL PESO MEMORIZZATO lightestBikeFound
//     if(el < lightestBikeFound){
//         // RIASSEGNO IL VALORE A lightestBikeFound
//         lightestBikeFound = el;
//     }
// });
// console.log(lightestBikeFound);

// // CERCO TRAMITE method .find L'OGGETTO CHE COME PROPRIETA' weight HA IL VALORE CHE COMBACIA CON lightestBikeFound
// const findedElement = bikes.find((el) => el.weight === lightestBikeFound );
// console.log(findedElement);

// //DESTRUCTURING findedElement
// const {name, weight} = findedElement;
// console.log( `La bici che pesa meno è la "${name}" che pesa "${weight}" KG`);







// METHOD .sort + .find  ---------------------------------------------------------------------------------------------------

//CREO UN ARRAY SOLO CON IL PESO DELLE BICI E LI METTO IN ORDINE CON .sort DAL MENO PESANTE AL PIU PESANTE
const weightOfBikes = bikes.map(({name, weight}) => weight).sort((weight,weight2) => weight - weight2);
console.log(weightOfBikes);

//PRENDO IL PRIMO ELEMENTO CHE EQUIVALE ALLA BICI CHE PESA DI MENO
const [weighsLess] = weightOfBikes;

// CERCO TRAMITE method .find L'OGGETTO CHE COME PROPRIETA' weight HA IL VALORE CHE COMBACIA CON lightestBikeFound
const findedElement = bikes.find((el) => el.weight === weighsLess );
console.log(findedElement);

//DESTRUCTURING findedElement
const {name, weight} = findedElement;
console.log( `La bici che pesa meno è la "${name}" che pesa "${weight}" KG`);






