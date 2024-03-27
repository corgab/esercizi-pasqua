//Dato un array di numeri interi, restituire un array con solo i numeri pari
const array = [1, 3, 5, 2, 10, 6, 4, 9,];
// const array1 = ["1", "3", "5"];
let arrayPari = [];

for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if(current % 2 == 0) {
        arrayPari.push(current)
    }
}

console.log(arrayPari)