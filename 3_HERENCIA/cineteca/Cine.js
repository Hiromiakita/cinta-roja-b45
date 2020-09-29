// Crear una clase Cine que tenga 3 atributos y el método reproducir como mínimo. :)
// El método reproducir puede diferenciar entre un objeto tipo Película o un objeto tipo Documental.
// Crear una clase Largometraje (elige atributos y métodos que sean apropiados)
// Crea las subclases Pelicula y Documental que extiendan de Largometraje.
// Añade los atributos y métodos adicionales que sean necesarios.
// *Cada clase debe estar en un archivo por separado.
// *Investiga como exportar clases de un archivo para importarlas en otro y poder usarlas.
// Crea instancias de Película, Documental y Cine como mínimo.

const Pelicula = require('./Pelicula');
const Documental = require('./Documental');


class Cine {
    constructor(nombre, ubicacion, numSalas) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.numSalas = numSalas;
    }

    reproducir(largometraje) {
        //sentencia if y else para condiciones
        // if y else no necesitan llaves si sólo hay una línea que se ejecuta de acuerdo a la condición

        if(largometraje.duracion > 100) 
            console.log(`Estamos reproduciendo la película: ${largometraje.titulo}`);
        else 
            console.log(`Estamos reproduciendo el documental: ${largometraje.titulo}`);
        

        //operador ternario para condiciones
        // condicion ? cosa en caso de que se cumple : cosa en caso de que no se cumpla
        
        // largometraje.duracion > 100 ? 
        // console.log(`Estamos reproduciendo la película: ${largometraje.titulo}`) : 
        // console.log(`Estamos reproduciendo el documental: ${largometraje.titulo}`);
    }
}

let peli1 = new Pelicula('Roma', 135, 'Alfonso Cuarón', ['Yalitza Aparicio', 'Marina de Tavira'], 'México', 'drama', false);
let doc1 = new Documental('Social Dilemma', 93, 'Jeff Oriowski', ['Tristan Harris'], 'USA', 'redes sociales');


let cine1 = new Cine('Cinépolis Centro', 'Nuevo Toledo (en el centro)', 10);


console.log(peli1);
console.log(doc1);
console.log(cine1);

peli1.producir();

cine1.reproducir(peli1);
cine1.reproducir(doc1);

//ERROR
let hola = 'hola';
let mensaje = 'soy un mensaje desde Cine';
cine1.reproducir(hola);

module.exports = {
    cine1,
    peli1,
    doc1,
    hola,
    mensaje,
    Cine,
    Pelicula,
    Documental
};