/*
Utilizando bucles for, se tiene que dibujar un árbol de navidad en pantalla.
En una variable, se determinará la altura del árbol, por ejemplo, un árbol de altura 3 sería el siguiente:
  *

 ***

***** 

*/
let altura = 10;
let arbol = "";
for (let i = 0; i < altura; i++) {
  let espacios = "";
  let asteriscos = "";
  for (let j = 0; j < altura - i - 1; j++) {
    espacios += " ";
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    asteriscos += "*";
  }
  arbol += espacios + asteriscos + espacios + "\n";
}
console.log(arbol);



