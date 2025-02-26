//Arrays - Los arrays son de longitud dinamica
//Declaramos el Array o Arreglo
let numeros = [];
numeros = [15, 80, 650, 50.30, -10]; //Se le da valor al array de 5 elementos
document.write('Elementos: ', numeros); //Imprime en la web
document.write('<br>'); //Salto de linea

//Para solo ver un elemento del array
document.write('Primer elemento: ', numeros[0]);
document.write('<br>');

//Para cambiar elemento entero del Array
numeros[0] = 14;
document.write('Elemento: ', numeros);
document.write('<br>'); //Salto de linea

//Para cambiar el elemento tipo texto del Array
let frutas = ['Manzanas', 'Bananos', 'Fresas', 'Mangos'];
document.write('<br>');
document.write('Frutas: ', frutas);
document.write('<br>'); //Salto de linea

//Metodos de los Arrays
//Ver cantidad de elementos
document.write('Cantidad: ', numeros.length); //Para la cantidad de elemento
document.write('<br>'); //Salto de linea

//Saber ultimo elemento
document.write('Ultimo elemento: ', numeros[numeros.length - 1]);
document.write('<br>'); //Salto de linea

//Arrays en tipo texto
document.write('En string: ', numeros.toString());
document.write('<br>'); //Salto de linea

//Unir tipos de Arrays
let letras = ['a, b, c'];
let numero2 = [1, 2, 3];
document.write('Alfanumerico;', letras.concat(numero2));
document.write('<br>'); //Salto de linea

//Borrar un elemento del arrays
numeros.pop(); //Pop para borrar el ultimo elemento del array
document.write(numeros);
document.write('<br>'); //Salto de linea

//Como agrego un elemento al final del array
numeros.push(-10); //Push para agregar elementos al array
document.write(numeros);
document.write('<br>'); //Salto de linea

//Eliminar primer elemento
numeros.shift(); //Para eliminar el primer elemento del Array
document.write(numeros);
document.write('<br>'); //Salto de linea

//Insertar elemento al inicio del array
numeros.unshift(123); //Para agregar elemento al inicio del array
document.write(numeros);
document.write('<br>'); //Salto de linea

//Como eliminar elemento apartir de un punto o ubicacion del array
numeros.splice(2, 3);//Para eliminar elementos apartir de la ubicacion
document.write(numeros);
document.write('<br>'); //Salto de linea

//Como copiar un array
let cantidades = [100, 200, 300, 400, 500, 600, 700];
let copia = cantidades.slice(1, 4); //Copia desde la posicion 1 hasta la 4
document.write('Array copia: ', copia);
document.write('<br>'); //Salto de linea

//Para organizar alfabeticamente el array
let objetos = ['Carro', 'Planeta', 'Lendra', 'Zorro'];
document.write(objetos.sort()); //Organiza alfabeticamente el Array
document.write('<br>'); //Salto de linea

//Para organizar los objetos en reversa o alrevesz
document.write(objetos.reverse()); //Reverse para ver los elementos de atras hacia adelante
document.write('<br>'); //Salto de linea
