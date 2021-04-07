import React from 'react';
import './home.css';
import Header from '../Componentes/Header/index';
import BarraDireita from '../Componentes/BarrasLaterias/BarraDaDireita';
import BarraEsquerda from '../Componentes/BarrasLaterias/BarraDaEsquerda';
import Feed from '../Componentes/Feed';
import Footer from '../Componentes/Footer';
import CardeNerdices from '../Componentes/BarrasLaterias/CardNerdices';
const Home = () => (
  <div>
    <Header />

    <div class="page container-sm">
      <div>
        <Feed />
      </div>

      <BarraDireita />
      <CardeNerdices />
    </div>

    <div class="footer bg-dark">
      <Footer />
    </div>
  </div>
);
export default Home;
