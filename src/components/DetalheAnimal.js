
import { useParams } from 'react-router-dom';
import './DetalheAnimal.css';

export default function DetalheAnimal() {
  const { id } = useParams();
  const animais = [
    {
      id: 1,
      nome: 'Dama',
      local: 'Itapema, SC',
      idade: 'Adulto',
      porte: 'Grande',
      genero: 'Fêmea',
      imagem: '/img/pet.png',
      descricaoCurta:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus rhoncus pulvinar.',
      descricaoLonga:
        'Cras fringilla auctor ante, quis egestas erat fermentum nec. Suspendisse ornare, velit vitae varius porttitor, sem risus ultrices ligula, dictum laoreet ipsum odio ac nisl.',
    },
  ];

  const animal = animais.find((a) => a.id === parseInt(id));

  if (animal) return <p>Animal não encontrado.</p>;

  return (
    <div className="detalhes-animal-container">
      <div className="detalhes-animal-card">
        <div className="imagem-animal">
          <img src={animal.imagem} alt={`Foto de ${animal.nome}`} />
        </div>
        <div className="info-animal">
          <h2>{animal.nome}</h2>
          <p className="local">
            <img src="/img/icone_local.png" alt="Ícone de localização" className="icone-local" />
            {animal.local}
          </p>

          <div className="tags">
            <span className="tag">{animal.idade}</span>
            <span className="tag">{animal.porte}</span>
            <span className="tag">{animal.genero}</span>
          </div>

          <p className="descricao">{animal.descricaoCurta}</p>
          <p className="descricao">{animal.descricaoLonga}</p>

          <button className="btn-adotar">QUERO ADOTAR</button>
        </div>
      </div>
    </div>
  );
}
