//CALLBACK -> UNA FUNCIÓN QUE SE PASA COMO ARGUMENTO DE OTRA FUNCIÓN

//FUNCIÓN INICIAL O SUPERIOR
let mostrarDosMensajes = (funcion1, funcion2) => {
    funcion1();
    funcion2(); 
};

//FUNCIÓN CALLBACK
let yoSoyelCallback = () => {
    console.log('soy el callback');
}

//OTRA FUNCIÓN CALLBACK
let callback2 = () => {
    console.log('mensaje desde el callback 2');
}

//MANDAR LLAMAR LA FUNCIÓN INICIAL
// mostrarDosMensajes(yoSoyelCallback, callback2);

//FUNCIÓN INICIAL O SUPERIOR
let saludarUsuario = (nombreUsuario, funcion) => {
    funcion(nombreUsuario);
};

//FUNCIÓN callback
let callback = (nombreUsuario) => {
    console.log(`Bienvenide, ${nombreUsuario}`);
}

saludarUsuario('Ana', callback);
saludarUsuario('Alejandro', callback);
saludarUsuario('Erika', callback);

//FUNCIÓN INICIAL o SUPERIOR
let registrarUsuario = (nombre, edad, funcion) => {
    funcion(nombre, edad)
}

//Función callback
let registroExitoso = (nombre, edad) => {
    console.log(`¡Registro exitoso! nombre: ${nombre} edad: ${edad}`);
}

let nombre = 'Hugo';

registrarUsuario(nombre, 20, (nombre, edad) => {
    console.log(`¡Registro exitoso! nombre: ${nombre} edad: ${edad}`);
});