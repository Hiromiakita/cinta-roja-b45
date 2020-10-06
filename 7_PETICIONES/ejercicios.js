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

obtenerPokemon(8);


// 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro("i robot");
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 

let traerAutor = (nombreLibro) => {

    const URL_BASE = 'http://openlibrary.org/search.json?q=';

    request(`${URL_BASE}${nombreLibro}`, (error, respuesta, body) => {
        if(respuesta.statusCode === 200) {
            let resultados = JSON.parse(body);
            console.log('Autores resultado 1', resultados.docs[0].author_name);
        } else {
            console.log('No se encontraron resultados');
        }
    })

}


// traerAutor('El principito');
// traerAutor('i robot');
// traerAutor('don quijote');
// traerAutor('la biblia');

// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov

let traerLibros = (autor) => {

    const URL_BASE = 'http://openlibrary.org/search.json?author=';

    request(`${URL_BASE}${autor}`, (error, respuesta, body) => {
        let resultados = JSON.parse(body);
        let nombresLibros = resultados.docs.map(libro => {
            return libro.title;
        })

        console.log('nombres libros',nombresLibros);
    })
}

traerLibros('asimov');

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