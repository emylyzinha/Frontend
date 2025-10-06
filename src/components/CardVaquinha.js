import React from 'react';
import './CardVaquinha.css';

export default function CardVaquinha() {
  return (
    <div className='card-vaquinha py-4 m-4'>
        <div className='box-vaquinha col-8 offset-2 text-center'>
            <img src='/img/vakinha.jpeg' className='col-12 img-vaquinha' alt="logo vaquinha"></img>
        </div>
        <p className='text-center text-light mt-4 bold-text'>Vakinha Online</p>
        <p></p>
        <button className='btn btn-vaquinha mt-4 col-6 offset-3'>Saiba mais</button>
    </div>
  );
}