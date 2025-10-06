import React from 'react';
import './CardPix.css';

export default function CardVPix() {
  return (
    <div className='card-pix py-4 m-4'>
        <div className='box-qr-code col-8 offset-2 text-center'>
            <img src='/img/qr-code-pix.png' className='col-12 img-pix' alt="qr-code pix"></img>
        </div>
        <p className='text-center text-light mt-4 bold-text'>PIX</p>
        <p className='text-center text-light mb-0'>CNPJ 42.880.314/0001-76</p>
        <button className='btn btn-pix mt-4 col-6 offset-3'>Copiar</button>
    </div>
  );
}