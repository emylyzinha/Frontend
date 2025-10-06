import './Footer.css';

function Footer() {
  return (
    <footer className="footer text-dark p-4 mt-4">
      <div className='row'>
        <div className='col-md-8'>
          <p>© {new Date().getFullYear()} - Projeto Adoção</p>
          <p><b>Itapema</b></p>
          <p>(47) 99999-9999</p>
          <p>CNPJ: 42.880.314/0001-76</p>
        </div>
        <div className='col-md-4'>
          <img src='/img/logo_footer.png' className='col-md-4 offset-7' alt="logo"></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
