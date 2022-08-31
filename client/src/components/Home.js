import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>INICIO</h2>
      <div className="container-form">
        <div className="container-form-home">
          <Link to={"/addclient"}>
            {' '}
            <p>Agregar nuevo cliente</p>
          </Link>
        </div>

        <div className="container-form-home">
          <Link to={"/clients"}>
            {' '}
            <p>Ver listado de clientes</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
