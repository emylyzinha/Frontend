import React from "react";

export default function FormTextarea({ label, name, value, onChange, placeholder }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <textarea
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="4"
      ></textarea>
    </div>
  );
}
