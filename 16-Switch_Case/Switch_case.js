//crear un programa que le devuelva al usuario el 
//el valor que ingreso por pantalla y sino lo ingreso
//de igual modo le diga

let valor;
valor = parseInt(prompt('INGRESE VALOR ENTRE 1 Y 3.....'));

switch (valor) { //Trabaja con una clave, el valor que se va a evaluar
    case 1: //Dependiendo del valor que encuentre va realizar una serie de instrucciones
        document.write('Ingreso uno ');
        break; //Va salir de la condicional o condicion

    case 2: //Dependiendo del valor que encuentre va realizar una serie de instrucciones
        document.write('Ingreso dos ');
        break; //Va salir de la condicional o condicion

    case 3: //Dependiendo del valor que encuentre va realizar una serie de instrucciones
        document.write('Ingreso tres ');
        break; //Va salir de la condicional o condicion

    default:
        break;
}

//Otra Variable
let color;
calor = prompt('INGRESE UN COLOR: ROJO/VERDE/AZUL ');

switch (color) { //Trabaja con una clave, el valor que se va a evaluar
    case 'rojo': //Dependiendo del valor que encuentre va realizar una serie de instrucciones
        document.write('Ingreso rojo ');
        break; //Va salir de la condicional o condicion

    case 'verde': //Dependiendo del valor que encuentre va realizar una serie de instrucciones
        document.write('Ingreso verde ');
        break; //Va salir de la condicional o condicion

    case 'azul': //Dependiendo del valor que encuentre va realizar una serie de instrucciones
        document.write('Ingreso azul ');
        break; //Va salir de la condicional o condicion


    default:
        break;
}