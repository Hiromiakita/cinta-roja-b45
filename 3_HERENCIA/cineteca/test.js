//IMPORTAMOS VARUABLES, FUNCIONES O CLASES DESDE OTRO ARCHIVO
const {cine1, peli1, doc1, hola, mensaje, Cine, Pelicula, Documental} = require('./Cine');

console.log(cine1);
console.log(peli1);
console.log(doc1);
console.log(hola);
console.log(mensaje);

//DESTRUCTURAR OBJETOS -> SACAR DE UN OBJETO SUS VALORES Y GUARDALOS EN VARIABLES
let persona = {
    nombre: 'Diego',
    edad: 20
};

//Forma convencional de acceder a un valor de un objeto
console.log(persona.nombre);


//destructuramos el objeto persona y guardamos nombre y edad en variables
let {nombre, edad} = persona;

console.log(nombre);
console.log(edad);

//Podemos crear objetos tipo película pues tenemos la clase Pelicula en nuestro archivo
let pelicula = new Pelicula();

