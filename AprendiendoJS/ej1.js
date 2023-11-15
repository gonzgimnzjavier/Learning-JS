/* 
TAREA
Para éste ejercicio, se quiere realizar un programa que intercambie los valores de dos variables. Por ejemplo, si nosotros tenemos:
var x = 3
var y = 5
querríamos que el programa intercambie x por y, es decir que resulte en lo siguiente:
x = 5
y = 3
¡Mucha suerte!
*/
var x = 3;
var y = 5;
// intercambiar los valores de x e y
// x: 3, y: 5
// resultado: x: 5, y: 3
// funcion de swap
var z = y;
y = x;
x = z;
console.log('Resultado ejercicio: x es', x, 'y es', y);