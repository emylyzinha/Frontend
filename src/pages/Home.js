// src/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import CardsAnimalHome from '../components/CardsAnimalHome';

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <CardsAnimalHome />
    </>
  );
}
