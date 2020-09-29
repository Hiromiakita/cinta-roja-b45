//IMPORTO UNA CLASE DE UN ARCHIV
const Largometraje = require('./Largometraje');

class Documental extends Largometraje {
    constructor(titulo, duracion, director, actores, procedencia, temática) {
        super(titulo, duracion, director, actores, procedencia);
        this.temática = temática;
    }
}


module.exports = Documental;


//EJEMPLO
// let doc1 = new Documental('titulo', 100);
// doc1.mostrarMensaje();
// console.log(doc1);