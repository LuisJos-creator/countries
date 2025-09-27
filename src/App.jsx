import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Inicio from './pages/Inicio'
import Navbar from './components/Navbar'
import Tablas from './pages/tablas';


function App() {

  return (
    <>
    <Navbar/>
    <Inicio/>
      <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/tablas" element={<Tablas />} />

         </Routes>
    </>
  )
}

export default App
