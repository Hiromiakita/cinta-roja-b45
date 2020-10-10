import React from 'react';
import './Usuario.css';
import perfil from '../assets/images/perfil.png';

function Usuario (props) {

    const { nombre, correo } = props;

    return (
        <div className="usuario">
            <img className="perfil" src={perfil} alt="perfil"/>
            <p>{nombre}</p>
            <p>{correo}</p>
            <button>Editar</button>
        </div>
    )
}

export default Usuario;