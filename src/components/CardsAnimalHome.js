// src/components/Banner.js
import CardAnimal from './CardAnimal';
import './CardsAnimalHome.css';
import React from 'react';

export default function CardsAnimalHome() {
  return (

    <div className='p-3 mt-4 mb-4'>
        <h2 className='text-dark text-center'>Adote Seu Melhor Amigo</h2>
        <div className='row p-3'>
            <CardAnimal
                nome="Dama"
                local="Itapema, SC"
                idade="Adulto"
                porte="Grande"
                genero="Fêmea"
                imagem="/img/pet.png"
            />
            <CardAnimal
                nome="Dama"
                local="Itapema, SC"
                idade="Adulto"
                porte="Grande"
                genero="Fêmea"
                imagem="/img/pet.png"
            />
            <CardAnimal
                nome="Dama"
                local="Itapema, SC"
                idade="Adulto"
                porte="Grande"
                genero="Fêmea"
                imagem="/img/pet.png"
            />
            <CardAnimal
                nome="Dama"
                local="Itapema, SC"
                idade="Adulto"
                porte="Grande"
                genero="Fêmea"
                imagem="/img/pet.png"
            />
        </div>

        <button className='btn btn-lg botao text-light col-8 offset-2'>Ver mais</button>
    </div>
    
  );
}
