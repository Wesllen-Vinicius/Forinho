import React, {useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../Firebase/index";
import { AuthContext } from "../Auth/auth";
import "./login.css";
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");               
      } catch (error){
        alert(error);
      }
    },
    [history]
  );
  
  const { currentUser } = useContext(AuthContext);
  
  if (currentUser) {
    return <Redirect to="/" />
  }
  
  return (
    <div class="container">
      <div class="titulo">
        <h1>Forinho</h1>
      </div>
      <div class="formulario">
        <form onSubmit={handleLogin}>
          <div class="mb-3 input">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3 input">
            <label for="exampleInputPassword1" class="form-label">
              Senha
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Mantenha-me Conectado
            </label>
            <a href="/Cadastro"> Cadastro </a>
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Login);
