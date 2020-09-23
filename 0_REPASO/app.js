//REPASO


//Enviar mensajes a la consola
// console.log('Soy un mensaje');
// console.warn('Soy otro mensaje');

//Declarar una variable
//palabr reservada (var, let, const) + nombre de la varible

var numero;

//Asignar valor a una variable
numero = 10;

//Declarar y asignar
var nombre = 'Hiromi';
var nombreDelUsuario = 'Diego';
var numeroTelefonico = 33333;

//Diferencia entre var, let, const
//SCOPE
//var -> global
//let -> local
//const -> local y constante (no cambiar de valor);

//sí puedo reasignar
var num = 10;
// console.log(num);
num = 1;
num = 100;
// console.log(num);

//sí puedo reasignar
let num2 = 100;
num2 = 1;
num2 = 3;

//no puedo reasignar
const num3 = 100;

var num5 = 100;

{
    // console.log(num5)
}

let num6 = 2;

{
    // console.log(num6)
}



{   
    //GLOBAL (funciona en TODO el documento)
    var num7 = 200;
}

// console.log(num7)

{
    //LOCAL (sólo funciona en el espacio donde es declarada)
    let num8 = 1000;
}

//NO FUNCIONA
// console.log(num8);


//TIPO DE DATOS

//NÚMEROS
let numY = 10;
let numX = 3.5;

//STRINGS (texto) - Cadenas de caracteres
let nombreAlumno = 'Alan';
let otroNombre = 'Diego Antonio';
let textoGrande = 'jfshjf jfhsjfs jfshfjsh jshfsjfh';

//BOOLEANOS ( sí/ no ) true/false
let esMayorDeEdad = true;
let esHijoUnico = false;

// console.log('soy un console.log');
// console.log(esHijoUnico);
// console.log(num2);


//ARREGLOS O LISTAS
let listaUno = [1, 50, 200, 20];
let listaDos = [];
let nombres = ['Julian', 'Ana', 'José'];
let listaCuatro = [1, 'a', 'a', 100];

// console.log(nombres);
// console.log(nombres[2])

//OBJETOS 
let persona = {
    nombre: 'Luis',
    edad: 20,
    tel: 333
};

// console.log(persona);
// console.log(persona.nombre);


//CONDICIONALES -> DECISIONES

//if - else
//if - else if - else
//do while
//switch

let edadAlumno = 2;

//Preguntas
// > mayor que
// < menor que
// <= menor o igual que
// >= mayor o igual que
// == igual que
// === igual que
// != diferentes
// && y
// || o


if(edadAlumno >= 18) {
    // console.log('Sí es mayor');
} else {
    // console.log('No es mayor');
}

let precio = 30;

if(precio < 100) {
    // console.log('boleto es rojo');
} else if(precio < 200) {
    // console.log('boleto es naranja');
} else if(precio < 300) {
    // console.log('boleto morado');
} else {
    // console.log('boleto blanco');
}



// console.log(5 > 10);
// console.log('hola' == 'hola');
// console.log(5 != 10);
// console.log(10 != 10);


//Compara el valor
// console.log(10 == '10');

//Compara valor y tipo ESTRICTA
// console.log(10 === '10');



//CICLOS repetir
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


//valor inicial; tope; incremento
for(let iterador = 10; iterador <= 100; iterador+= 10) {
    //CONCATENAR
    // console.log('alumno n: ' + iterador*2);
}

let nombresAlumnos = ['Luis', 'Julio', 'Diego', 'Laura', 'Karina', 'Ana', 'Alan', 'Juan'];

// console.log(nombresAlumnos[0]);
// console.log(nombresAlumnos[1]);
// console.log(nombresAlumnos[2]);
// console.log(nombresAlumnos[3]);


// .length de un arreglo, nos da su tamaño

// console.log(nombresAlumnos.length);

for(let i = 0; i <= 7; i++){
    // console.log(nombresAlumnos[i]);
};

for(let i = 0; i < nombresAlumnos.length; i++){
    // console.log(nombresAlumnos[i]);
};


//FUNCIONES

//Creación de una función
function mostrarAlumnos () {
    let nombresAlumnosSexto = ['Luis', 'Julio', 'Diego', 'Laura', 'Karina', 'Ana', 'Alan', 'Juan'];

    for(let i = 0; i < nombresAlumnosSexto.length; i++){
        console.log(nombresAlumnosSexto[i]);
    };
}

//Funciones con valor de retorno

function obtenerNombreCompleto () {
    let nombre = 'Diego';
    let apellido = 'Hernández';
    let nombreCompleto = nombre + ' ' + apellido;
    return nombreCompleto;
}

console.log(obtenerNombreCompleto());

function sumar(){
    let a = 200;
    let b = 100;
    let resultado = a + b;
    return resultado;
}

let resultadoDeLaSuma = sumar();
console.log(resultadoDeLaSuma);

console.log(sumar());


function restar() {
    console.log('soy la función restar');
    let num1 = 100;
    let num2 = 50;
    let resultado = num1 - num2;
    console.log(resultado);
}

let resultadoDeLaResta = restar();

console.log(resultadoDeLaResta);
