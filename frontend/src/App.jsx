import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './components/Modal';
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import CreacionUsuarios from './CreacionUsuarios';
import CreacionEspecialistas from './CreacionEspecialistas';


function App() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [citaList, setCitaList] = useState([]);
  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState({
    nombre_paciente: "",
    especialista_primario: "",
    especialista_secundario: "",
    descripcion: "",
    fecha_hora: "",
    estado: "programada",
  });

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    axios.get('http://18.208.217.24:8000/api/citas/')
      .then((res) => setCitaList(res.data))
      .catch((err) => console.error('Error al cargar citas:', err));
  };

  const toggle = () => {
    setModal(!modal);
  };

  const handleSubmit = (item) => {
    toggle();
    const apiUrl = item.id ? `http://18.208.217.24:8000/api/citas/${item.id}/` : 'http://18.208.217.24:8000/api/citas/';
    const method = item.id ? 'put' : 'post';

    axios[method](apiUrl, item)
      .then((res) => refreshList())
      .catch((err) => console.error('Error al guardar cita:', err));
  };

  const createItem = () => {
    setActiveItem({
      nombre_paciente: "",
      especialista_primario: "",
      especialista_secundario: "",
      descripcion: "",
      fecha_hora: "",
      estado: "programada",
    });
    setModal(true);
  };

  const renderItems = () => {
    return citaList.map((item) => (
      <div key={item.id} className="mb-4 p-2 border rounded">
        <div><strong>Paciente:</strong> {item.nombre_paciente}</div>
        <div><strong>Especialista Principal:</strong> {item.especialista_primario}</div>
        <div><strong>Especialista Secundario:</strong> {item.especialista_secundario}</div>
        <div><strong>Descripción:</strong> {item.descripcion}</div>
        <div><strong>Fecha:</strong> {item.fecha_hora}</div>
        <div><strong>Estado de Cita:</strong> {item.estado}</div>
        <button onClick={() => { setActiveItem(item); toggle(); }}>Edit</button>
        <button onClick={() => axios.delete(`http://18.208.217.24:8000/api/citas/${item.id}/`).then(refreshList)}>Delete</button>
      </div>
    ));
  };

  function HomePage() {
    // Todo tu código existente aquí...
    return (
      <div className="container">
        <h1 className="text-uppercase text-center my-4">Citas</h1>
        <button onClick={createItem}>Crear Cita</button>
        {renderItems()}
        {modal && (
          <Modal
            activeItem={activeItem}
            toggle={toggle}
            onSave={handleSubmit}
          />
        )}
      </div>
    );
  }


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creacion-usuarios" element={<CreacionUsuarios />} />
        <Route path="/creacion-especialistas" element={<CreacionEspecialistas />} />
        {/* Otras rutas aquí si es necesario */}
      </Routes>
    </BrowserRouter>
  );
}




export default App;
