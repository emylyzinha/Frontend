import React from 'react';
import './CardVoluntario.css';

export default function CardVoluntario() {
  return (
    <div className='card-voluntario py-4 m-4'>
        <p className='text-center'><b>Seja um voluntário</b></p>
        <img src='/img/pet-voluntarios.png' className='img-pet col-10 offset-1' alt="pet"></img>
        <button className='btn contato-voluntario mt-4 col-8 offset-2'>Entre em Contato</button>
    </div>
  );
}