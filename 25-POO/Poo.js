/**Es un Paradigma de programacion y la utilizan casi todos los lenguajes.
 *     Esos lenguajes son: PYTHON, JAVA, JAVASCRIPT, C++, PHP, PERL
 * Objeto: una estructura que contiene propiedades y metodos (Propiedades y funciones)
 * Propiedades: Abstraccion, encapsulamiento, herencia, polimorfismo
 * En javaScript se separa en dos: Instancias que son los mismos objetos
 * En javaScript se separa en dos: Clases que definen un conjunto determinaod de objetos
 * Objetos: Cosas con identidad propia tienen atributos
 * Propiedad (funciones y metodos): Deben cumplir y carcteristicas
 *    Ejemplo:
 *          Objeto de interfaz grafica ventana: tamaño de la ventana, el color, el diseño,etcc....
 *          Propiedades: Contiene un titulo, va tener tablas, etc...
 * 
 */
//Crea el Objeto Auto
var Auto = { //Aqui define las propiedades del objeto
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2025,
    color: 'Black',
    tipo: 'Sedán'
}

document.write('Creación objeto auto');
document.write('<br>')
document.write('Marca: ', Auto.marca);
document.write('<br>')
document.write('Modelo: ', Auto.modelo);
document.write('<br>')
document.write('Color: ', Auto.color);
document.write('<br>')
document.write('Año: ', Auto.anio);
document.write('<br>')