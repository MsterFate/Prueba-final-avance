import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Modal({ activeItem, toggle, onSave }) {
  const [item, setItem] = useState(activeItem);
  const [pacientes, setPacientes] = useState([]);
  const [especialistas, setEspecialistas] = useState([]);
  const [estadosCita, setEstadosCita] = useState([
    'programada',
    'completada',
    'cancelada',
    'cambiada',
  ]);

  useEffect(() => {
    axios.get('http://18.234.215.19:8000/api/pacientes/')
      .then((res) => setPacientes(res.data))
      .catch((err) => console.error('Error al cargar pacientes:', err));

    axios.get('http://18.234.215.19:8000/api/especialistas/')
      .then((res) => setEspecialistas(res.data))
      .catch((err) => console.error('Error al cargar especialistas:', err));
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(item);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Crear/Editar Cita
                </h3>
                <div className="mt-2">
                  <form onSubmit={handleSubmit}>
                    <select
                      name="nombre_paciente"
                      value={item.nombre_paciente}
                      onChange={handleChange}
                      className="w-full p-2 mb-3 border rounded-md"
                    >
                      <option value="" disabled>Seleccionar Paciente</option>
                      {pacientes.map((paciente) => (
                        <option key={paciente.id} value={paciente.id}>
                          {paciente.nombre}
                        </option>
                      ))}
                    </select>
                    <select
                      name="especialista_primario"
                      value={item.especialista_primario}
                      onChange={handleChange}
                      className="w-full p-2 mb-3 border rounded-md"
                    >
                      <option value="" disabled>Seleccionar Especialista Primario</option>
                      {especialistas.map((especialista) => (
                        <option key={especialista.id} value={especialista.id}>
                          {especialista.nombre}
                        </option>
                      ))}
                    </select>
                    <select
                      name="especialista_secundario"
                      value={item.especialista_secundario}
                      onChange={handleChange}
                      className="w-full p-2 mb-3 border rounded-md"
                    >
                      <option value="" disabled>Seleccionar Especialista Secundario</option>
                      {especialistas.map((especialista) => (
                        <option key={especialista.id} value={especialista.id}>
                          {especialista.nombre}
                        </option>
                      ))}
                    </select>
                    <select
                      name="estado"
                      value={item.estado}
                      onChange={handleChange}
                      className="w-full p-2 mb-3 border rounded-md"
                    >
                      <option value="" disabled>Seleccionar Estado de la Cita</option>
                      {estadosCita.map((estado) => (
                        <option key={estado} value={estado}>
                          {estado}
                        </option>
                      ))}
                    </select>
                    <textarea
                      name="descripcion"
                      value={item.descripcion}
                      onChange={handleChange}
                      placeholder="Descripción"
                      className="w-full p-2 mb-3 border rounded-md"
                    />
                    <input
                      type="datetime-local"
                      name="fecha_hora"
                      value={item.fecha_hora}
                      onChange={handleChange}
                      className="w-full p-2 mb-3 border rounded-md"
                    />
                    <button type="submit" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                      Guardar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={toggle}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Modal;
