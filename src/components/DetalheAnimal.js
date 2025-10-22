import React from 'react';
import './DetalheAnimal.css';

export default function DetalheAnimal({ pet, onAdotar }) {
  if (!pet) return null;

  return (
    <div className="detalhes-animal-container">
      <div className="detalhes-animal-card">
        <div className="imagem-animal">
          <img src={pet.imagem} alt={`Foto de ${pet.nome}`} />
        </div>
        <div className="info-animal">
          <h2>{pet.nome}</h2>
          <p className="local">
            <img src="/img/icone_local.png" alt="Ícone de localização" className="icone-local" />
            {pet.local}
          </p>

          <div className="tags">
            <span className="tag">{pet.idade}</span>
            <span className="tag">{pet.porte}</span>
            <span className="tag">{pet.genero}</span>
          </div>

          <p className="descricao">{pet.descricaoCurta}</p>
          <p className="descricao">Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).</p>

          {/* Se quiser incluir botão de adotar */}
          <button className="btn-adotar" onClick={onAdotar}>QUERO ADOTAR</button> 
        </div>
      </div>
    </div>
  );
}
