// Dato un array di numeri interi, creare una funzione che sia 
// in grado di restituire un nuovo array con solo i numeri pari o solo i numeri dispari 
// (su richiesta dell'utente)

const array = [1, 3, 5, 2, 10, 6, 4, 9];

isNumberTrue()
isNumberFalse()
console.log(isNumberTrue())
console.log(isNumberFalse())

//prendere elementi 
const pariEl = document.getElementById("pari");
const dispariEl = document.getElementById("dispari");
//chiedere utente
pariEl.addEventListener("click",function() {
    const stampEl = document.getElementById("stampa");
    stampEl.innerText = isNumberTrue()
})

dispariEl.addEventListener("click",function() {
    const stampEl = document.getElementById("stampa");
    stampEl.innerText = isNumberFalse()
})


//funzioni pari-dispari
function isNumberTrue() {
    const arrayPari = []
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if(current % 2 == 0) {
            arrayPari.push(current)
        }
    }
    return arrayPari
}

function isNumberFalse() {
    const arrayDispari = []
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if(current % 2 == 1) {
            arrayDispari.push(current)
        }
    }
    return arrayDispari
}