import React from "react";
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa';
import { FaHospitalUser } from 'react-icons/fa';

// Importa la imagen
import logo from './324234.jpg';

const Navbar = () => {
    return (
        <div className="navbar">
            <img
                src={logo}
                alt="Logo de la empresa"
                style={{ width: '100%' }}
            />

            <ul className="nav-list">
                <li className="mb-5">
                    <Link to="/" className="flex items-center">
                        <FaHome className="mr-2" /> Inicio {/* Usa el icono */}
                    </Link>
                </li>
                <li className="mb-5">
                    <Link to="/calendario" className="flex items-center">
                        <FaCalendar className="mr-2" /> Calendario {/* Usa el icono */}
                    </Link>
                </li>
                <li className="mb-5">
                    <Link to="/creacion-especialistas" className="flex items-center">
                        <FaHospitalUser className="mr-2" /> Especialistas {/* Usa el icono */}
                    </Link>
                </li>

                <li className="mb-5">
                    <Link to="/creacion-usuarios" className="flex items-center">
                        <FaUserAlt className="mr-2" /> Pacientes {/* Usa el icono */}
                    </Link>
                </li>

                <li className="mb-5">
                    <Link to="/salir" className="flex items-center">
                        <FaDoorOpen className="mr-2" /> Salir {/* Usa el icono */}
                    </Link>
                </li>
            </ul>
        </div>
    );
};


export default Navbar;