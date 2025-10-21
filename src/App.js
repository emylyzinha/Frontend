import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Adocao from './pages/Adocao';
import Ajudar from './pages/Ajudar';
import AdminLogin from './pages/AdminLogin';
import DetalhesAnimal from './pages/DetalhesAnimal';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adocao" element={<Adocao />} />
        <Route path="/ajudar" element={<Ajudar />} />
        <Route path="/entrar" element={<AdminLogin />} />
        <Route path="/animal/:id" element={<DetalhesAnimal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
