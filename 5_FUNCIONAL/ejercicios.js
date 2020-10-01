// //1. Multiplicar x 5 cada uno de los elementos del siguiente arreglo -> [10, 4, 3, 2, 6, 8]
let numeros = [10, 4, 3, 2, 6, 8];

let numerosMultiplicados = numeros.map(numero => {
    return numero * 5;
})

// console.log('numeros', numeros);
// console.log('numerosMultiplicados', numerosMultiplicados);

// //2. Del arreglo siguiente, elegir los elementos que sean mayores que 5 -> [12, 2, 1, 5, 8]

let numeros2 = [12, 2, 1, 5, 8];

let numeros2Filtrado = numeros2.filter(numero => {
    return numero > 5;
})

// console.log('numeros', numeros2);
// console.log('numeros > 5', numeros2Filtrado);


// //3. Del arreglo siguiente, elegir los elementos que sean divisibles entre 2 -> [12, 2, 1, 5, 8]

let numeros3 = [12, 2, 1, 5, 8]; 

let divisibles2 = numeros3.filter(numero => {
    return numero % 2 === 0;
})

// console.log('original', numeros3);
// console.log('pares', divisibles2);



// //4. A partir del arreglo ['Ana', 'Diego', 'Julio'] crear el siguiente -> ['1. Ana ', '2. Diego', '3. Julio']

let personas = ['Ana', 'Diego', 'Julio'];

let listaPersonas = personas.map((persona, index) => {
    return `${index + 1}. ${persona}`;
})

// console.log('personas', personas);
// console.log('lista', listaPersonas);

// //5. A partir del arreglo filtrar sólo los que sean mayores a 18;
// //[{nombre: 'Karla', edad: 20}, 
//     //{nombre: 'Sonia', edad: 14}, 
//     //{nombre: 'Jesús', edad: 15},
//     // {nombre: 'Miguel', edad: 24},
//     // {nombre: 'Luis', edad: 12}] (editado) 

let info = [
    { nombre: 'Karla', edad: 20 },
    { nombre: 'Sonia', edad: 14 },
    { nombre: 'Jesús', edad: 15 },
    { nombre: 'Miguel', edad: 24 },
    { nombre: 'Luis', edad: 12 }
]

let infoMayores = info.filter(usuario => {
    return usuario.edad > 18;
})

// console.log('info', info);
// console.log('info filtrada', infoMayores);


infoMayores.forEach(elemento => {
    // console.log(elemento);
})

//     6.- A partir del siguiente arreglo de animalitos: 
const animalitos = [
    { nombre: "carlitos", especie: "conejo" },    // 0
    { nombre: "esteban", especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita", especie: "gato" },      // 3
    { nombre: "miranda", especie: "conejo" },    // 4
    { nombre: "lucas", especie: "conejo" },    // 5
    { nombre: "Horacia", especie: "tortuga" }    // 6
];
// //     Genera un nuevo arreglo en el que solo se encuentren
// //     los conejos del arreglo original.

let conejos = animalitos.filter(animalito => {
    return animalito.especie === 'conejo';
})

let tortugas = animalitos.filter(animalito => {
    return animalito.especie === 'tortuga';
})

// console.log('animalitos', animalitos);
// console.log('conejos', conejos);
// console.log('tortugas', tortugas);



// //     7.- A partir del siguiente arreglo de mascotas:
    const mascotas = [
        { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
    ];
// //     Genera un nuevo arreglo que contenga los nombres de todas 
// //     las mascotas.

let nombresMascotas = mascotas.map((mascota) => {
    return mascota.nombre;
});

console.log('mascotas', mascotas);
console.log('nombres', nombresMascotas);
