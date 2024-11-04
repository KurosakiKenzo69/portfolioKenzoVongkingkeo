import React from "react";

export default function About() {
  return (
    <div className="about-section text-gray-300 text-lg max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-semibold mb-6">Mon parcours</h2>
      
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold text-yellow-400">Scolarité</h3>
          <p>
            <span className="font-medium">Licence en informatique</span> — 
            Université Lyon 2
          </p>
          <p>Formation axée sur le développement web, la programmation et les bases de données.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold text-yellow-400">Stages et Expériences Professionnelles</h3>
          <ul className="pl-4 space-y-2 list-disc">
            <li>
              <span className="font-medium">Stage Développement Web</span> — 
              Entreprise XYZ <span className="text-gray-400">(Juin 2023 - Août 2023)</span>
              <p className="ml-4">Développement d'une application interne en utilisant React et Node.js pour la gestion des tâches de l'entreprise.</p>
            </li>
            <li>
              <span className="font-medium">Stage Développeur Backend</span> — 
              Entreprise ABC <span className="text-gray-400">(Mars 2022 - Mai 2022)</span>
              <p className="ml-4">Intégration d'API et gestion de base de données MySQL pour un projet de gestion des utilisateurs.</p>
            </li>
          </ul>
        </li>

        <li>
          <h3 className="text-xl font-semibold text-yellow-400">Compétences Techniques</h3>
          <ul className="pl-4 space-y-2 list-disc">
            <li>Frontend : React, Tailwind CSS, HTML, CSS</li>
            <li>Backend : Node.js, Express, Symfony, Laravel</li>
            <li>Bases de données : MySQL, PostgreSQL</li>
            <li>Outils : Git, Docker</li>
          </ul>
          
        </li>
      </ul>
    </div>
  );
}
