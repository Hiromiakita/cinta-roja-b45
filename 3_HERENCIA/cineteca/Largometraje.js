class Largometraje {
    constructor(titulo, duracion) {
        this.titulo = titulo;
        this.duracion = duracion;
    }
    mostrarMensaje() {
        console.log('soy un largometraje');
    }
}

//EXPORTO O PONGO DISPONIBLE UNA CLASE PARA QUE LA USE OTRO ARCHIVO
module.exports = Largometraje;