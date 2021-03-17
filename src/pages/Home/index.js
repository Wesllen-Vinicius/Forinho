import React from "react";
import "./home.css"
import app from "../Firebase/index"
import { BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsTerminal } from "react-icons/bs";
const Home = () => 
<div> 
<nav class="navbar sticky-top  navbar-expand-lg navbar-light bg-light divBar">
  <div class="container-fluid  divBar">
    <a class="navbar-brand logo" href="#"><BsTerminal size="50px"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ulNav" id="navbarSupportedContent">
      <form class="d-flex">
        <input class="form-control me-2 busca" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success btBuscar" type="submit">Buscar</button>
        </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <AiOutlineUser size={30}/>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Conta</a></li>
            <li><a class="dropdown-item" href="#">Configurações</a></li>
            <li><a class="dropdown-item"  onClick={() => app.auth().signOut()}><BiLogOut /> Sair</a></li>
            </ul>
                </li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/Login">Login</a></li>
      </ul>
        
            </div>
        </div>
            </nav>













<div class="cards">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>
export default Home;
