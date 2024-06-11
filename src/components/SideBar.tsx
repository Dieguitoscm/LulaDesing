import React from "react";
import "../assets/styles/SideBar.css"; 
import clienteIcon from "../../public/img/iconos/cliente-icon.png";
import verClienteIcon from "../../public/img/iconos/verClienteAdmin-icon.png";
import adminIcon from "../../public/img/iconos/admin-icon.png";
import verIcon from '../../public/img/iconos/ver-icon.png';
import crearProductoIcon from '../../public/img/iconos//crearProducto-icon.png';
import crearCategoriaIcon from '../../public/img/iconos/crearCategoria-icon.png';
import crearModelo from '../../public/img/iconos/crearModelo-icon.png';
import ofertasIcon from '../../public/img/iconos/ofertas-icon.png';
import crearOfertaIcon from '../../public/img/iconos/crearOferta-icon.png';
import estadisticaLogisticaIcon from '../../public/img/iconos/estadisticaLogistica-icon.png';
import entregasIcon from '../../public/img/iconos/entregas-icon.png';
import devolucionIcon from '../../public/img/iconos/devoluciones-icon.png';
import inventarioIcon from "../../public/img/iconos/inventario-icon.png";


const SideBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
          <div className="mt-3">
            <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parent">
              <li className="nav-item my-1">
                <a
                  href="#subMenuClientes"
                  className="nav-link text-black collapsed"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <img src={clienteIcon} alt="Dashboard" className="icon" />
                  <span className="ms-2 d-none d-sm-inline">Clientes</span>
                  <i className="bi bi-arrow-up-short text-end"></i>
                </a>
                <ul
                  className="nav collapse ms-2 flex-column"
                  id="subMenuClientes"
                >
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" aria-current="page">
                      <img src={verClienteIcon} alt="clientes Item 1" className="icon" />
                      Ver clientes
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item my-1">
                <a
                  href="#subMenuAdmin"
                  className="nav-link text-black collapsed"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <img src={adminIcon} alt="admin" className="icon" />
                  <span className="ms-2 d-none d-sm-inline">Administradores</span>
                  <i className="bi bi-arrow-up-short text-end"></i>
                </a>
                <ul
                  className="nav collapse ms-2 flex-column"
                  id="subMenuAdmin"
                >
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" aria-current="page">
                      <img src={verClienteIcon} alt="admin Item 1" className="icon" />
                      Crear administrador
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      <img src={verIcon} alt="admin Item 2" className="icon" />
                      Ver administradores
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item my-1">
                <a
                  href="#subMenuInventario"
                  className="nav-link text-black collapsed"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <img src={inventarioIcon} alt="House Item 1" className="icon" />
                  <span className="ms-2 d-none d-sm-inline">Inventario</span>
                  <i className="bi bi-arrow-up-short text-end"></i>
                </a>
                <ul
                  className="nav collapse ms-2 flex-column"
                  id="subMenuInventario"
                >
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" aria-current="page">
                      <img src={crearProductoIcon} alt="inventario Item 1" className="icon" />
                      Crear producto
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      <img src={verIcon} alt="inventario Item 2" className="icon" />
                      Ver productos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      <img src={crearCategoriaIcon} alt="inventario Item 3" className="icon" />
                      Crear categoría
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      <img src={verIcon} alt="inventario Item 4" className="icon" />
                      Ver categorías
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      <img src={crearModelo} alt="inventario Item 5" className="icon" />
                      Crear modelo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      <img src={verIcon} alt="inventario Item 6" className="icon" />
                      Ver modelos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item my-1">
                <a
                  href="#subMenuOfertas"
                  className="nav-link text-black collapsed"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <img src={ofertasIcon} alt="Customers Item 1" className="icon" />
                  <span className="ms-2 d-none d-sm-inline">Ofertas</span>
                  <i className="bi bi-arrow-up-short text-end"></i>
                </a>
                <ul
                  className="nav collapse ms-2 flex-column"
                  id="subMenuOfertas"
                >
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" aria-current="page">
                      <img src={crearOfertaIcon} alt="ofertas Item 1" className="icon" />
                      Crear oferta
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      <img src={verIcon} alt="oferta Item 2" className="icon" />
                      Ver ofertas
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item my-1">
                <a
                  href="#subMenuEstadisticas"
                  className="nav-link text-black collapsed"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <img src={estadisticaLogisticaIcon} alt="Reports Item 1" className="icon" />
                  <span className="ms-2 d-none d-sm-inline">Estadísticas</span>
                  <i className="bi bi-arrow-up-short text-end"></i>
                </a>
                <ul
                  className="nav collapse ms-2 flex-column"
                  id="subMenuEstadisticas"
                >
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" aria-current="page">
                      <img src={verIcon} alt="estadisticas Item 1" className="icon" />
                      Ver estadísticas
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item my-1">
                <a
                  href="#subMenuLogistica"
                  className="nav-link text-black collapsed"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <img src={estadisticaLogisticaIcon} alt="logisitca Item 1" className="icon" />
                  <span className="ms-2 d-none d-sm-inline">Logística</span>
                  <i className="bi bi-arrow-up-short text-end"></i>
                </a>
                <ul
                  className="nav collapse ms-2 flex-column"
                  id="subMenuLogistica"
                >
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" aria-current="page">
                      <img src={entregasIcon} alt="Settings Item 1" className="icon" />
                      Entregas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#">
                      <img src={devolucionIcon} alt="Settings Item 2" className="icon" />
                      Devoluciones
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
