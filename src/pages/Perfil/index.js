import React from 'react';
import Header from '../Componentes/Header';
import './perfil.css';

function Perfil() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-center mb-5">Perfil</h1>
        <div className="row">
          <div className="col-4">
            <img
              className="avatar-perfil mt-5"
              src="https://i.pinimg.com/736x/77/5e/21/775e21cbe0e92b4ffa4ce09592e54ab5.jpg"
            />
          </div>
          <div className="col-4 mt-5 row">
            <span className="">Username</span>
            <span className="">Name</span>
            <a className="">TT</a>
            <a className="">ISNTAGRAM</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
