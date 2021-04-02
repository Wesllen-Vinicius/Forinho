import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Cadastro from "./pages/Cadastro/index";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import { AuthProvider } from "./pages/Auth/auth";
import "./App.css";
const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
    </BrowserRouter>
  </AuthProvider>
);
export default App;
