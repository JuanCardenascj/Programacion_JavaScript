/**CLASE DATE
 * Utilizada para trabajar con fechas y horas
 * Permite crear objetos que nos representa momentos especificos en el tiempo
 * Facilita la manipulacion de fechas, calculos de tiempo gestion de horarios
 * Entre otros....
 */

const fechatual = new Date(); //Constante fecha actual de mi clase Date

document.write(fechatual); //Imprime la fecha y la zona horaria en la web
document.write('<br>'); //Salto de linea

let fecha = new Date(); //Crea el objeto fecha de mi clase Date
document.write('Hoy es: ', fecha.getDate()); //Imprime en la web el dia en el que estamos
document.write('<br>'); //Salto de linea
document.write('El mes es: ', fecha.getMonth() + 1); //Imprime en la web el mes en el que estamos
document.write('<br>'); //Salto de linea
document.write('El año es: ', fecha.getFullYear()); //Imprime en la web el año en el que estamos
document.write('<br>'); //Salto de linea
document.write('La hora es: ', fecha.getHours(), ':',
    fecha.getMinutes(), ':',
    fecha.getSeconds()); //Imprime en la web la hora actual