import React, { useState, useEffect } from 'react';
import '../BarraDaDireita/barraDireita.css';
import firebase from '../../../../config/firebase';
function BarraDireita() {
  return (
    <div className="BarraDireita bg-dark">
      <h1 className="text-center">Tópicos</h1>
      <div className="cardDireita">
        <div className="card-body fundo-card">
          <h5 className="card-title">Titulo</h5>
          <h6 className="card-subtitle mb-2 text-muted">Perigo nas Teclas</h6>
          <p className="card-text">
            
          </p>
          <a
            href="https://br.ccm.net/faq/9841-os-diferentes-tipos-de-programas-maliciosos"
            target="_blank"
            className="card-link"
          >
 
          </a>
          <a href="#" className="card-link">

          </a>
        </div>

        <div className="card-body fundo-card">
          <h5 className="card-title">Spywares</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            
          </h6>
          <p className="card-text">
           
          </p>
          <a
            href="https://br.ccm.net/faq/9841-os-diferentes-tipos-de-programas-maliciosos"
            className="card-link"
          >
        
          </a>
          <a href="#" className="card-link">
           
          </a>
        </div>
      </div>
    </div>
  );
}
export default BarraDireita;
