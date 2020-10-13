import React, { useEffect, useState } from 'react';
import GifCard from '../componentes/GifCard';
import Navbar from '../componentes/Navbar'
import Search from '../componentes/Search';
import axios from 'axios';

//HOOKS -> 
//useState -> Iniciailizar el estado de nuestros componentes variables y métodos 
//                que nos permiten cambiar al valor

//useEffect

const Main = () => {

    // const [nombreVariable, setNombreVariable] = useState(ValorDeInicio);
    const [gifs, setGifs] = useState([]);
   

    // estamos represntando -> const suma = 0;
    // const [suma, setSuma] = useState(0);

    //función que hará la petición de los gifs
    const getGifs = () => {
        const URL = 'https://api.giphy.com/v1/gifs/search?api_key=CZ0It6OAUoHvDV2cnetQR1ga0HkB43E4&q=gatito&limit=5';

        axios.get(URL).then(respuesta => {
            console.log(respuesta.data.data);
            setGifs(respuesta.data.data);
        }).catch(error => {
            console.log(error);
        })
    }

    //Nos va a ayudar a controlar el rendirazdo de nuestro componente
    useEffect( () => {
       //peticiones 
       getGifs();
    }, [] )


    return (
        <div>
            <Navbar/>
            <div className="container mt-5">
                <Search/> 
                {/* Abrimos llaves para poner código javaScript */}
                
                {
                    gifs.map(gif  => {
                        return (
                            <GifCard 
                            imagen={gif.images.downsized_medium.url} 
                            titulo = {gif.title}
                            descripcion="Aquí va la descripción"
                            link={gif.url}
                            key={gif.id}
                            />
                        )
                    })
                }

                {/* <GifCard 
                imagen="https://media3.giphy.com/media/KpLPyE3D6HJPa/giphy.gif?cid=83673ba23lk3gmjkdy0si9nhyetwxe5modis5ivtvcswe476&rid=giphy.gif"
                titulo="mcdonalds GIF"
                descripcion="Aquí va la descripción"
                link="https://giphy.com/gifs/mcdonalds-food-cheeseburger-KpLPyE3D6HJPa"
                /> */}
            </div>   
        </div>
    )
}

export default Main
