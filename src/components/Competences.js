import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faCode, faTools } from '@fortawesome/free-solid-svg-icons';

function Competences() {
  return (
    <div id="competences" className="text-white py-12 px-4"> {/* Arrière-plan gris foncé */}
      <h2 className="text-3xl font-semibold text-center mb-10">Mes compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition duration-300 hover:bg-gray-700 text-center">
          <FontAwesomeIcon icon={faServer} className="text-blue-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-4">Backend</h3>
          <p>Langages et outils :</p>
          <ul className="mt-2 space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>PostgreSQL</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition duration-300 hover:bg-gray-700 text-center">
          <FontAwesomeIcon icon={faCode} className="text-green-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <p>Langages et outils :</p>
          <ul className="mt-2 space-y-1">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>BulmaCSS</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition duration-300 hover:bg-gray-700 text-center">
          <FontAwesomeIcon icon={faTools} className="text-yellow-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-4">Autres</h3>
          <p>Outils divers :</p>
          <ul className="mt-2 space-y-1">
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Linux</li>
            <li>WordPress</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Competences;
