import React from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MostrarProducto from "./components/MostrarProducto";
import Header from "./components/Header.tsx";
import LoginRegistro from "./components/LoginRegistro.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OlvidoContrasena from './components/OlvidoContrasena.tsx';
import ReestablecerContrasena from './components/ReestablecerContrasena';
import ContrasenaReestablecida from './components/ContrasenaReestablecida';


function App() {
  return (
    <>
       <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/LoginRegistro" element={<LoginRegistro />} />
          <Route path="/OlvidoContrasena" element={<OlvidoContrasena />} />
          <Route path="/ReestablecerContrasena" element={<ReestablecerContrasena />} />
          <Route path="/ContrasenaReestablecida" element={<ContrasenaReestablecida />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
