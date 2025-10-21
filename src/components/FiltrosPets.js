import React from 'react';
import { Form, Button } from 'react-bootstrap';

function FiltrosPets({ onFiltroChange, onLocalChange, filtros }) {
  return (
    <div className="p-4 rounded-3 text-white" style={{ backgroundColor: '#d97b93', width: '250px' }}>
      <h4 className="fw-bold mb-3">Filtros</h4>

      {/* Localização */}
      <div className="mb-4">
        <Form.Label className="fw-semibold">Localização</Form.Label>
        <Form.Control
          type="text"
          placeholder="Cidade"
          value={filtros.local}
          onChange={(e) => onLocalChange(e.target.value)}
          className="border-0 rounded-2"
        />
      </div>

      {/* Tamanho e Sexo */}
      <div className="d-flex justify-content-between mb-3">
        <div>
          <Form.Label className="fw-semibold">Tamanho</Form.Label>
          <div className="d-flex flex-column gap-2">
            {['Grande', 'Médio', 'Pequeno'].map((t) => (
              <Button
                key={t}
                size="sm"
                variant={filtros.tamanho === t ? 'dark' : 'light'}
                className="text-dark"
                onClick={() => onFiltroChange('tamanho', t)}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Form.Label className="fw-semibold">Sexo</Form.Label>
          <div className="d-flex flex-column gap-2">
            {['Macho', 'Fêmea'].map((s) => (
              <Button
                key={s}
                size="sm"
                variant={filtros.sexo === s ? 'dark' : 'light'}
                className="text-dark"
                onClick={() => onFiltroChange('sexo', s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Idade e Animal */}
      <div className="d-flex justify-content-between">
        <div>
          <Form.Label className="fw-semibold">Idade</Form.Label>
          <div className="d-flex flex-column gap-2">
            {['Sênior', 'Adulto', 'Filhote'].map((i) => (
              <Button
                key={i}
                size="sm"
                variant={filtros.idade === i ? 'dark' : 'light'}
                className="text-dark"
                onClick={() => onFiltroChange('idade', i)}
              >
                {i}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Form.Label className="fw-semibold">Animal</Form.Label>
          <div className="d-flex flex-column gap-2">
            {['Cachorro', 'Gato'].map((a) => (
              <Button
                key={a}
                size="sm"
                variant={filtros.animal === a ? 'dark' : 'light'}
                className="text-dark"
                onClick={() => onFiltroChange('animal', a)}
              >
                {a}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltrosPets;
