import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DetalheAnimal from '../components/DetalheAnimal';

export default function DetalhesAnimal() {
  const location = useLocation();
  const pet = location.state?.pet;

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {pet ? (
          <DetalheAnimal pet={pet} />
        ) : (
          <p className="text-center text-muted">Animal não encontrado.</p>
        )}
      </div>
    </>
  );
}
