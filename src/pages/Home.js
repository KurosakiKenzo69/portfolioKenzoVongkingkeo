import React, { useEffect, useRef } from "react";
import TitleGreen from "../components/Title";
import kenzo from "../img/kenzo.png";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "développeur web",
        "développeur backend",
        "développeur frontend",
        "développeur Full-stack",
        "développeur mobile"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="titlePhoto flex flex-col items-center md:flex-row md:justify-between px-10 py-10 text-white">
      <div className="title text-center md:text-left">
        <TitleGreen>Bonjour, je suis Kenzo VONGKINGKEO</TitleGreen>
        <p className="text-lg mt-2">A la recherche d'un poste en tant que <span ref={el} className="text-lg font-semibold text-green-400"></span></p>
      </div>
      <img
        src={kenzo}
        alt="Kenzo's profile"
        className="w-40 h-40 rounded-full mt-8 md:mt-0 md:ml-10 shadow-lg"
      />
    </div>
  );
}
