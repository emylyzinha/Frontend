import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRadio from "./FormRadio";
import FormTextarea from "./FormTextarea";
import FormCheckbox from "./FormCheckbox";
import FormButton from "./FormButton";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormPage() {
  const location = useLocation();
  const pet = location.state?.pet;

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    tipoMoradia: "",
    espacoSeguro: "",
    experiencia: "",
    motivacao: "",
    concordo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // aqui você pode integrar com API ou backend
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="mb-4 text-center">Formulário de Adoção</h2>

        {/* Mostrar o pet selecionado */}
        {pet ? (
          <div className="mb-4 text-center">
            <h5>Você está adotando: {pet.nome}</h5>
            <img src={pet.imagem} alt={pet.nome} style={{ maxWidth: '200px' }} />
          </div>
        ) : (
          <p className="text-muted text-center">Nenhum animal selecionado.</p>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Nome Completo"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
          />
          <FormInput
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seuemail@exemplo.com"
          />
          <FormInput
            label="Telefone / WhatsApp"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(99) 99999-9999"
          />
          <FormInput
            label="Endereço Completo"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            placeholder="Rua, número, bairro, cidade - UF"
          />
          <FormSelect
            label="Tipo de moradia"
            name="tipoMoradia"
            value={formData.tipoMoradia}
            onChange={handleChange}
            options={["Casa", "Apartamento", "Outro"]}
          />
          <FormRadio
            label="Sua casa tem um espaço externo seguro?"
            name="espacoSeguro"
            value={formData.espacoSeguro}
            onChange={handleChange}
            options={["Sim", "Não"]}
          />
          <FormTextarea
            label="Descreva sua experiência com animais de estimação"
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
            placeholder="Já teve pets antes? Quais? Por quanto tempo? O que aconteceu com eles?"
          />
          <FormTextarea
            label="Por que você quer adotar um animal?"
            name="motivacao"
            value={formData.motivacao}
            onChange={handleChange}
            placeholder="O que te motiva a adotar? Como é a sua rotina e como o pet se encaixaria nela?"
          />
          <FormCheckbox
            label="Declaro que as informações são verdadeiras e concordo com uma visita de avaliação..."
            name="concordo"
            checked={formData.concordo}
            onChange={handleChange}
          />
          <FormButton text="Enviar Solicitação" />
        </form>
      </div>
    </>
  );
}
