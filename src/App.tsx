import React from 'react';
import "./App.css";
import Header from "./components/Header.tsx";
import LoginRegistro from "./components/LoginRegistro.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OlvidoContrasena from './components/OlvidoContrasena.tsx';
import ReestablecerContrasena from './components/ReestablecerContrasena.tsx';
import ContrasenaReestablecida from './components/ContrasenaReestablecida.tsx';
import ComprarProducto from './components/ImagenProductoCompra';
import VerificarCorreo from './components/VerificarCorreoComprar.tsx';
import ComprarProductoRegistro from './components/ComprarProductoRegistro.tsx';
import ComprarProductoUbicacion from './components/ComprarProductoUbicacion.tsx';
import PagoExitoso from './components/PagoExitoso.tsx';
import ComprarProductoUsuarioRegistrado from './components/ComprarProductoUsuarioRegistrado.tsx';

const productos = [
  {
    imagen: 'Snupy.png', // Nombre del archivo de imagen en la carpeta public/img
    nombre: 'Producto 1',
    cantidad: 2,
    precio: 50000,
    tamano: '20cm'
  },
  {
    imagen: 'Naturo.png', // Nombre del archivo de imagen en la carpeta public/img
    nombre: 'Producto 2',
    cantidad: 1,
    precio: 150000,
    tamano: '30cm'
  },
];

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/LoginRegistro" element={<LoginRegistro />} />
          <Route path="/OlvidoContrasena" element={<OlvidoContrasena />} />
          <Route path="/ReestablecerContrasena" element={<ReestablecerContrasena />} />
          <Route path="/ContrasenaReestablecida" element={<ContrasenaReestablecida />} />
          <Route path="/ComprarProducto" element={<ComprarProducto productos={productos} />} />
          <Route path="/VerificarCorreoComprar" element={<VerificarCorreo />} />
          <Route path="/ComprarProductoRegistro" element={<ComprarProductoRegistro />} />
          <Route path="/ComprarProductoUbicacion" element={<ComprarProductoUbicacion productos={productos} />} />
          <Route path="/PagoExitoso" element={<PagoExitoso />} />
          <Route path="/ComprarProductoUsuarioRegistrado" element={<ComprarProductoUsuarioRegistrado productos={productos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
