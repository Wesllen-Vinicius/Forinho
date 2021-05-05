import React, { useState, useEffect } from 'react';
import './Home.css';
import firebase from '../../config/firebase';
import ListTopicos from '../Componentes/listTopicos';
import { useSelector } from 'react-redux';
import Footer from '../Componentes/Footer/index';
import Header from '../Componentes/Header';
import BarraDaDireita from '../Componentes/BarrasLaterias/BarraDaDireita/index';

import CardNerdices from '../Componentes/BarrasLaterias/CardNerdices';

function Home() {
  const [topicos, setTopicos] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [carregando, setCarregando] = useState(1);
  const usuarioUsername = useSelector((state) => state.usuarioUsername);
  let listatopico = [];

  useEffect(() => {
    firebase
      .firestore()
      .collection('topicos')
      .orderBy('criacao', 'desc')
      .get()
      .then(async (resultado) => {
        await resultado.docs.forEach((doc) => {
          if (doc.data().titulo.indexOf(pesquisa) >= 0) {
            listatopico.push({
              id: doc.id,
              ...doc.data(),
            });
          }
        });

        setTopicos(listatopico);
        setCarregando(0);
      });
  }, [pesquisa]);

  return (
    <>
      <Header />
      {carregando > 0 ? (
        <div className="d-flex justify-content-center row">
          <div className="  spinner-border text-danger " role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div className="page ">
          <div className="mt-5 col-md-9 col-sm-12 ">
            {topicos.map((item) => (
              <ListTopicos
                key={item.id}
                id={item.id}
                img={item.foto}
                titulo={item.titulo}
                texto={item.texto}
                visualizacoes={item.visualizacao}
                username={item.username}
                tag={item.tag}
              />
            ))}
          </div>

          <div className="pe-5 ">
            <input
              onChange={(e) => setPesquisa(e.target.value)}
              type="text"
              className="form-control text-center mb-2"
              placeholder="Pesquisa"
            />

            <BarraDaDireita />
            <div className="cardNerdices bg-dark">
              <h1 className="text-center">Nerdices</h1>
              <CardNerdices />
            </div>
          </div>
        </div>
      )}
      <div className="footer ">
        <Footer />
      </div>
    </>
  );
}
export default Home;
