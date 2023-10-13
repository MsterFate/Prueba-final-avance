
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalCreacionPaciente from './components/ModalCrearPaciente';
import './App.css'

function CreacionUsuarios() {
    const [viewCompleted, setViewCompleted] = useState(false);
    const [pacientesList, setPacientesList] = useState([]);
    const [modal, setModal] = useState(false);
    const [activeItem, setActiveItem] = useState({
        id: "",
        nombre: "",
        apellido: "",
        dni_paciente: "",
        fecha_nacimiento: "",
        genero: "",
        direccion: "",
        telefono: "",
        email: "",
        altura: "",
        edad: "",
        tipo_sangre: "",
        alergias: "",
        medicamentos_actuales: "",
        enfermedades_previas: "",
        cirugias_previas: "",
        medico_referente: "",
        nombre_contacto_emergencia: "",
        telefono_contacto_emergencia: "",
        relacion_contacto_emergencia: "",
        fecha_ingreso: "",
        seguro_medico: "",
        observaciones: ""

    });


    useEffect(() => {
        refreshList();
    }, []);

    const refreshList = () => {
        axios.get('http://54.160.163.164:8000/api/pacientes/')
            .then((res) => setPacientesList(res.data))
            .catch((err) => console.error('Error al cargar pacientes:', err));
    };

    const toggle = () => {
        setModal(!modal);
    };

    const handleSubmit = (item) => {
        toggle();
        const apiUrl = item.id ? `http://54.160.163.164:8000/api/pacientes/${item.id}/` : 'http://54.160.163.164:8000/api/pacientes/';
        const method = item.id ? 'put' : 'post';

        axios[method](apiUrl, item)
            .then((res) => refreshList())
            .catch((err) => console.error('Error al guardar paciente:', err));
    };

    const createItem = () => {
        setActiveItem({
            id: "",
            nombre: "",
            apellido: "",
            dni_paciente: "",
            fecha_nacimiento: "",
            genero: "",
            direccion: "",
            telefono: "",
            email: "",
            altura: "",
            edad: "",
            tipo_sangre: "",
            alergias: "",
            medicamentos_actuales: "",
            enfermedades_previas: "",
            cirugias_previas: "",
            medico_referente: "",
            nombre_contacto_emergencia: "",
            telefono_contacto_emergencia: "",
            relacion_contacto_emergencia: "",
            fecha_ingreso: "",
            seguro_medico: "",
            observaciones: ""
        });
        setModal(true);
    };






    const renderItems = () => {
        return pacientesList.map((item) => (
            <div key={item.id} className="mb-4 p-2 border rounded">
                <div><strong>ID del Paciente:</strong> {item.id}</div>
                <div><strong>Nombre Paciente:</strong> {item.nombre}</div>
                <div><strong>Apellido Paciente:</strong> {item.apellido}</div>
                <div><strong>DNI:</strong> {item.dni}</div>
                <div><strong>Fecha de Nacimiento:</strong> {item.fecha_nacimiento}</div>
                <div><strong>Género:</strong> {item.genero}</div>
                <div><strong>Dirección:</strong> {item.direccion}</div>
                <div><strong>Teléfono:</strong> {item.telefono}</div>
                <div><strong>Email:</strong> {item.email}</div>
                <div><strong>Altura:</strong> {item.altura}</div>
                <div><strong>Edad:</strong> {item.edad}</div>
                <div><strong>Tipo Sangre:</strong> {item.tipo_sangre}</div>
                <div><strong>Alergias:</strong> {item.alergias}</div>
                <div><strong>Medicamientos Actuales:</strong> {item.medicamentos_actuales}</div>
                <div><strong>Enfermedades Previos:</strong> {item.enfermedades_previas}</div>
                <div><strong>Cirugas Previas:</strong> {item.cirugias_previas}</div>
                <div><strong>Médico Referente:</strong> {item.medico_referente}</div>
                <div><strong>Nombre Contacto Emergencia:</strong> {item.nombre_contacto_emergencia}</div>
                <div><strong>Teléfono Contacto Emergencia:</strong> {item.telefono_contacto_emergencia}</div>
                <div><strong>Relación Contacto Emergencia:</strong> {item.relacion_contacto_emergencia}</div>
                <div><strong>Fecha Ingreso:</strong> {item.fecha_ingreso}</div>
                <div><strong>Seguro Médico:</strong> {item.seguro_medico}</div>
                <div><strong>Observaciones:</strong> {item.observaciones}</div>
                <button onClick={() => { setActiveItem(item); toggle(); }}>Editar</button>
                <button onClick={() => axios.delete(`http://54.160.163.164:8000/api/pacientes/${item.id}/`).then(refreshList)}>Eliminar</button>
            </div>
        ));
    };




    return (
        <div>
            <main className="container">
                <h1 className="text-uppercase text-center my-4">Pacientes</h1>
                <button onClick={createItem}>Crear Paciente</button>
                {renderItems()}
                {modal && (
                    <ModalCreacionPaciente
                        activeItem={activeItem}
                        toggle={toggle}
                        onSave={handleSubmit}
                    />
                )}
            </main>
        </div>
    );
}


export default CreacionUsuarios;
