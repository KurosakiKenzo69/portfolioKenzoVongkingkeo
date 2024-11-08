import React from "react";

function Timeline() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="relative border-l border-gray-400 pl-12 max-w-xs mx-auto">
        <h2 className="text-xl text-center font-semibold text-white mb-4">
          Mes expériences
        </h2>

        <div className="mb-4 hover:scale-105 transform transition duration-300 hover:bg-gray-700 pl-4 p-2 rounded-lg max-w-xs mx-auto">
          <div className="absolute -left-5 w-6 h-6 border-4 border-blue-400 rounded-full"></div>
          <h3 className="text-md font-semibold text-white">
            Développeur Web (WebAtHeart)
          </h3>
          <p className="text-gray-300 text-xs">Stage de 8 semaines (2024)</p>
          <ul className="list-disc text-white ml-4 text-xs">
            <li>
              Collaboration avec l'équipe pour améliorer l'expérience utilisateur
              sur divers projets.
            </li>
            <li>Résolution de bugs sur les sites des clients</li>
            <li>Création d'un site sous Wordpress avec le thème Oxygen</li>
            <li>Gestion de mise en production d'un site</li>
            <li>Mise en ligne de plusieurs sites</li>
          </ul>
        </div>

        <div className="mb-4 hover:scale-105 transform transition duration-300 hover:bg-gray-700 pl-4 p-2 rounded-lg max-w-xs mx-auto">
          <div className="absolute -left-5 w-6 h-6 border-4 border-blue-400 rounded-full"></div>
          <h3 className="text-md font-semibold text-white">
            Alternance Développeur Fullstack (Influactive)
          </h3>
          <p className="text-gray-300 text-xs">12 septembre 2022 - 17 février 2023</p>
          <ul className="list-disc text-white ml-4 text-xs">
            <li>Création de sites avec WordPress</li>
            <li>Manipulation de PHP, JavaScript, JQuery et de l'AJAX</li>
            <li>
              Apprentissage de CSS et des redirections 301 pour appliquer au
              nouveau site
            </li>
            <li>
              Création d'un plugin Wordpress permettant de filtrer par année des
              délibérations
            </li>
          </ul>
        </div>

        <div className="mb-4 hover:scale-105 transform transition duration-300 hover:bg-gray-700 pl-4 p-2 rounded-lg max-w-xs mx-auto">
          <div className="absolute -left-5 w-6 h-6 border-4 border-blue-400 rounded-full"></div>
          <h3 className="text-md font-semibold text-white">
            Développeur Web (Dalvin Technologies)
          </h3>
          <p className="text-gray-300 text-xs">Stage de 6 semaines (2022)</p>
          <ul className="list-disc text-white ml-4 text-xs">
            <li>Création de sites avec Symfony</li>
            <li>Découverte et apprentissage du framework.</li>
            <li>Création d'un site vitrine</li>
            <li>Liaison avec la base de données avec les migrations</li>
          </ul>
        </div>

        <div className="mb-4 hover:scale-105 transform transition duration-300 hover:bg-gray-700 pl-4 p-2 rounded-lg max-w-xs mx-auto">
          <div className="absolute -left-5 w-6 h-6 border-4 border-blue-400 rounded-full"></div>
          <h3 className="text-md font-semibold text-white">
            Développeur Web (Million Victories)
          </h3>
          <p className="text-gray-300 text-xs">Stage de 8 semaines (2021)</p>
          <ul className="list-disc text-white ml-4 text-xs">
            <li>Apprentissage de fonctionnement d'un framework (CakePHP)</li>
            <li>Stage de découverte</li>
            <li>Comment fonctionne une entreprise de développement au quotidien</li>
            <li>Découverte d'un projet en cours de développement</li>
          </ul>
        </div>

        {/* Formation */}
        <div className="mb-4 hover:scale-105 transform transition duration-300 hover:bg-gray-700 pl-4 p-2 rounded-lg max-w-xs mx-auto">
          <div className="absolute -left-5 w-6 h-6 border-4 border-yellow-400 rounded-full"></div>
          <h3 className="text-md font-semibold text-white">Université Lyon 2</h3>
          <p className="text-gray-300 text-xs">
            Licence Informatique, Science des données (2023-2024)
          </p>
        </div>

        <div className="mb-4 hover:scale-105 transform transition duration-300 hover:bg-gray-700 pl-4 p-2 rounded-lg max-w-xs mx-auto">
          <div className="absolute -left-5 w-6 h-6 border-4 border-yellow-400 rounded-full"></div>
          <h3 className="text-md font-semibold text-white">ORT Lyon</h3>
          <p className="text-gray-300 text-xs">
            Bachelor CSI (Concepteur de systèmes d’information) (2022-2023)
          </p>
        </div>

        <div className="mb-4 hover:scale-105 transform transition duration-300 hover:bg-gray-700 pl-4 p-2 rounded-lg max-w-xs mx-auto">
          <div className="absolute -left-5 w-6 h-6 border-4 border-yellow-400 rounded-full"></div>
          <h3 className="text-md font-semibold text-white">ORT Lyon</h3>
          <p className="text-gray-300 text-xs">BTS SIO option SLAM (2020-2022)</p>
        </div>

        <div className="mb-4 hover:scale-105 transform transition duration-300 hover:bg-gray-700 pl-4 p-2 rounded-lg max-w-xs mx-auto">
          <div className="absolute -left-5 w-6 h-6 border-4 border-yellow-400 rounded-full"></div>
          <h3 className="text-md font-semibold text-white">
            Lycée de la Plaine de l’Ain
          </h3>
          <p className="text-gray-300 text-xs">Bac STI2D (2018-2020)</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
