
//OBEJTOS LITERALEs


//EJEMPLO 1
//Creación de un objeto literal
//llave : valor 
//atributos separados con una coma entre sí
let persona1 = {
    //Atributos
    nombre: 'Diana',
    apellido: 'Pérez',
    edad: 21,
    nacionalidad: 'MX',
    comidaFav: 'chilaquiles'
};

//Mostramos todo el objeto
console.log(persona1);
//mostramos propiedades específicas del objeto
console.log(persona1.nombre);
console.log(persona1.edad);


//--------------------------------------------------------------------------
//EJEMPLO 2
//Creación de un objeto literal
let perrito = {
    //atributos
    nombre: 'Peludito',
    color: 'café',
    cantidadDeOrejas: 2,
    raza: 'pastor alemán',
    genero: 'M',
    numPatas: 3,
    estaVivo: true,

    //métodos
    ladrar(){
        console.log('guaaaau guaaaaauu');
    },
    caminar(){
        console.log('estoy caminando, humano');
    },
    rodar(){
        console.log('rodando');
    }
}

//Mostramos todo el objeto
console.log(perrito);

//Mostramos una propiedad en específico
console.log(perrito.cantidadDeOrejas);

//Mandamos llamar los métodos de nuesstro objeto
perrito.rodar();
perrito.caminar();
perrito.ladrar();


//--------------------------------------------------------------------------
//EJEMPLO 3


//Creación del objeto literal
let coche = {
    //Atributos
    motor: 'v8',
    puertas: 6,
    color: 'morado',
    anio: 2021,
    marca: 'mazda',

    //Métodos
    arrancar(){
        console.log('run runnnn');
    },

    girarDerecha() {
        console.log('---->')
    },
    girarIzquierda() {
        console.log('<----')
    },
    cambiarMotor(nuevoTipoDeMotor){
        this.motor = nuevoTipoDeMotor;
    },
    pintarCoche(nuevoColor){
        this.color = nuevoColor;
    },
    cambiarNumPuertas(nuevoNumero){
        this.puertas = nuevoNumero;
    }
}


//Mostramos todo el objeto
console.log(coche);
//Accedemos a su método arrancar
coche.arrancar();
//Cambiarmos una propiedad del objeto original usando un método
coche.pintarCoche('verde');
//Mostramos el objeto
console.log(coche);
//Cambiarmos una propiedad del objeto original usando un método
coche.cambiarMotor('eléctrico');
//Mostramos el objeto
console.log(coche);
//Cambiarmos una propiedad del objeto original usando un método
coche.cambiarNumPuertas(2);
//Mostramos el objeto
console.log(coche);

//Añadimos nuevos atributos sin modificar el original
coche.transmision = 'automática';
coche.frenos = 'cuando quiere';
coche.tapiceria = 'sintética';
coche.anio = 2030;
//Mostramos el objeto final
console.log(coche);
