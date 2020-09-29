class Largometraje {
    constructor(titulo, duracion, director, actores, procedencia) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
        this.actores = actores;
        this.procedencia = procedencia;
    };
    producir() {
        console.log('Estamos en produccion');
    };
}

//EXPORTO O PONGO DISPONIBLE UNA CLASE PARA QUE LA USE OTRO ARCHIVO
module.exports = Largometraje;
