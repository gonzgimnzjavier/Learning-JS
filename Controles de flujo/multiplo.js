/*
Se debe realizar un programa que, dados dos números, imprima por pantalla si el primer número es múltiplo del segundo.
Por ejemplo, con las siguientes variables:
var primer = 20;
var segundo = 2;
Se debería imprimir:
20 es múltiplo de 2.
Con las siguientes variables:
var primer = 23;
var segundo = 2;
Se debería imprimir:
23 no es múltiplo de 2.
*/
var primer = 20;
var segundo = 2;
if (primer % segundo === 0) {
    console.log(primer + ' es múltiplo de ' + segundo + '.');
}
else {
    console.log(primer + ' no es múltiplo de ' + segundo + '.');
}
