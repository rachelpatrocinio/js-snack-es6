// SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'Lazio',
        points: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    }
];
console.log(teams)

// // METODO .forEach
// teams.forEach((el) => {
//     const singleTeam = el;
//     singleTeam.points = randomNumber(1,10);
//     singleTeam.fouls = randomNumber(0,6);
//     // console.log(singleTeam);
//     console.log(el.name, singleTeam.fouls, 'falli')
// });

// METODO .map
const newListOfTeams = teams.map(({name, points, fouls}) => {
    return{
        name,
        points: randomNumber(1,10),
        fouls: randomNumber(0,6)
    }
});
console.log(newListOfTeams);

















// My Functions ////////////////////////////////////////////////////////////////////////////////////////////////
function randomNumber(min, max){
    const randomNum = Math.floor(Math.random()*max)+min;
    return randomNum;
}