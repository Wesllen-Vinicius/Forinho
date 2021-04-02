import React, { useCallback, useState } from 'react';
import './cadastro.css';
import { withRouter } from 'react-router';
import firebase from '../Firebase/index';
import { GrTerminal } from 'react-icons/gr';

const Cadastro = ({ history }) => {
  const [PrimeiroNome, setPrimeiroNome] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleSingUp = useCallback(
    async (event) => {
      event.preventDefault();
      const {
        senha,
        email,
        PrimeiroNome,
        username,
      } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, senha.value)
          .then(async (e) => {
            let uid = e.user.uid;
            await firebase.database().ref('ursers').child(uid).set({
              nome: PrimeiroNome.value,
              username: username.value,
              imagemPerfil: '',
            });
          });

        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div class="container">
      <div class="formularioCadastro">
        <form onSubmit={handleSingUp}>
          <h1 class="H1-login">Forinho</h1>
          <div class="icon">
            <GrTerminal size={70} />
          </div>
          <div class="form-floating mb-3 inputLogin">
            <input
              type="text"
              class="form-control"
              name="PrimeiroNome"
              value={PrimeiroNome}
              onChange={(e) => setPrimeiroNome(e.target.value)}
            />
            <label for="floatingInput">Nome</label>
          </div>
          <div class="form-floating mb-3 inputLogin">
            <input
              type="text"
              class="form-control"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="floatingInput">Username</label>
          </div>
    
          <div class="form-floating mb-3 inputLogin">
            <input
              type="email"
              class="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating inputLogin">
            <input
              type="password"
              class="form-control"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label for="floatingPassword">Senha</label>
          </div>

          <div class="col-12">
            <button type="submit" class="btn botao">
              Cadastrar
            </button>
          </div>
          <div class="link">
            <a class="link-text" href="/Login"> Login </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Cadastro);
