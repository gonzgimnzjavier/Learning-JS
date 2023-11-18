/*
Escribe una función (utilizando SWITCH CASE) que diga cuantos días tiene un mes concreto.
Por ejemplo, con la siguiente entrada:
var month = 'Enero'
el programa debe escribir:
El mes de Enero tiene 31 días.
*/
var month = 'Julio';

switch (month) {

    case 'Enero':
    case 'Marzo':
    case 'Mayo':
    case 'Julio':
    case 'Agosto':
    case 'Octubre':
    case 'Diciembre':
        console.log('El mes de ' + month + ' tiene 31 días.');
        break;

    case 'Febrero':
        console.log('El mes de ' + month + ' tiene 28 días.');
        break;

    case 'Abril':
    case 'Junio':
    case 'Septiembre':
    case 'Noviembre':
        console.log('El mes de ' + month + ' tiene 30 días.');
        break;

    default:
        console.log('El mes de ' + month + ' no existe.');
        break;
}