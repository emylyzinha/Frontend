import React from 'react';
import CardVoluntario from './CardVoluntario';
import './ComoAjudar.css';
import CardVPix from './CardPix';
import CardVaquinha from './CardVaquinha';
import CardDoacaoMensal from './CardDoacaoMensal';

export default function ComoAjudar() {
  return (
    <div className='box-como-ajudar mt-4 py-4'>
      <h3 className='text-center mt-4'>Como Ajudar</h3>

      <div className="row justify-content-center mt-4 mb-4">
        <div className="col-md-3 mb-4">
          <CardVoluntario />
        </div>
        <div className="col-md-8 row justify-content-center">
          <div className="col-md-4 mb-4">
          <CardVPix />
          </div>
          <div className="col-md-4 mb-4">
            <CardVaquinha />
          </div>
          <div className="col-md-4 mb-4">
            <CardDoacaoMensal />
          </div>
        </div>
      </div>
    </div>
  );
}
