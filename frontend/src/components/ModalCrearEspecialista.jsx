import React, { useState, useEffect } from 'react';


function Modal({ activeItem, toggle, onSave }) {
    const [item, setItem] = useState(activeItem);
    const [especialidadEspecialistas, setEspecialidadEspecialistas] = useState([
        'PSI',
        'TER',
        'FON',
        'PSIPE',
        'PSIQ',
        'MAS',
        'TC',
        'NUT',
        'BIO',
    ]);


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
                                    Crear/Editar Especialista
                                </h3>
                                <div className="mt-2">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                        Nombre del Especialista
                                    </label>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={item.nombre}
                                            onChange={handleChange}
                                            placeholder="Nombre del Especialista"
                                            className="w-full p-2 mb-3 border rounded-md"
                                        />
                                        <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
                                            Apellido del Especialista
                                        </label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            value={item.apellido}
                                            onChange={handleChange}
                                            placeholder="Apellido del Especialista"
                                            className="w-full p-2 mb-3 border rounded-md"
                                        />
                                        <label htmlFor="especialidad" className="block text-sm font-medium text-gray-700">
                                            Especialidad del Paciente
                                        </label>
                                        <select
                                            name="especialidad"
                                            value={item.especialidad}
                                            onChange={handleChange}
                                            className="w-full p-2 mb-3 border rounded-md"
                                        >
                                            <option value="" disabled>Especialidad</option>
                                            {especialidadEspecialistas.map((especialidad) => (
                                                <option key={especialidad} value={especialidad}>
                                                    {especialidad}
                                                </option>
                                            ))}
                                        </select>
                                        <label htmlFor="codigo_medico" className="block text-sm font-medium text-gray-700">
                                            Codigo Medico del Especialista
                                        </label>
                                        <input
                                            type="text"
                                            name="codigo_medico"
                                            placeholder="Codigo del Especialista"
                                            value={item.codigo_medico}
                                            onChange={handleChange}
                                            className="w-
                                            full p-2 mb-3 border rounded-md"
                                        />
                                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                            Número telefonico del Especialista
                                        </label>
                                        <input
                                            type="tel"
                                            name="numero_telefono"
                                            placeholder="Número Telefonico"
                                            value={item.numero_telefono}
                                            onChange={handleChange}
                                            className="w-full p-2 mb-3 border rounded-md"
                                        />
                                        <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                                            Direccion del Especialista
                                        </label>

                                        <textarea
                                            name="direccion"
                                            value={item.direccion}
                                            onChange={handleChange}
                                            placeholder="Direccion"
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
