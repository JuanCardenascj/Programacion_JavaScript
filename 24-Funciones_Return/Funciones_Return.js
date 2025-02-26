/**Funciones con Return
 * Son funciones que utilizan una palabra clave 
 * para devolver un valor
 * devuelto por la funcion que puede ser de cualquier tipo de datos
 *  */

function suma(a, b) { //Va retornar el resultado de sumar a y b
    return a + b; //Suma los parametros
}
document.write(suma(30, 60)); //Imprime en la pagina web
document.write('<b>');

//Otro Ejemplo
let resultado;
function suma1(a, b) {
    resultado = a + b;
    return resultado;
}
document.write(suma1(30, 60)); //Imprime en la pagina web
document.write('<b>');

//Otro Ejemplo
function saludar() {
    return 'Hola a todos';
}
var mensaje = saludar();
document.write(mensaje);

//Otro ejemplo - una funcion que retorne un valor
function vercolor(valor) {
    valor = parseInt(prompt('INGRESE VALOR 1 / 3...'));
    switch (valor) {
        case 1:
            return 'Rojo';
        case 2:
            return 'Verde';
        case 3:
            return 'Amarillo';
        default:
            return 'VALOR INCORRECTO';
    }
}
alert(vercolor());