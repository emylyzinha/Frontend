import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DetalheAnimal from '../components/DetalheAnimal';
import CardsAnimalHome from '../components/CardsAnimalHome';

export default function DetalhesAnimal() {
  const location = useLocation();
  const navigate = useNavigate();
  const pet = location.state?.pet;

  // Função para redirecionar ao formulário com os dados do pet
  const handleAdotar = () => {
    if (pet) {
      navigate('/formulario', { state: { pet } }); // enviando o pet inteiro
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {pet ? (
          <DetalheAnimal pet={pet} onAdotar={handleAdotar} />
        ) : (
          <p className="text-center text-muted">Animal não encontrado.</p>
        )}
      </div>
      <div className='bg-light'>
        
      </div>
      <div className='bg-light'>
        <CardsAnimalHome/>
      </div>
    </>
  );
}
