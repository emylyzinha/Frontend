import React from "react";

export default function FormRadio({ label, name, value, onChange, options }) {
  return (
    <div className="mb-3">
      <label className="form-label d-block">{label}</label>
      {options.map((opt, i) => (
        <div className="form-check form-check-inline" key={i}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={onChange}
          />
          <label className="form-check-label">{opt}</label>
        </div>
      ))}
    </div>
  );
}
