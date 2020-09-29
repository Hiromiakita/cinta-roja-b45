const Largometraje = require("./Largometraje");

class Pelicula extends Largometraje{
    constructor(titulo, duracion, director, actores, procedencia, genero, esReal){
        super(titulo, duracion, director, actores, procedencia);
        this.genero = genero;
        this.esReal = esReal;
    }
}

module.exports = Pelicula;