// src/components/Banner.js
import './Banner.css';
import React from 'react';
import { Link } from 'react-router-dom'; // importa o componente de navegação

export default function Banner() {
  return (
    <div
      className="banner"
      style={{ backgroundImage: 'url(/img/banner_inicial.png)' }}
    >
      <div className="row p-4">
        <div className="box-texto-banner col-6 d-flex justify-content-center align-items-center">
          <h1 className="text-light">
            O amor de verdade não se compra, se encontra!
          </h1>
        </div>

        {/* Botão que leva para a página de adoção */}
        <Link to="/adocao" className="btn col-md-4 text-light mt-3 botao-adote-ja">
          ADOTE JÁ
        </Link>
      </div>
    </div>
  );
}
