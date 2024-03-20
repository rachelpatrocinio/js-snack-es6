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

//CREO UN ARRAY CON SOLO I NOMI DELLE BICI
const nameOfBikes = bikes.map(({name}) => name);
console.log(nameOfBikes);

//CREO UN ARRAY SOLO CON IL PESO DELLE BICI
const weightOfBikes = bikes.map(({name, weight}) => weight);
console.log(weightOfBikes);

//CREO UN ARRAY DEL PESO DELLE BICI ORDINATO DAL PESO PIU BASSO AL PIU ALTO
const orderedBikes = weightOfBikes.sort((el,el2) => el - el2);
console.log(orderedBikes);

//PRENDO IL PRIMO ELEMENTO CHE EQUIVALE ALLA BICI CHE PESA DI MENO
const [weighsLess] = orderedBikes;
console.log(`La bici che pesa meno è di ${weighsLess} kg`);








