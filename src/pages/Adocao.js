import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FiltrosPets from '../components/FiltrosPets';
import CardAnimal from '../components/CardAnimal';
import ComoAjudar from '../components/ComoAjudar';

function Adocao() {
  // 🐶🐱 Lista de pets simulada
  const pets = [
    { id: 1, nome: 'Dama', local: 'Itapema, SC', idade: 'Adulto', porte: 'Grande', genero: 'Fêmea', animal: 'Cachorro', imagem: '/img/pet.png' },
    { id: 2, nome: 'Thor', local: 'Balneário Camboriú, SC', idade: 'Filhote', porte: 'Pequeno', genero: 'Macho', animal: 'Cachorro', imagem: '/img/pet.png' },
    { id: 3, nome: 'Mel', local: 'Itajaí, SC', idade: 'Adulto', porte: 'Médio', genero: 'Fêmea', animal: 'Cachorro', imagem: '/img/pet.png' },
    { id: 4, nome: 'Mimi', local: 'Itapema, SC', idade: 'Sênior', porte: 'Pequeno', genero: 'Fêmea', animal: 'Gato', imagem: '/img/pet.png' },
    { id: 5, nome: 'Bob', local: 'Itajaí, SC', idade: 'Adulto', porte: 'Grande', genero: 'Macho', animal: 'Cachorro', imagem: '/img/pet.png' },
    { id: 6, nome: 'Luna', local: 'Balneário Camboriú, SC', idade: 'Filhote', porte: 'Pequeno', genero: 'Fêmea', animal: 'Gato', imagem: '/img/pet.png' },
  ];

  // 🎛️ Filtros ativos
  const [filtros, setFiltros] = useState({
    local: '',
    tamanho: '',
    sexo: '',
    idade: '',
    animal: '',
  });

  const [petsFiltrados, setPetsFiltrados] = useState(pets);

  // 🔍 Lógica de filtragem
  useEffect(() => {
    let filtrados = pets.filter(pet => {
      return (
        (filtros.local === '' || pet.local.toLowerCase().includes(filtros.local.toLowerCase())) &&
        (filtros.tamanho === '' || pet.porte === filtros.tamanho) &&
        (filtros.sexo === '' || pet.genero === filtros.sexo) &&
        (filtros.idade === '' || pet.idade === filtros.idade) &&
        (filtros.animal === '' || pet.animal === filtros.animal)
      );
    });
    setPetsFiltrados(filtrados);
  }, [filtros]);

  // 🖱️ Clicar num botão de filtro
  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: prev[campo] === valor ? '' : valor, // desmarca se clicar novamente
    }));
  };

  // 📍 Atualizar cidade digitada
  const handleLocalChange = (valor) => {
    setFiltros(prev => ({ ...prev, local: valor }));
  };

  // ❌ Remover tag de filtro ativo
  const handleRemoverFiltro = (campo) => {
    setFiltros(prev => ({ ...prev, [campo]: '' }));
  };

  // 🏷️ Criar lista de filtros ativos para exibir como tags
  const filtrosAtivos = Object.entries(filtros)
    .filter(([_, valor]) => valor !== '')
    .map(([campo, valor]) => ({ campo, valor }));

  return (
    <>
      <Navbar />
      <h2 className="text-center mt-4">Adote seu melhor amigo</h2>

      <div className="d-flex flex-row p-3">
        {/* Filtros laterais */}
        <div className="me-3">
          <FiltrosPets
            filtros={filtros}
            onFiltroChange={handleFiltroChange}
            onLocalChange={handleLocalChange}
          />
        </div>

        {/* Área principal */}
        <div className="flex-grow-1">
          {/* Tags dos filtros ativos */}
          <div className="filtros-aplicados d-flex align-items-center gap-2 flex-wrap mb-3">
            {filtrosAtivos.map(({ campo, valor }) => (
              <span
                key={campo}
                className="badge bg-light text-dark border px-3 py-2 d-flex align-items-center"
              >
                {valor}
                <button
                  className="btn-close btn-sm ms-2"
                  onClick={() => handleRemoverFiltro(campo)}
                  aria-label="Remover filtro"
                  style={{ fontSize: '0.6rem' }}
                ></button>
              </span>
            ))}
          </div>

          {/* Lista de pets */}
          <div className="d-flex flex-wrap gap-4 justify-content-start">
            {petsFiltrados.map((pet) => (
              <CardAnimal key={pet.id} {...pet} />
            ))}
            {petsFiltrados.length === 0 && (
              <p className="text-muted">Nenhum pet encontrado com esses filtros.</p>
            )}
          </div>
        </div>
      </div>

      <ComoAjudar />
    </>
  );
}

export default Adocao;
