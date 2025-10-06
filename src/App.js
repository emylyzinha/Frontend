import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Adocao from './pages/Adocao';
import Ajudar from './pages/Ajudar';
import AdminLogin from './pages/AdminLogin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adocao" element={<Adocao />} />
        <Route path="/ajudar" element={<Ajudar />} />
        <Route path="/entrar" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
