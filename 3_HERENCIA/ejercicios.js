// ------------------------------------------------------------
// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antiguedad" que guarda un valor numerico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.
// ------------------------------------------------------------

class Maestro {
    constructor(materia, calificaciones) {
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    calcularPromedio() {
        let suma = 0;
        // [10, 9, 8, 6,10, 10]

        for(let i = 0; i < this.calificaciones.length; i++) {
           suma += this.calificaciones[i];
        }

        let promedio = suma / this.calificaciones.length;
        console.log('promedio:'+  promedio);
        return promedio;
    }
}

let maestro1 = new Maestro('inglés', [10, 9, 8, 50, 100]);
console.log(maestro1);
maestro1.calcularPromedio();


class MaestroFisica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

let Antonio = new MaestroFisica('Fisica I', [100, 90, 85], 35);
console.log(Antonio);
Antonio.calcularPromedio();

class MaestroMusica extends Maestro {
    constructor(materia, calificaciones, antiguedad) {
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}

let Petra = new MaestroMusica('Música 3', [100, 100, 90], 5);

console.log(Petra);
Petra.calcularPromedio();

// ------------------------------------------------------------
// 2.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100
// ------------------------------------------------------------

class Electrodomestico {
    constructor(precio, color, capacidad) {
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
        this.consumoEnergetico = 100;
    }
}

// ------------------------------------------------------------
// 3.- Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.
// ------------------------------------------------------------

class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga, modelo) {
        super(precio, color, capacidad);
        this.carga = carga;
        this.modelo = modelo
    }
    precioFinal() {
        let precio = this.consumoEnergetico * this.carga;
        console.log(precio);
        return precio;
    }
}

let lavadora1 = new Lavadora(12000, 'amarilla', 20, 50, 'MABE');
console.log(lavadora1);
lavadora1.precioFinal();
let lavadora2 = new Lavadora(10000, 'azul', 20, 50, 'LG');
console.log(lavadora2);


// ------------------------------------------------------------
// 4.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol. Crear los getters y setters
//     correspondientes. 
// GET -> OBTENER O MOSTRAR EL VALOR DE UNA PROPIEDAD
// SET -> CAMBIAR O ACTUALIZAR EL DE VALOR DE UNA PROPIEDAD
// ------------------------------------------------------------

class Bebida {
    constructor(cantidad) {
        this.cantidad = cantidad;
    }

    getCantidad() {
        console.log(this.cantidad);
        return this.cantidad;
    }

    setCantidad(nuevaCantidad) {
        this.cantidad = nuevaCantidad;
    }
}

let michelada = new Bebida (1000);

console.log(michelada);
michelada.setCantidad(500);
michelada.getCantidad();
console.log(michelada);

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol) {
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }

    getPorcentajeAlcochol (){
        console.log(this.porcentajeAlcohol);
        return this.porcentajeAlcohol;
    }

    setPorcentajeAlcohol (nuevoPorcentaje) {
        this.porcentajeAlcohol = nuevoPorcentaje;
    }
}

class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar;
    }
    getAzucar (){
        console.log(this.azucar);
        return this.azucar;
    }

    setAzucar (nuevaCantidadAzucar) {
        this.azucar = nuevaCantidadAzucar;
    }
}

let cocacola = new Refresco(250, 100);
console.log(cocacola);
cocacola.setAzucar(10);
cocacola.getAzucar();
console.log(cocacola);