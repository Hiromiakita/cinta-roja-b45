//IMPORTO UNA CLASE DE UN ARCHIV
const Largometraje = require('./Largometraje');

class Documental extends Largometraje {
    constructor(titulo, duracion) {
        super(titulo, duracion);
    }
}


//EJEMPLO
// let doc1 = new Documental('titulo', 100);
// doc1.mostrarMensaje();
// console.log(doc1);