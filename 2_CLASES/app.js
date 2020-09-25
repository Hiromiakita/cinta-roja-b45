//OBJETOS LITERALES

let usuario1 = {
    nombre: 'Diego',
    edad: 25
};

// console.log(usuario1);
// console.log(usuario1.nombre);

let usuario2 = {
    nombre: 'Alejandra',
    edad: 21,
    genero: 'F'
}

// console.log(usuario2);
// console.log(usuario2.edad);

//CLASES (MOLDES)

//Creamos una clase o un molde
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

//Crear objetos con ayuda de la clase o molde INSTANCIA
let usuario3 = new Usuario('Hana', 23);

// console.log(usuario3);
// console.log(usuario3.nombre);

let usuario4 = new Usuario('Antonio', 30);

// console.log(usuario4);

let usuario5 = new Usuario('Miguel', 11);

// console.log(usuario5.nombre);

class Banco {
    constructor(nombre, cantidadDeUsuarios, ubicacion, telefono, numEmpleados){
        this.nombre = nombre;
        this.cantidadDeUsuarios = cantidadDeUsuarios;
        this.ubicacion = ubicacion;
        this.telefono = telefono;
        this.numEmpleados = numEmpleados;
    };

    darPrestamos(){
        console.log('me debes!!');
    };

    cobrar(){
        console.log('Págame');
    };

    contratarEmpleados(nuevosEmpleados) {
        this.numEmpleados += nuevosEmpleados;
    }
};

let BBVA = new Banco('BBVA', 1000000, 'México', 333, 100);
// console.log(BBVA);

BBVA.contratarEmpleados(20);
// console.log(BBVA);
// BBVA.cobrar();

let santander = new Banco('Santander', 100000, 'USA', 2222, 50);
// console.log(santander);
santander.contratarEmpleados(100);
// console.log(santander);

class Bebida {
    constructor(nombre, ingredientes){
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = 100;
        this.medida = 500;
    };
    beber(){
        console.log('glup glup');
    };
    setMedida(nuevaMedida){
        this.medida = nuevaMedida;
    };
    getMedida(){
       return this.medida;
    }

}

let margarita = new Bebida('Margarita', ['tequila', 'limón', 'sal']);

console.log(margarita);

let carajillo = new Bebida('carajillo', ['expresso', 'alcohol 43', 'hielos'], 50);
console.log(carajillo);

carajillo.precio = 200;
console.log(carajillo);
carajillo.setMedida(250);
console.log(carajillo);
console.log(carajillo.getMedida());
