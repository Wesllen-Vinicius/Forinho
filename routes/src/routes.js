import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cadastro from "./pages/Cadastro/index";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import NotFound from "./pages/NotFound";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
