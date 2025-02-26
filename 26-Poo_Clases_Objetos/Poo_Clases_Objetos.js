/**Las clases: Son una forma de definir objetos y estructura de datos con un conjunto de
 * propiedades y metodos.
 */

/*Ejercicio Ejemplo Referido hacia el Poo Clases y Objetos
Cree la familia Simpson y todas sus descripciones, junto con amigos y compañeros de trabajo.!
*/

//Declaramos una clase.!
class Persona { //Atributos de clase - Una variable que definimos dentro de una clase
    nombre = 'Homero'; //Atributo - Como es una variable le damos un valor
    apellido = 'Simpson'; //Atributo - Como es una variable le damos un valor
    direccion = 'Ave. SiempreViva 742'; //Atributo - Como es una variable le damos un valor
    telefono = 5533472; //Atributo - Como es una variable le damos un valor
    email = 'amantedelacomida@aol.com'; //Atributo - Como es una variable le damos un valor

    //Metodos - Que utilizaran los Objetos de la clase
    trabajar() { //Metodo de clase
        return 'Trabaja en la planta nuclear'; //Metodo que define una funcionalidad para los objetos
    }
    estudiar() {
        return 'Escuela primaria de Sprinfield'; //Metodo que define una funcionalidad para los objetos
    }
    ciudad() {
        return 'Vive en Sprinfield'; //Metodo que define una funcionalidad para los objetos
    }
}

//Crea Los Objeto Para La clase PERSONA 
document.write('.......!! THE FAMILY SIMPSON !!........')
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const homero = new Persona(); //Const - Porque quiero que sea constante

document.write(homero.nombre + ' ' + homero.apellido); //Concatena Objeto - nombre /Imprime
document.write('<br>');//Salto de linea
document.write(homero.trabajar()); //Objeto - trabajar (que es el metodo) - se debe utilizar los parentesis
document.write('<br>');//Salto de linea
document.write('Dirección: ', homero.direccion); //Objeto - Direccion
document.write('<br>');//Salto de linea
document.write('Telefono: ', homero.telefono);
document.write('<br>');//Salto de linea
document.write(homero.ciudad()); //Objeto - Metodo
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const march = new Persona();//Const - Porque quiero que sea constante

document.write('March ', march.apellido); //Objeto - apellido 
document.write('<br>'); //Salto de linea
document.write('Es la esposa de Homero'); //Imprime en pantalla web
document.write('<br>');//Salto de linea
document.write('Dirección: ', homero.direccion); //Objeto - Direccion
document.write('<br>');//Salto de linea
document.write('Telefono: ', homero.telefono);
document.write('<br>');//Salto de linea
document.write(homero.ciudad()); //Objeto - Metodo
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const abraham = new Persona();//Const - Porque quiero que sea constante

document.write('Abraham ', abraham.apellido); //Obejto - Apellido
document.write('<br>');//Salto de linea
document.write('Es el papá de Homer y es el abuelo de Lisa, Bart y Maggie'); //Imprime en pantalla web
document.write('<br>');//Salto de linea
document.write('Dirección: ', homero.direccion); //Objeto - Direccion
document.write('<br>');//Salto de linea
document.write('Telefono: ', homero.telefono);
document.write('<br>');//Salto de linea
document.write(homero.ciudad()); //Objeto - Metodo
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const bart = new Persona(); //Const - Porque quiero que sea constante

document.write('Bart ', bart.apellido); //Objeto - apellido 
document.write('<br>'); //Salto de linea
document.write('Estudia en: ', bart.estudiar()); //Objeto -(Metodo estudiar)
document.write('<br>');//Salto de linea
document.write('Dirección: ', homero.direccion); //Objeto - Direccion
document.write('<br>');//Salto de linea
document.write('Telefono: ', homero.telefono);
document.write('<br>');//Salto de linea
document.write(homero.ciudad()); //Objeto - Metodo
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const lisa = new Persona();//Const - Porque quiero que sea constante

document.write('Lisa ', lisa.apellido); //Objeto - apellido
document.write('<br>');//Salto de linea
document.write('Estudia en: ', lisa.estudiar()); //Objeto -(Metodo estudiar)
document.write('<br>');//Salto de linea
document.write('Dirección: ', homero.direccion); //Objeto - Direccion
document.write('<br>');//Salto de linea
document.write('Telefono: ', homero.telefono);
document.write('<br>');//Salto de linea
document.write(homero.ciudad()); //Objeto - Metodo
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const maggie = new Persona();//Const - Porque quiero que sea constante

document.write('Maggie ', maggie.apellido); //Objeto - apellido
document.write('<br>');//Salto de linea
document.write('Es la hija menor de Homer y March'); //Imprime en pantalla
document.write('<br>');//Salto de linea
document.write('Dirección: ', homero.direccion); //Objeto - Direccion
document.write('<br>');//Salto de linea
document.write('Telefono: ', homero.telefono);
document.write('<br>');//Salto de linea
document.write(homero.ciudad()); //Objeto - Metodo
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

//Compañero de trabajo de Homero Simpson

document.write('.......!! CO-WORKES HOMERO !!........')
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const lenny = new Persona();//Const - Porque quiero que sea constante

document.write('Lenny ', lenny.trabajar()); //Objeto - (Metodo trabajar)
document.write('<br>');//Salto de linea
document.write('Es compañero de trabajo de Homero');
document.write('<br>');//Salto de linea
document.write(homero.ciudad()); //Objeto - Metodo
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const carl = new Persona();//Const - Porque quiero que sea constante

document.write('Carl ', carl.trabajar());//Objeto - (Metodo trabajar)
document.write('<br>');//Salto de linea
document.write('Es compañero de trabajo de Homero');
document.write('<br>');//Salto de linea
document.write(carl.ciudad()); //Objeto - Metodo
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

document.write('.......!! FRIENDS HOMERO !!........')
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const moe = new Persona();//Const - Porque quiero que sea constante

document.write('Moe Trabaja en su taberna de MOES'); //Imprime en la web
document.write('<br>');//Salto de linea
document.write('Es amigo de homero'); //Imprime en la web
document.write('<br>');//Salto de linea
document.write(moe.ciudad()); //Objeto - ciudad
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea

const barnie = new Persona();//Const - Porque quiero que sea constante

document.write('Barnie es el borracho de la taberna de MOES'); //Imprime en la web
document.write('<br>');//Salto de linea
document.write('Es amigo de homero'); //Imprime en la web
document.write('<br>');//Salto de linea
document.write(moe.ciudad()); //Objeto - ciudad
document.write('<br>');//Salto de linea
document.write('<br>');//Salto de linea







