import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardAnimal.css';

export default function CardAnimal({ id, nome, local, idade, porte, genero, imagem }) {
  const navigate = useNavigate();

  const handleVerDetalhes = () => {
    navigate(`/animal/${id}`, { state: { pet: { id, nome, local, idade, porte, genero, imagem } } });
  };
  
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
        <button className="btn detalhes" onClick={handleVerDetalhes}>VER DETALHES</button>
      </div>
    </div>
  );
}
