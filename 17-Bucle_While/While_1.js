//Como crear un bucle while

let f = 1;
//Bucle - si quiere imprimir hasta el 10 debe escribir f <= 10
while (f < 10) { // Mientras que f sea menor a 10
    document.write('vuelta no.', f) //Imprime en la web
    document.write('<br>'); //Salto de linea
    f++; //Aumente valor de 1 en 1
} //Imprime los numeros en la web hasta el numero 9
document.write('Fin del bucle');

/*//Ejercicio..*/
let f1 = 1;
let suma = 0;
let valor;

while (f1 <= 5) { //Si f1 es menor o igual a 5
    valor = parseInt(prompt('INGRESE VALOR')); //Pedimo datos al usuario para que sea interpretados como enteros
    suma = suma + valor; //Sumamos el valor ingreso por el usuario mas el valor de la suma
    f1++; //Sumamos de uno en uno
}
document.write('la suma es: ', suma, '<br>'); //Imprime en la web
