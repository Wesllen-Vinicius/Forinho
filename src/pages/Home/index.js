import React from "react";
import "./home.css";
import Header from "../Componentes/Header/index";
import BarraDireita from "../Componentes/BarrasLaterias/BarraDaDireita";
import BarraEsquerda from "../Componentes/BarrasLaterias/BarraDaEsquerda";
import Post from "../PostArea/index"
import  Feed from '../Componentes/Feed'
const Home = () => (
  <div >
    <Header />
    

    <div class="page">
    <BarraEsquerda />
    
    <div class="feed"> 
    
    <Feed/>
   
        

    </div>
    
    <BarraDireita />
    </div>
  </div>
);
export default Home;
