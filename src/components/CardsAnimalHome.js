import CardAnimal from './CardAnimal';
import './CardsAnimalHome.css';
import { Link } from 'react-router-dom';
import React from 'react';

export default function CardsAnimalHome() {
  return (

    <div className='p-2 mt-4 mb-4'>
        <h2 className='text-dark text-center'>Adote Seu Melhor Amigo</h2>
        <div className='row p-3'>
            <CardAnimal
                id = '1'
                nome="Dama"
                local="Itapema, SC"
                idade="Adulto"
                porte="Grande"
                genero="Fêmea"
                imagem="/img/pet.png"
            />
            <CardAnimal
                id = '2'
                nome="Dama"
                local="Itapema, SC"
                idade="Adulto"
                porte="Grande"
                genero="Fêmea"
                imagem="/img/pet.png"
            />
            <CardAnimal
                id = '3'
                nome="Dama"
                local="Itapema, SC"
                idade="Adulto"
                porte="Grande"
                genero="Fêmea"
                imagem="/img/pet.png"
            />
            <CardAnimal
                id = '4'
                nome="Dama"
                local="Itapema, SC"
                idade="Adulto"
                porte="Grande"
                genero="Fêmea"
                imagem="/img/pet.png"
            />
        </div>

        <Link to="/adocao" className='btn btn-lg botao text-light col-4 offset-4'>Ver mais</Link>
    </div>
    
  );
}
