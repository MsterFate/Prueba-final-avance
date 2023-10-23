
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalCrearEspecialista from './components/ModalCrearEspecialista';
import './App.css'

function CreacionEspecialistas() {
    const [viewCompleted, setViewCompleted] = useState(false);
    const [especialistasList, setEspecialistasList] = useState([]);
    const [modal, setModal] = useState(false);
    const [activeItem, setActiveItem] = useState({
        id: "",
        nombre: "",
        apellido: "",
        especialidad: "",
        codigo_medico: "",
        numero_telefono: "",
        direccion: "",
    });


    useEffect(() => {
        refreshList();
    }, []);

    const refreshList = () => {
        axios.get('http://18.208.217.24:8000/api/especialistas/')
            .then((res) => setEspecialistasList(res.data))
            .catch((err) => console.error('Error al cargar especialista:', err));
    };

    const toggle = () => {
        setModal(!modal);
    };

    const handleSubmit = (item) => {
        toggle();
        const apiUrl = item.id ? `http://18.208.217.24:8000/api/especialistas/${item.id}/` : 'http://18.208.217.24:8000/api/especialistas/';
        const method = item.id ? 'put' : 'post';

        axios[method](apiUrl, item)
            .then((res) => refreshList())
            .catch((err) => console.error('Error al guardar especialista:', err));
    };

    const createItem = () => {
        setActiveItem({
            id: "",
            nombre: "",
            apellido: "",
            especialidad: "",
            codigo_medico: "",
            numero_telefono: "",
            direccion: "",
        });
        setModal(true);
    };






    const renderItems = () => {
        return especialistasList.map((item) => (
            <div key={item.id} className="mb-4 p-2 border rounded">
                <div><strong>ID del Especialista:</strong> {item.id}</div>
                <div><strong>Nombre Especialista:</strong> {item.nombre}</div>
                <div><strong>Apellido Especialista:</strong> {item.apellido}</div>

                <div><strong>Especialidad Especialista:</strong> {item.especialidad}</div>
                <div><strong>Codigo Médico:</strong> {item.codigo_medico}</div>
                <div><strong>Fecha de Nacimiento:</strong> {item.numero_telefono}</div>
                <div><strong>Dirección:</strong> {item.direccion}</div>
                <button onClick={() => { setActiveItem(item); toggle(); }}>Editar</button>
                <button onClick={() => axios.delete(`http://18.208.217.24:8000/api/especialistas/${item.id}/`).then(refreshList)}>Eliminar</button>
            </div>
        ));
    };




    return (
        <div>
            <main className="container">
                <h1 className="text-uppercase text-center my-4">Especialistas</h1>
                <button onClick={createItem}>Crear Especialista</button>
                {renderItems()}
                {modal && (
                    <ModalCrearEspecialista
                        activeItem={activeItem}
                        toggle={toggle}
                        onSave={handleSubmit}
                    />
                )}
            </main>
        </div>
    );
}


export default CreacionEspecialistas;
