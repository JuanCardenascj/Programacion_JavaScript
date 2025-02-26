//Condicionales

let nombre, edad; //Declaramos la  variable
nombre = prompt('INGRESE SU NOMBRE...'); //Le damos el valor de pedir datos al usuario
edad = prompt('INGRESE SU EDAD....'); //Le damos el valor de pedir datos al usuario
edad = parseInt(edad); //Lo que se ingrese en la variable edad debe tratarlo como numero entero

//Condicionales
if (edad >= 18) { //Si edad es mayor a 18 años
    document.write('BIENVENIDO USUARIO! ', nombre); // Imprime en la web
} else {
    if (edad < 18) {
        document.write('ERES MENOR DE EDAD, NO ERES BIENVENIDO ', nombre)// Imprime en la web   
    } else {
        document.write('NO HAS INGRESADO DATOS ', nombre);
    }
}