import React from "react";

export default function FormSelect({ label, name, value, onChange, options }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select className="form-select" name={name} value={value} onChange={onChange}>
        <option value="">Selecione uma opção</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
