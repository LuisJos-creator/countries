import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Inicio from './pages/Inicio'
import Navbar from './components/Navbar'
import Tablas from './pages/tablas';
import CountryDetail from './pages/countries/[id]';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tablas" element={<Tablas />} />
        <Route path="/countries/:id/:bandera/:alt/:capital/:region/:subregion/:poblacion" element={<CountryDetail />} />
      </Routes>
    </>
  )
}

export default App
