//Operador && (y) - Es verdadero mientras se cumpla la condicion
let a, b; //Inicializa las dos variables
a = 20; //Declara la variable
b = 30; //Declara la variable
document.write(a == b); //Si hay es igual a b.

//Otro ejemplo con el operador (y)
let continente, edad;
continente = prompt('INGRESE SU CONTINENETE...'); //Pide datos al usuario
edad = prompt('INGRESE SU EDAD...'); //Pide datos al usuario

//Condicional
if (continenete == 'America' && edad >= 18) { //Si continenet es igual (America) y edad es mayor o igual a 18
    document.write('eres un adulto americano ') //Imprime en la web
} else { //Sino se cumple
    document.write('o no eres adulto o no eres americano '); //Imprime en la web
}

//Ejemplo con el operador logico (O)
let dia, mes, año; //Inicializa la variable
dia = prompt('INGRESE EL DIA....'); //Declara la variable
mes = prompt('INGRESE EL MES ....'); //Declara la variable
año = prompt('INGRESE EL AÑO.....'); //Declara la variable

//Condicional 
if (mes == 1 || mes == 2 || mes == 3) {
    document.write('Pertenece al primer trimestre! '); //Imprime en la web
} else { //Sino se cumple
    document.write('No pertenece al primer trimestre'); //Imprime en la web
}



