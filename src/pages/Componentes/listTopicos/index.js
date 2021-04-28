import React, { useState, useEffect } from 'react';
import './listTopicos.css';
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import firebase from '../../../config/firebase';

function ListTopicos({ id, img, titulo, texto, visualizacoes, username, tag }) {
  const [urlImagem, setUrlImagem] = useState();
  useEffect(() => {
    firebase
      .storage()
      .ref(`imagens/${img}`)
      .getDownloadURL()
      .then((url) => setUrlImagem(url));
  }, [urlImagem]);
  return (
    <div className="col-md-7 col-sm-12 card-topico mx-auto bg-dark p-3 text-white">
      <img
        id="banner-topico"
        src={urlImagem}
        className="card-img-top img-cartao"
        alt="Imagem topico"
      />
      <div className="card-body teste">
        <div>
          <div className="d-flex align-items-center ">
            <img
              src="data:image/jpeg;base64,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"
              className="avatar"
            />
            <span className="username text-right">
              <strong>{username}</strong>
            </span>
          </div>

          <div className="tags mt-3 ">
            <span>#{tag}</span>
          </div>

          <hr />
          <h1 className="pt-2">{titulo}</h1>
          <p className="card-text text-justify text-truncate">{texto}</p>

          <div className="row rodape-card d-flex align-items-center ">
            <div className="col-6 mb-2">
              <Link
                to={'/detalheTopico/' + id}
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
      </div>
    </div>
  );
}

export default ListTopicos;
