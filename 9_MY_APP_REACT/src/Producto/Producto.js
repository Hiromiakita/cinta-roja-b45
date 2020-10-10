import React from 'react';
import './Producto.css';
import producto from '../assets/images/producto.webp';

function Producto (props) {

    const {nombre, precio} = props;

    return (
        <div className="producto">
            <img className="img-producto" src={producto} alt="producto"/>
            <h2>{nombre}</h2>
            <p>$ {precio}</p>
        </div>
    )
}

export default Producto;