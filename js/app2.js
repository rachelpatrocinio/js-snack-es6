console.log("JS-SNACK2-ES6");
// 213  Marco della Rovere      78
// 110  Paola Cortellessa       96
// 250  Andrea Mantegna 	      48
// 145  Gaia Borromini          74
// 196  Luigi Grimaldello 	  68
// 102  Piero della Francesca   50
// 120  Francesca da Polenta    84

const students = [
    {
        id: 213,
        name: 'MARCO DELLA ROVERE',
        grade: 78
    },
    {
        id: 110,
        name: 'PAOLA CORTELLESSA',
        grade: 96
    },
    {
        id: 250,
        name: 'ANDREA MANTEGNA',
        grade: 48
    },
    {
        id: 145,
        name: 'GAIA BORROMINI',
        grade: 74
    },
    {
        id: 196,
        name: 'LUIGI GRIMANDELLO',
        grade: 68
    },
    {
        id: 102,
        name: 'PIERO DELLA FRANCESCA',
        grade: 50
    },
    {
        id: 120,
        name: 'FRANCESCA DA POLENTA',
        grade: 84
    }
];
console.log(students);



const gradeHigherThan70 = students.filter((el) => {
    if(el.grade > 70){
        return true;
    } else{
        return false;
    }
})
console.log(gradeHigherThan70);

const gradeHigherThan70andIdMoreThanId120 = students.filter((el) => {
    if(el.grade > 70 && el.id > 120){
        return true;
    } else{
        return false;
    }
})
console.log(gradeHigherThan70andIdMoreThanId120);