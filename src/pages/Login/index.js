import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';

import { AuthContext } from '../Auth/auth';
import './login.css';
import { GrTerminal } from 'react-icons/gr';
import firebase from '../Firebase/index';
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div class="container">
      <div class="formulario">
        <form onSubmit={handleLogin}>
          <h1>Forinho</h1>
          <div class="icon">
            <GrTerminal size={70} />
          </div>
          <div class="form-floating mb-3 inputLogin">
            <input type="email" class="form-control" name="email" />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating inputLogin">
            <input type="password" class="form-control" name="password" />
            <label for="floatingPassword">Senha</label>
          </div>

          <button type="submit" class=" botao">
            Login
          </button>
          <div class="link">
            <a href="/Cadastro">Cadastrar-se </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Login);
