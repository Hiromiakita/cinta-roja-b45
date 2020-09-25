// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, género, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,género,peso y altura
//      Generar el RFC a partir de el nombre, apellido, fechaNacimiento y sexo
// RFC - > PRIMER LETRA DE TU NOMBRE + PRIMER LETRA DE TU APELLIDO + AÑO NACIMIENTO + MES + DÍA + PRIMER LETRA DE TU GÉNERO
console.log(Math.pow(2, 2));



class Persona {
   constructor(nombre, edad, genero, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.peso = peso;
    this.altura = altura;
    this.RFC = nombre + edad + genero;
   }

   calcularIMC(){
       let IMC = this.peso / (this.altura ** 2);
       console.log(IMC);
       return IMC;
   }

   esMayorDeEdad(){
       if(this.edad > 17) {
           console.log('Es mayor');
       } else {
           console.log('Es menor');
       }
   }
}

let persona1 = new Persona('Diana', 2, 'F', 50, 1.8);
console.log(persona1);
persona1.calcularIMC();
persona1.esMayorDeEdad();


// 2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
// 	 -Titular y cantidad
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10


class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    };

    ingresar(ingreso) {
        this.cantidad += ingreso;
    };

    retirar(retiro){
        this.cantidad -= retiro;
    }
}

let cuentaHiromi = new Cuenta('Hiromi A', 500);

console.log(cuentaHiromi);

cuentaHiromi.ingresar(200);

console.log(cuentaHiromi);

cuentaHiromi.retirar(2);

console.log(cuentaHiromi);

let cuentaAngel = new Cuenta('Angel', 10000000);
console.log(cuentaAngel);