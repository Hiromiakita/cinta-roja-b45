const request = require('request');

// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/

let obtenerPokemon = (id) => {
    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

    request(`${URL_BASE}${id}`, (err, res, body) => {
        if(res.statusCode === 200) {
            const infoPokemon = JSON.parse(body);
            const tipos = infoPokemon.types;
            const tiposNombres = tipos.map(tipo => tipo.type.name );
            console.log(tiposNombres);
        } else {
            console.log('ERROR, status code: ', res.statusCode);
        }
    })
}

obtenerPokemon(1);


// 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro("i robot");
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 
// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov
// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse
// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//                     https://swapi.co/
// 6.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/
// 7.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.
//                       https://pokeapi.co/