class Animal {
    constructor(nombre, ojos, estaVivo, cantidadDePatas, edad) {
        this.nombre = nombre;
        this.ojos = ojos;
        this.estaVivo = estaVivo;
        this.cantidadDePatas = cantidadDePatas;
        this.edad = edad;
    };

    comunicar() {
        console.log('Me estoy comunicando');
    };

    respirar() {
        console.log('respirooooooo');
    }
}

let tortuga = new Animal('tortuga', 2, true, 4, 5);
console.log(tortuga);



class Humano extends Animal {
    constructor(nombre, ojos, estaVivo, cantidadDePatas, edad, trabajo, numCelular) {
        super(nombre, ojos, estaVivo, cantidadDePatas, edad);
        this.trabajo = trabajo;
        this.numCelular = numCelular;
    }

    comunicar() {
        console.log('hola, soy ' +  this.nombre);
    }

    trabajar() {
        console.log('soy un godinez');
    }

    viajar() {
        console.log('viajarrr wuuu!!');
    }
}

let Rene = new Humano('René', 1, false, 2, 70, 'ya no tiene trabajo', 1111);

console.log(Rene);

Rene.trabajar();
Rene.viajar();
Rene.comunicar();
Rene.respirar();

class Mascota extends Animal {
    constructor(nombre, ojos, estaVivo, cantidadDePatas, edad, estaVacunado, estaBaniado) {
        super(nombre, ojos, estaVivo, cantidadDePatas, edad);
        this.estaVacunado = estaVacunado;
        this.estaBaniado = estaBaniado;
    }
    darCarinio() {
        console.log('<3');
    }
}

class Perro extends Mascota {
    constructor(nombre, ojos, estaVivo, cantidadDePatas, edad, estaVacunado, estaBaniado){
        super(nombre, ojos, estaVivo, cantidadDePatas, edad, estaVacunado, estaBaniado);
    }
    comunicar(){
        console.log('guau guau!!');
    }
}

let perrito = new Perro('Firulais', 2, true, 4, 3, true, false);

console.log(perrito);
perrito.comunicar();


// class Humano {
//     constructor(nombre, ojos, estaVivo, cantidadDePatas, edad, trabajo, numCelular) {
//         this.nombre = nombre;
//         this.ojos = ojos;
//         this.estaVivo = estaVivo;
//         this.cantidadDePatas = cantidadDePatas;
//         this.edad = edad;
//         this.trabajo = trabajo;
//         this.numCelular = numCelular;
//     }

//     comunicar(){
//         console.log('hola!');
//     }

//     respirar(){
//         console.log('respirarr');
//     }

//     trabajar() {

//     }

//     viajar(){

//     }
// }

