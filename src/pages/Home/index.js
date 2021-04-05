import React from 'react';
import './home.css';
import Header from '../Componentes/Header/index';
import BarraDireita from '../Componentes/BarrasLaterias/BarraDaDireita';
import BarraEsquerda from '../Componentes/BarrasLaterias/BarraDaEsquerda';
import Feed from '../Componentes/Feed';
const Home = () => (
  <div>
    <Header />

    <div class="page container-sm">
      <BarraEsquerda />

      <div>
        <Feed />
      </div>

      <BarraDireita />
    </div>
  </div>
);
export default Home;
