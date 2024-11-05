import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCogs, faCode, faEnvelope, faBars, faBriefcase, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import logo from "../img/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            // Si le menu est déjà ouvert, le fermer avec un délai pour l'animation
            setMenuOpen(false);
            setTimeout(() => {
                setMenuOpen(false);
            }, 300); // Délai correspondant à la durée de la transition
        } else {
            setMenuOpen(true);
        }
    };

    return (
        <div>
            <div className="container mx-auto p-10">
                <img src={logo} id="logo" alt="logo" />
                <div className="flex items-center justify-center">
                    <div className="menu-btn text-white md:hidden relative left-28" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div
                        className={`fixed top-0 left-0 right-0 bg-black text-white p-4 z-50 transition-transform duration-300 ease-out transform ${
                            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                        }`}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg">Menu</h2>
                            <div className="cursor-pointer" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <ul className="flex flex-col space-y-4 mt-4">
                            <li className="hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                                <FontAwesomeIcon icon={faHome} />
                                <a href="#">Accueil</a>
                            </li>
                            <li className="hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                                <FontAwesomeIcon icon={faCogs} />
                                <a href="#competences">Compétences</a>
                            </li>
                            <li className="hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <a href="#experience">Expériences</a>
                            </li>
                            <li className="hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                                <FontAwesomeIcon icon={faCode} />
                                <a href="#projets">Projets</a>
                            </li>
                            <li className="hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <ul className={`menu hidden sm:flex items-center space-x-8`}>
                        <li className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faHome} />
                            <a href="#">Accueil</a>
                        </li>
                        <li className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faCogs} />
                            <a href="#competences">Compétences</a>
                        </li>
                        <li className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <a href="#experience">Expériences</a>
                        </li>
                        <li className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faCode} />
                            <a href="#projets">Projets</a>
                        </li>
                        <li className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
