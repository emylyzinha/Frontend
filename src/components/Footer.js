import './Footer.css';

function Footer() {
  return (
    <footer className="footer text-dark text-center p-3 mt-4">
      <p>© {new Date().getFullYear()} - Projeto Adoção</p>
      <p><b>Itapema</b></p>
      <p>(47) 99999-9999</p>
      <p>CNPJ: 42.880.314/0001-76</p>
    </footer>
  );
}

export default Footer;
