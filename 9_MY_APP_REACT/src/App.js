import React from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';
import Card from './Card/Card';
import Usuario from './Usuario/Usuario';
import Producto from './Producto/Producto';

import gatito from './assets/images/gatito.jpg';
import gatito2 from './assets/images/gatito2.jpg';
import gatito3 from './assets/images/gatito3.jpg';

function App() {

  let productos = [
    {
      nombreProducto: 'galletas',
      precio: 15
    },
    {
      nombreProducto: 'papitas',
      precio: 20
    },
    {
      nombreProducto: 'jugo',
      precio: 12
    },
    {
      nombreProducto: 'loquesea',
      precio: 12
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {
          productos.map(producto => {
            return (
              <Producto nombre={producto.nombreProducto} precio={producto.precio} key={producto.nombreProducto}/>
            )
          })
        }



        <div className="usuarios">
          <Usuario nombre="Hiromi" correo="h@h.com"/>
          <Usuario nombre="Julio" correo="j@j.com"/>
          <Usuario nombre="Diego" correo="d@d.com"/>
        </div>

        <div className="usuarios">
          <Usuario nombre="Antonio" correo="a@a.com"/>
          <Usuario nombre="Ricardo" correo="r@r.com"/>
          <Usuario nombre="Diana" correo="d@d.com"/>
        </div>

        <Card titulo=":)" descripcion="Soy la descripción 1" img={gatito} id="1"/>
        <Card titulo=":|" descripcion="Soy la descripción 2" img={gatito2} id="2"/>
        <Card titulo=":(" descripcion="Soy la descripción 3" img={gatito3} id="3"/>
      </header>
    </div>
  );
}

export default App;
