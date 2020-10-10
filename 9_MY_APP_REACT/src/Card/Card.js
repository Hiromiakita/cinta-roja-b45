import React from 'react';
import './Card.css';

function Card (props) {

    //Desctruturar objetos

    let { titulo, img, descripcion, id } = props;

    // let {titulo} = props;
    // let {img} = props;
    // let {descripcion} = props;

    return (
        <div className="card">
            <img src={img} alt="" />
            <p>{id}</p>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    )
}

export default Card;