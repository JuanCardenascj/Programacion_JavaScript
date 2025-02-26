/*Do - Hacer
While - Mientras*/

let valor;
do { //Hacer todo lo que está allí hasta que...!
    valor = parseInt(prompt('INGRESE VALOR 1 PARA SALIR ...')); //PASEINT - pasar a entero
    document.write('Ingrese valor: ', valor);
    document.write('<br>');
} while (valor != 1); //Repita lo anterior mientras el valor sea diferente de 1
document.write('Fin de bucle');

//Otro Ejemplo
let usuario, clave, control;
usario = prompt('INGRESE USUARIO...');
clave = prompt('INGRESE SU CONTRASEÑA....');
control = 0;

//Bucle
do {
    if (clave != 'Miacceso33%') { //Si clave es diferente de ('Miacceso33%')
        clave = prompt('CONTRASEÑA INCORRECTA\N'
            + 'INTENTE DE NUEVO....'); //Entonces la contraseña sera incorrecta
    } else { //Pero si digita 'Miacceso33%'
        control = 1; //Seria control = 1 Cumple
    }
} while (control != 1); //Mientras que control sea diferente de 1
document.write('ACCESO CORRECTO: BIENVENIDO'); //Imprime.!