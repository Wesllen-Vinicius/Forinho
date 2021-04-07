import React from 'react';
import '../BarraDaDireita/barraDireita.css';
const BarraDireita = () => (
  <div class="BarraDireita bg-dark">
    <h1 class="Nome-Forinho">Tópicos</h1>
    <div class="cardDireita">
      <div class="card-body">
        <h5 class="card-title">Keyloggers</h5>
        <h6 class="card-subtitle mb-2 text-muted">Perigo nas Teclas</h6>
        <p class="card-text">
          Um keylogger é um software que registra as teclas digitadas para
          roubar uma senha, por exemplo.
        </p>
        <a
          href="https://br.ccm.net/faq/9841-os-diferentes-tipos-de-programas-maliciosos"
          target="_blank"
          class="card-link"
        >
          Publicação original
        </a>
        <a href="#" class="card-link">
          Favoritar
        </a>
      </div>

      <div class="card-body">
        <h5 class="card-title">Spywares</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Alguem pode estar te observando, cuidado!
        </h6>
        <p class="card-text">
          Spyware (software espião) é um programa, ou sub-programa, concebido
          para recolher dados pessoais dos seus usuários e enviá-los para o
          criador dele ou outra pessoa, através da Internet ou outra rede de
          computadores, sem qualquer autorização prévia, clara e explícita da
          pessoa.
        </p>
        <a
          href="https://br.ccm.net/faq/9841-os-diferentes-tipos-de-programas-maliciosos"
          class="card-link"
        >
          Link Original
        </a>
        <a href="#" class="card-link">
          Favoritar
        </a>
      </div>
    </div>
  </div>
);
export default BarraDireita;
