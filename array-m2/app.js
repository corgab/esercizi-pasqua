//Dati un numero intero e un array di numeri interi, 
//creare una funzione che sia in grado di restituire 
//un nuovo array contenente solo i numeri divisibili per il numero intero specificato

const userNumber = parseInt(prompt("inserisci un numero"))
const array = [1,3,5,2,10,6,4,9,13,21,29,39];

console.log(arrayUser())

function arrayUser() {
    const arrayNew = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if (current % userNumber == 0) {
            arrayNew.push(current)
        }
    }
    return arrayNew
}