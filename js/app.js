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


// //SOLUZIONE CON IL CICLO FOR
// for ( let i = 0; i < listOfVips.length; i++){
//     const currentVip = listOfVips[i];
//     currentVip.nameOfVip = currentVip;
//     currentVip.tableName = 'Tavolo VIP';
//     currentVip.tablePlace = i + 1;
// }
// console.log(listOfVips);

//SOLUZIONE CON method .map
const object = listOfVips.map((el, i) => {
    return{
        nameOfVip: el,
        tableName: 'Tavolo VIP',
        tablePlace: i+1
    }
})
console.log(object);
