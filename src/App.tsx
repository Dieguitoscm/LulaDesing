import React from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MostrarProducto from "./components/MostrarProducto";
import Header from "./components/Header.tsx";
import LoginRegistro from "./components/LoginRegistro.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
       <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/LoginRegistro" element={<LoginRegistro />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
