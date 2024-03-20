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
        name: 'Marco della Rovere ',
        grade: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grade: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grade: 48
    },
    {
        id: 145,
        name: 'Andrea Mantegna',
        grade: 74
    },
    {
        id: 196,
        name: 'Gaia Borromini ',
        grade: 68
    },
    {
        id: 102,
        name: 'Luigi Grimaldello',
        grade: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grade: 84
    }
];
console.log(students);

// CREO UNA function CHE MODIFICA LE LETTERE MINUSCOLE IN MAIUSCOLE UTILIZZANDO toUpperCase()
// function capitalize(string){
//     let newString = string.toUpperCase()
//     return newString;
// }

// const upperName = [];
// students.forEach((el) => {
//     const nameUpper = capitalize(el.name);

//     const studentObject = {
//         id: el.id,
//         name: nameUpper,
//         grade: el.grade
//     }
//     upperName.push(studentObject);
// })
// console.log(upperName);

function studentUpperCase(student) {
    return {
        ...student,
        name: student.name.toUpperCase(),
    }
}

const upper = students.map(studentUpperCase);
console.log(upper);

const gradeHigherThan70 = students.filter(el => el.grade > 70).map(studentUpperCase);
console.log(gradeHigherThan70);

const gradeHigherThan70andIdMoreThanId120 = students.filter(el => el.grade > 70 && el.id > 120).map(studentUpperCase);
console.log(gradeHigherThan70andIdMoreThanId120);