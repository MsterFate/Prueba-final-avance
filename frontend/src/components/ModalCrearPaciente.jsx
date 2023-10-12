import React, { useState, useEffect } from 'react';


function Modal({ activeItem, toggle, onSave }) {
    const [item, setItem] = useState(activeItem);

    const [tipoSangrePacientes, setTipoSangrePacientes] = useState([
        'A',
        'B',
        'AB',
        'O',
    ]);
    const [generoPacientes, setGeneroPacientes] = useState([
        'masculino',
        'femenino',
        'otro',
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
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Crear/Editar Paciente</h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="flex">
                            <div className="w-1/2 px-4 py-4">
                                {/* Información Personal */}
                                <h4 className="text-lg leading-6 font-medium text-gray-900">Información Personal</h4>
                                <form onSubmit={handleSubmit}>
                                    {/* Campos de Información Personal */}
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                        Nombre del Paciente
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={item.nombre}
                                        onChange={handleChange}
                                        placeholder="Nombre del Paciente"
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
                                        Apellido del Paciente
                                    </label>
                                    <input
                                        type="text"
                                        name="apellido"
                                        value={item.apellido}
                                        onChange={handleChange}
                                        placeholder="Apellido del Paciente"
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                                        Rut del Paciente
                                    </label>
                                    <input
                                        type="text"
                                        name="dni"
                                        value={item.dni}
                                        onChange={handleChange}
                                        placeholder="Rut del Paciente"
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="fecha_nacimiento" className="block text-sm font-medium text-gray-700">
                                        Fecha de Nacimiento del Paciente
                                    </label>
                                    <input
                                        type="date"
                                        name="fecha_nacimiento"
                                        value={item.fecha_nacimiento}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="genero" className="block text-sm font-medium text-gray-700">
                                        Genéro
                                    </label>
                                    <select
                                        name="genero"
                                        value={item.genero}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    >
                                        <option value="" disabled>Género</option>
                                        {generoPacientes.map((genero) => (
                                            <option key={genero} value={genero}>
                                                {genero}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="altura" className="block text-sm font-medium text-gray-700">
                                        Altura
                                    </label>
                                    <input
                                        type="text"
                                        name="altura"
                                        placeholder="Altura del Paciente"
                                        value={item.altura}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="altura" className="block text-sm font-medium text-gray-700">
                                        Peso
                                    </label>
                                    <input
                                        type="text"
                                        name="peso"
                                        placeholder="Peso del Paciente"
                                        value={item.peso}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="edad" className="block text-sm font-medium text-gray-700">
                                        Edad
                                    </label>
                                    <input
                                        type="text"
                                        name="edad"
                                        placeholder="Edad del Paciente"
                                        value={item.edad}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="tipo_sangre" className="block text-sm font-medium text-gray-700">
                                        Tipo de Sangre
                                    </label>
                                    <select
                                        name="tipo_sangre"
                                        value={item.tipo_sangre}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    >
                                        <option value="" disabled>Tipo de Sangre</option>
                                        {tipoSangrePacientes.map((tipo_sangre) => (
                                            <option key={tipo_sangre} value={tipo_sangre}>
                                                {tipo_sangre}
                                            </option>
                                        ))}
                                    </select>
                                </form>
                            </div>
                            <div className="w-1/2 px-4 py-4">
                                {/* Información de Contacto */}
                                <h4 className="text-lg leading-6 font-medium text-gray-900">Información de Contacto</h4>
                                <form onSubmit={handleSubmit}>
                                    {/* Campos de Información de Contacto */}
                                    <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                                        Direccion del Paciente
                                    </label>
                                    <textarea
                                        name="direccion"
                                        value={item.direccion}
                                        onChange={handleChange}
                                        placeholder="Direccion"
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                                        Teléfono del Paciente
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        placeholder="Número Telefonico"
                                        value={item.telefono}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Correo Electronico del Paciente
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Correo Electronico"
                                        value={item.email}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="nombre_contacto_emergencia" className="block text-sm font-medium text-gray-700">
                                        Nombre del Contacto de Emergencia
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre_contacto_emergencia"
                                        placeholder="Nombre Contacto de Emergencia del Paciente"
                                        value={item.nombre_contacto_emergencia}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="telefono_contacto_emergencia" className="block text-sm font-medium text-gray-700">
                                        Número del Contacto de Emergencia
                                    </label>
                                    <input
                                        type="text"
                                        name="telefono_contacto_emergencia"
                                        placeholder="Telefono Contacto de Emergencia del Paciente"
                                        value={item.telefono_contacto_emergencia}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="relacion_contacto_emergencia" className="block text-sm font-medium text-gray-700">
                                        Relacion Contacto de Emergencia
                                    </label>
                                    <input
                                        type="text"
                                        name="relacion_contacto_emergencia"
                                        placeholder="Relacion Contacto de Emergencia del Paciente"
                                        value={item.relacion_contacto_emergencia}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                    <label htmlFor="relacion_contacto_emergencia" className="block text-sm font-medium text-gray-700">
                                        Medico Referente
                                    </label>
                                    <input
                                        type="text"
                                        name="medico_referente"
                                        placeholder="Medico Referente del Paciente"
                                        value={item.medico_referente}
                                        onChange={handleChange}
                                        className="w-full p-2 mb-3 border rounded-md"
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="w-full px-4 py-4">
                            {/* Información General del Paciente */}
                            <h4 className="text-lg leading-6 font-medium text-gray-900">Información General del Paciente</h4>
                            <form onSubmit={handleSubmit}>
                                {/* Campos de Información General del Paciente */}
                                <label htmlFor="alergias" className="block text-sm font-medium text-gray-700">
                                    Alergias del Paciente
                                </label>
                                <textarea
                                    name="alergias"
                                    placeholder="Alergias del Paciente"
                                    value={item.alergias}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-3 border rounded-md"
                                />
                                <label htmlFor="medicamentos_actuales" className="block text-sm font-medium text-gray-700">
                                    Meicamentos Actuales
                                </label>
                                <textarea
                                    name="medicamentos_actuales"
                                    placeholder="Medicamentos Actuales del Paciente"
                                    value={item.medicamentos_actuales}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-3 border rounded-md"
                                />
                                <label htmlFor="enfermedades_previas" className="block text-sm font-medium text-gray-700">
                                    Enfermedades Previas
                                </label>
                                <textarea
                                    name="enfermedades_previas"
                                    placeholder="Enfermedades Previas del Paciente"
                                    value={item.enfermedades_previas}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-3 border rounded-md"
                                />
                                <label htmlFor="cirugias_previas" className="block text-sm font-medium text-gray-700">
                                    Cirugas Previas
                                </label>
                                <textarea
                                    name="cirugias_previas"
                                    placeholder="Cirugias Previas del Paciente"
                                    value={item.cirugias_previas}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-3 border rounded-md"
                                />

                                <label htmlFor="fecha_ingreso" className="block text-sm font-medium text-gray-700">
                                    Fecha de Ingreso
                                </label>
                                <input
                                    type="date"
                                    name="fecha_ingreso"
                                    value={item.fecha_ingreso}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-3 border rounded-md"
                                />
                                <label htmlFor="seguro_medico" className="block text-sm font-medium text-gray-700">
                                    Seguro Medico del Paciente
                                </label>
                                <textarea
                                    name="seguro_medico"
                                    placeholder="Seguro Médico del Paciente"
                                    value={item.seguro_medico}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-3 border rounded-md"
                                />
                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                                    Observaciones del Paciente
                                </label>
                                <textarea
                                    name="observaciones"
                                    placeholder="Observaciones del Paciente"
                                    value={item.observaciones}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-3 border rounded-md"
                                />
                                <button type="submit" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Guardar
                                </button>
                            </form>
                        </div>
                        <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={toggle}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
