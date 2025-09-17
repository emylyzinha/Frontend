// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pink">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={'/img/logo.png'} className='logo'/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Início</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adocao">Adoção</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ajudar">Ajudar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entrar">
                <img src={'/img/icone_entrar.png'} className='icone-entrar'/>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entrar">Entrar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
