//Dato un array di oggetti, ordinare l'array in base al valore di una 
//proprietà degli oggetti (es. name: “Marco”, age: 22)

const utenti = [
    { name: "Marco", age: 22 },
    { name: "Anna", age: 24 },
    { name: "Luca", age: 17 },
    { name: "Gianni", age: 53 }
];

// portare tutti gli age in un array
const age = []

for (let i = 0; i < utenti.length; i++) {
    const ageCurrent = utenti[i].age;
    age.push(ageCurrent)
}

//stampa finale
const arrayOrdinato = ordinaNumeri(age)
console.log(arrayOrdinato)

// gestire ordinamento numero
function ordinaNumeri(array) {
    array.sort((a, b) => a - b);
    return array
}
