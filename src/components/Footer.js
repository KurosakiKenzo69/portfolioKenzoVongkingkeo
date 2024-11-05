import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold mb-4">Contactez-moi</h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/kenzo-vongkingkeo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="mailto:kenzovongkingkeo2001@gmail.com"
            className="hover:text-red-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            href="https://github.com/KurosakiKenzo69"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © 2024 Kenzo Vongkingkeo. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
