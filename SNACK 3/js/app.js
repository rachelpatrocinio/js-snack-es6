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

//CREO UN ARRAY SOLO CON IL PESO DELLE BICI
const weightOfBikes = bikes.map(({name, weight}) => weight);
console.log(weightOfBikes);

//MI MEMEORIZZO IL PRIMO PESO PER POTERLO CONFRONTARE 
let lightestBikeFound = weightOfBikes[0];
// CREO UN CICLO .forEach PER CONFRONTARE I VARI PESI
weightOfBikes.forEach((el) => {
    //SE L'ELEMENTO PESO CORRENTE E'MINORE DEL PESO MEMORIZZATO lightestBikeFound
    if(el < lightestBikeFound){
        // RIASSEGNO IL VALORE A lightestBikeFound
        lightestBikeFound = el;
    }
});
console.log(lightestBikeFound);

// CERCO TRAMITE method .find L'OGGETTO CHE COME PROPRIETA' weight HA IL VALORE CHE COMBACIA CON lightestBikeFound
const findedElement = bikes.find((el) => el.weight === lightestBikeFound );
console.log(findedElement);

//DESTRUCTURING findedElement
const {name, weight} = findedElement;
console.log( `La bici che pesa meno è la "${name}" che pesa "${weight}" KG`);



