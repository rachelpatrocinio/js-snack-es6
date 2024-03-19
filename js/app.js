console.log("js-snack-es6");

const listOfVips =[ 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Brad Pitt', 
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Johnny Depp',  
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Lady Gaga',  
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Cristiano Ronaldo',  
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Georgina Rodriguez',  
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Chiara Ferragni',  
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Fedez',  
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'George Clooney', 
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Amal Clooney',  
    }, 
    {
        tableName: 'Tavolo VIP', 
        nameOfVip: 'Maneskin', 
    }
];
// console.log(listOfVips);


//SOLUZIONE CON IL CICLO FOR
for ( let i = 0; i < listOfVips.length; i++){
    const currentVip = listOfVips[i]
    currentVip.tablePlace = i + 1
    console.log(currentVip.nameOfVip, "Table n°", currentVip.tablePlace);
}

// //SOLUZIONE CON method forEach
// listOfVips.forEach((element) => {
//     console.log(element.nameOfVip);
//     element.tablePlace = 1;
// });
