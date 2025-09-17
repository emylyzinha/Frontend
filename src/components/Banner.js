// src/components/Banner.js
import './Banner.css';
import React from 'react';

export default function Banner() {
  return (

    <div className="banner" style={{ backgroundImage: 'url(/img/banner_inicial.png)' }}>

      <div className='row p-4'>
        <div className='box-texto-banner col-6 d-flex justify-content-center align-items-center'>
            <h1 className='text-light'>O amor de verdade não se compra, se encontra!</h1>
        </div>
        <button className="btn col-md-4 text-light mt-3 botao-adote-ja">ADOTE JÁ</button>
      </div>
    </div>
  );
}
