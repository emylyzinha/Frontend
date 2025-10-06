import React from 'react';
import './CardAnimal.css';

export default function CardAnimal({ nome, local, idade, porte, genero, imagem }) {
  return (
    <div className="pet-card">
      <div className="pet-image">
        <img src={imagem} alt={`Foto de ${nome}`} />
      </div>
      <div className="pet-info">
        <h3>{nome}</h3>
        <p className="local">
          <img src={'/img/icone_local.png'} className="icone-local" alt="Ícone de localização" />
          {local}
        </p>
        <div className="tags">
          <span className="tag">{idade}</span>
          <span className="tag">{porte}</span>
          <span className="tag">{genero}</span>
        </div>
        <button className="btn adotar">QUERO ADOTAR</button>
        <button className="btn detalhes">VER DETALHES</button>
      </div>
    </div>
  );
}
