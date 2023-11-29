/*
En éste ejercicio se debe escribir una función que reciba dos parámetros.
Por un lado, debe recibir un primer parámetro que debe ser un vector de números. El segundo parámetro ha de ser un número.

La función debe multiplicar todos y cada uno de los números del array por el valor del segundo parámetro, haciendo que el array resultante sea un array como el original pero por cada número multiplicado.
*/

function multiplicarArray(array, multiplicador) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i] * multiplicador);
  }
  return nuevoArray;
}

let array = [1, 2, 3, 4, 5];
console.log(multiplicarArray(array, 2));
console.log(multiplicarArray(array, 3));
console.log(multiplicarArray(array, 4));
console.log(multiplicarArray(array, 5));
console.log(multiplicarArray(array, 6));
console.log(multiplicarArray(array, 7));
console.log(multiplicarArray(array, 8));
console.log(multiplicarArray(array, 9));
console.log(multiplicarArray(array, 10));