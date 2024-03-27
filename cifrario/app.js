// Data una stringa, restituire la versione in alfabeto farfallino
//  (le vocali devono essere trasformate in questo modo: a -> afa, e -> efe, i -> ifi, o -> ofo, u- > ufu)

const string = "mattia"

const lettere = []

for (let i = 0; i < string.length; i++) {
    const current = string[i]
    if (current === "a") {
        lettere.push(current + "f" + current)
    } else if (current == "e") {
        lettere.push(current + "f" + current)
    } else if (current == "i") {
        lettere.push(current + "f" + current)
    } else if ( current == "o") {
        lettere.push(current + "f" + current)
    } else if ( current == "u") {
        lettere.push(current + "f" + current)
    }
    else {
        lettere.push(current)
    }
}


console.log(lettere)

//HO PROVATO A CICLARE TUTTE LE LETTERE SENZA SCRIVERE OGNI VOCALE NEGLI IF
// farfallino()

// function farfallino() {

//     const vocali = ["a","e","i","o","u"]

//     let vocaliCicle = "";

//     for(let i = 0; i < vocali.length; i++) {
//         vocaliCicle = vocali[i]
//     }

//     return vocaliCicle

// }

