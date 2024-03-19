console.log("js-snack-es6");

const listOfVips =[ 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Brad Pitt', 
        tablePlace: 1 
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Johnny Depp',  
        tablePlace: 2
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Lady Gaga',  
        tablePlace: 3
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Cristiano Ronaldo',  
        tablePlace: 4
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Georgina Rodriguez',  
        tablePlace: 5
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Chiara Ferragni',  
        tablePlace: 6
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Fedez',  
        tablePlace: 7
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'George Clooney', 
        tablePlace: 8
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Amal Clooney',  
        tablePlace: 9
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Maneskin', 
        tablePlace: 10
    }
];

console.log(listOfVips);


// SOLUZIONE CON IL CICLO FOR
// for ( let i = 0; i < listOfVips.length; i++){
//     const currentVip = listOfVips[i]
//     console.log(currentVip.nameOfVip, "Table n°" ,currentVip.tablePlace);
// }

//SOLUZIONE CON method forEach
listOfVips.forEach((element) => {
    console.log(element.nameOfVip, "Table n°", element.tablePlace)
})

