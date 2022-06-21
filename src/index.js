import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ingresar from './ingresar';
import EDITAR from './Edit';
import INFOCONTACTO from './InfoContacto';
import INGRESARCONTACTO from './IngresarContacto';
import reportWebVitals from './reportWebVitals';
import EditarINFO from './EditarContacto'
import {

  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<App/>} />
      <Route path="/Ingresar" element={<Ingresar/>} />
      <Route path="/EditarContacto/:id_info" element={<EDITAR/>} />
      <Route path="/InformacionContacto/:id_info/:idIndormacion" element={<INFOCONTACTO/>} />
      <Route path="/Ingresarcontacto" element={<INGRESARCONTACTO/>} />
      <Route path="/EditartInfotmacion/:id_contacto" element={<EditarINFO/>} />

    </Routes>

  </BrowserRouter>

);

reportWebVitals();
