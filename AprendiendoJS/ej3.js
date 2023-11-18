/*
TAREA
El ejercicio consiste en, dadas dos rectas en una línea unidimensional, determinar si existe solape entre las dos rectas utilizando operaciones de comparación.
Por ejemplo, si definimos las rectas (a, b) y (c, d) con los siguientes valores:
------a-------------b--------------
--------------c-------------------d-
var a = 5;

var b = 20;

var c = 10;

var d = 25;
como existe un solape entre las dos rectas, el programa debería devolver TRUE.
*/
var a = 5;
var b = 20;
var c = 10;
var d = 25;

if (Math.max(a, c) < Math.min(b, d)) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

