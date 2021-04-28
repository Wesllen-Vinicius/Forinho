import React, { useState, useEffect } from 'react';
import './detalheTopico.css';
import firebase from '../../config/firebase';

import { useSelector } from 'react-redux';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';

function DetalheTopico(props) {
  const [topico, setTopico] = useState({});
  const [urlImg, setUrlImg] = useState({});
  const [carregando, setCarregando] = useState(1);

  useEffect(() => {
    firebase
      .firestore()
      .collection('topicos')
      .doc(props.match.params.id)
      .get()
      .then((resultado) => {
        setTopico(resultado.data());
        firebase
          .storage()
          .ref(`imagens/${topico.foto}`)
          .getDownloadURL()
          .then((url) => {
            setUrlImg(url);
            setCarregando(0);
          });
      });
  }, [topico.foto]);
  return (
    <>
      <Header />
      <div className=" container pt-3">
        {carregando ? (
          <div className="row mt-5">
            <div className="  spinner-border text-danger mx-auto" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        ) : (
          <div>
            <div className="row">
              <h1 className="text-center">{topico.titulo}</h1>
              <img src={urlImg} className="img-banner" alt="Banner Topico" />
              <div className=" my-1 bg-dark ">
                <p className="text-justify p-3 text-white texto-topico">
                  {topico.texto}
                </p>
                <div className="text-white">
                  <span>{topico.username}</span>

                  <span>{topico.data}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <dib className="footer-detalhe">
        <Footer />
      </dib>
    </>
  );
}
export default DetalheTopico;
