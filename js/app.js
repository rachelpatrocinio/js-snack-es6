console.log("JS-SNACK-ES6");

const listOfVips =[ 
    {
        nameOfVip: 'Brad Pitt', 
    }, 
    {
        nameOfVip: 'Johnny Depp',  
    }, 
    {
        nameOfVip: 'Lady Gaga',  
    }, 
    {
        nameOfVip: 'Cristiano Ronaldo',  
    }, 
    {
        nameOfVip: 'Georgina Rodriguez',  
    }, 
    {
        nameOfVip: 'Chiara Ferragni',  
    }, 
    {
        nameOfVip: 'Fedez',  
    }, 
    {
        nameOfVip: 'George Clooney', 
    }, 
    {
        nameOfVip: 'Amal Clooney',  
    }, 
    {
        nameOfVip: 'Maneskin', 
    }
];
// console.log(listOfVips);


//SOLUZIONE CON IL CICLO FOR
for ( let i = 0; i < listOfVips.length; i++){
    const currentVip = listOfVips[i]
    currentVip.tableName = "Tavolo VIP";
    currentVip.tablePlace = i + 1

    console.log("Name of Vip:", currentVip.nameOfVip);
    console.log("Table name:", currentVip.tableName);
    console.log("Table n°", currentVip.tablePlace);
}

// //SOLUZIONE CON method forEach
// listOfVips.forEach((element) => {
//     console.log(element.nameOfVip);
//     element.tablePlace = 1;
// });
