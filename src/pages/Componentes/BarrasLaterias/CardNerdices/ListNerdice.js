import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../../config/firebase';
import { BsEyeFill } from 'react-icons/bs';
import './cardNerdices.css';

function ListNerdice({ id, titulo, texto, visualizacoes, username, tag }) {
  return (
    <div className="card-body fundo-card">
      <h5 className="card-title">{titulo}</h5>

      <p className="card-text text-truncate">{texto}</p>
      <div className="row rodape-card d-flex align-items-center ">
        <div className="col-6 mb-2">
          <Link
            to={'/detalheNerdice/' + id}
            className="btn btn-sm btn-detalhes"
          >
            + detalhes
          </Link>
        </div>

        <div className="col-6 vizualizacao">
          <span className="p-2"> {visualizacoes}</span>
          <BsEyeFill size={25} />
        </div>
      </div>
    </div>
  );
}

export default ListNerdice;
