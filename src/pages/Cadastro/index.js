import React, { useCallback } from "react";
import "./cadastro.css";
import { withRouter } from "react-router";
import app from "../Firebase/index";
import { GrTerminal } from "react-icons/gr";

const Cadastro = ({ history }) => {
  const handleSingUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div class="container">
      <div class="formulario">
        <form onSubmit={handleSingUp}>
          <h1>Forinho</h1>
          <div class="icon">
            <GrTerminal size={70} />
          </div>
          <div class="form-floating mb-3 inputLogin">
            <input type="email" class="form-control" name="PrimeiroNome" />
            <label for="floatingInput">Nome</label>
          </div>
          <div class="form-floating mb-3 inputLogin">
            <input type="email" class="form-control" name="SobreNome" />
            <label for="floatingInput">Sobrenome</label>
          </div>
          <div class="form-floating mb-3 inputLogin">
            <input type="email" class="form-control" name="email" />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating inputLogin">
            <input type="password" class="form-control" name="password" />
            <label for="floatingPassword">Senha</label>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary botao">
              Cadastrar
            </button>
          </div>
          <div class="link">
            <a href="/Login"> Login </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Cadastro);
