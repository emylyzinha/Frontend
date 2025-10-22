import React from "react";

export default function FormButton({ text }) {
  return (
    <button type="submit" className="btn btn-primary w-100">
      {text}
    </button>
  );
}
