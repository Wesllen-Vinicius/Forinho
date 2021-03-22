import React from "react";
import "./home.css";
import Header from "../Componentes/Header/index";
import { FaRegCommentAlt } from "react-icons/fa";
import BarraDireita from "../Componentes/BarrasLaterias/BarraDaDireita"
import BarraEsquerda from "../Componentes/BarrasLaterias/BarraDaEsquerda";
import Post from "../Componentes/PostArea/index"
const Home = () => (
  <div class="page">
    <Header />
    <div class="espacoTop"/>
    <BarraDireita />
    <BarraEsquerda />

    <div class="postMenu" >
    <Post />
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-body ">
          <h5 class="card-title">Card</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a>
            <FaRegCommentAlt size="2em" color="blue" />
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
