import React from "react";
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Cadastro from "./pages/Cadastro/index";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./pages/Auth/auth";
import "./App.css";
const App = () => (
  <AuthProvider>

    <Router>
      <div>

      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
      
    
      </div>
    </Router>
  
  </AuthProvider>
);
export default App;
