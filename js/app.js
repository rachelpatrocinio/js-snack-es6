console.log("JS-SNACK-ES6");

const listOfVips = [
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
]

//SOLUZIONE CON CICLE for
const tableName = "Tavolo VIP";
let nameOfVip;
let tablePlace = 0;

for(let i = 0; i < listOfVips.length; i++){
    const currentVip = listOfVips[i];
    tablePlace++;

    const object = {
        nameOfVip: currentVip,
        tableName: tableName,
        tablePlace: tablePlace
    }
    console.log(object);
}

//SOLUZIONE CON method .map
const object = listOfVips.map((el, i) => {
    return{
        nameOfVip: el,
        tableName: 'Tavolo VIP',
        tablePlace: i+1
    }
})
console.log(object);