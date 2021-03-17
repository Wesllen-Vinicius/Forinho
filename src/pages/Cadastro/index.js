import React, { useCallback } from "react";
import "./cadastro.css";
import { withRouter } from "react-router";
import app from "../Firebase/index";


const Cadastro = ({ history }) => {
  const handleSingUp = useCallback(async event => {
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
  }, [history]);  
  
  return (
    <div class="container">
      <form onSubmit={handleSingUp} class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" name="email" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" name="password" />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
          <a href="/Login"> Login </a>
        </div>
      </form>
    </div>
  );
};
export default withRouter(Cadastro);
