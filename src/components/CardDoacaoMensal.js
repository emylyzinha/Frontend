import React from 'react';
import './CardDoacaoMensal.css';

export default function CardDoacaoMensal() {
  return (
    <div className='card-doacao-mensal py-4 m-4'>
        <div className='box-doacao-mensal col-8 offset-2 text-center'>
            <img src='/img/logo-whatsapp-doacao.png' className='col-12 img-vaquinha' alt="logo whatsapp"></img>
        </div>
        <p className='text-center text-light mt-4 bold-text'>Doação Mensal</p>
        <p></p>
        <button className='btn btn-doacao-mensal mt-4 col-6 offset-3'>Participe</button>
    </div>
  );
}