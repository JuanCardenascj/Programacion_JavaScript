let resultado; //Incializo la variabel y la declaro
function suma(valor1, valor2) { //Coloca los parametros que necesita para su funcion
    resultado = valor1 + valor2;
    alert('RESULTADO; ' + resultado);
}
suma(5, 8);

//Hacerla pidiendole datos al usuario
let resultado2; //Incializo la variabel y la declaro
function suma(valor3, valor4) { //Coloca los parametros que necesita para su funcion
    valor3 = parseInt(prompt('INGRESE VALOR 1 .....'));
    valor4 = parseInt(prompt('INGRESE VALOR 2 .....'));
    resultado = valor3 + valor4;
    alert('RESULTADO; ' + resultado);
}
suma();