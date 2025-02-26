for (let f = 0; f < 10; f++) {
    document.write(f); //Variable contador f
    document.write('<br>'); //Salto de linea
    if (f == 3) { //Si el contador f es igual a 3
        document.write('Aqui es la vuelta: ', f); //Imprime aqui es la vuelta
        document.write('<br>'); //Salto de linea
        break; //Para detener al bucle en el punto en el que se le pida o diga
    }
}

let palabra = 'JavaScript'; //Inicializamos y declaramos la variable
let resultado = ''; //Inicializamos y dejamos en blanco

for (let f in palabra) { // Para el contador f dentro de palabra
    if (palabra[f] == 'a') { //Si palabra que seria el contador f es igual 'a'
        continue; //continua
    } else { //Pero si resultado es igual a resultado mas palabra, contador es
        resultado += palabra[f]; //entonces
    }
}
document.write(resultado); //Imprime resultado