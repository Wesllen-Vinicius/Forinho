import React, { useState } from 'react';
import './criarTopico.css';
import firebase from '../../../config/firebase';
import 'firebase/auth';
import { useSelector } from 'react-redux';
import Header from '../Header';

function CriarTopico() {
  const [titulo, setTitulo] = useState('');
  const [carregando, setCarregando] = useState('');
  const [texto, setTexto] = useState('');
  const [foto, setFoto] = useState('');
  const [msgTipo, setMsgTipo] = useState('');

  const usuarioEmail = useSelector((state) => state.usuarioEmail);
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const storage = firebase.storage();
  const db = firebase.firestore();

  function cadastrarTopico() {
    setMsgTipo(null);
    setCarregando(1);
    if (!titulo || !texto) {
      setMsgTipo('erro');
      setCarregando(0);
    } else {
      storage
        .ref(`imagens/${foto.name}`)
        .put(foto)
        .then(() => {
          db.collection('topicos')
            .add({
              titulo: titulo,
              texto: texto,
              username: usuarioEmail,
              foto: foto.name,
              publico: 1,
              visualizacao: 0,
              data: new Date().toLocaleDateString('pt-BR', options),
              criacao: new Date(),
            })
            .then(() => {
              setMsgTipo('sucesso');
              setCarregando(0);
              setTexto('');
              setTitulo('');
            })

            .catch((erro) => {
              setMsgTipo('erro');
              setCarregando(0);
            });
        });
    }
  }

  return (
    <>
      <Header />
      <div className="page-novo-topico  ">
        <div className="text-center mt-3 ">
          <h3>Novo Topico</h3>
        </div>
        <div className="px-5">
          <form className="form-novo-topico bg-dark text-white mx-auto">
            <div className="form-group form-criar-topico mx-auto">
              <label className="my-1">Título:</label>
              <input
                className="form-control bg-dark text-white my-1"
                type="text"
                aria-label="Search"
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo}
              />
            </div>
            <div className="form-group textarea-texto  form-criar-topico mx-auto">
              <label className="my-1">Texto:</label>
              <textarea
                className="form-control bg-dark text-white my-1"
                onChange={(e) => setTexto(e.target.value)}
                value={texto}
              />
            </div>
            <div className="form-group form-criar-topico mx-auto">
              <label className="my-1">Imagem:</label>
              <input
                type="file"
                className="form-control bg-dark text-white my-1"
                accept="image/*"
                onChange={(e) => setFoto(e.target.files[0])}
              />
            </div>

            <div className="msg-login text-black text-center my-3 mx-auto">
              {msgTipo === 'sucesso' && (
                <span>
                  <strong>WoW!</strong>Topico criado!&#128640;
                </span>
              )}
              {msgTipo === 'erro' && (
                <span>Não foi possível criar o topico! &#128546;</span>
              )}
            </div>
            <div className="d-flex justify-content-center row">
              {carregando > 0 ? (
                <div className="  spinner-border text-danger " role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                <div className="btn-cadastro-topico mt-3 ">
                  <button
                    type="button"
                    onClick={cadastrarTopico}
                    className="btn btn-lg btn-block  mt-2 mb-3 "
                  >
                    Cadastrar Topico
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default CriarTopico;
