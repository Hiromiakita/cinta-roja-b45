
//OBEJTO LITERAL

let persona1 = {
    nombre: 'Diana',
    apellido: 'Pérez',
    edad: 21,
    nacionalidad: 'MX',
    comidaFav: 'chilaquiles'
};

console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.edad);


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

console.log(perrito);
console.log(perrito.cantidadDeOrejas);

perrito.rodar();
perrito.caminar();
perrito.ladrar();


let coche = {
    motor: 'v8',
    puertas: 6,
    color: 'morado',
    anio: 2021,
    marca: 'mazda',

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

console.log(coche);
coche.arrancar();
coche.pintarCoche('verde');
console.log(coche);
coche.cambiarMotor('eléctrico');
console.log(coche);
coche.cambiarNumPuertas(2);
console.log(coche);


coche.transmision = 'automática';
coche.frenos = 'cuando quiere';
coche.tapiceria = 'sintética';
coche.anio = 2030;
console.log(coche);
