import React from "react";
import "../App.css";
import Title from "../components/Title";
import Cs from "../img/Logo_C_sharp.svg.png";
import php from "../img/PHP-logo.svg.png";
import reactImg from "../img/React-icon.svg.png";
import js from "../img/javascript-3.png";

export default function Competences() {
    return (
        <div className="bg-black py-10">
            <Title>Mes compétences</Title>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-3 gap-6 mt-6">
                    <SkillCard image={Cs} title="C#" />
                    <SkillCard image={php} title="PHP" />
                    <SkillCard image={reactImg} title="React" />
                    <SkillCard image={js} title="Javascript" />
                </div>
            </div>
        </div>
    );
}

function SkillCard({ image, title }) {
    return (
        <div className="text-center bg-black rounded-lg border border-green-700 shadow-md p-4 transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-green-700">
            <img className="w-16 mx-auto" src={image} alt={title} />
            <p className="text-lg font-semibold text-white">{title}</p>
        </div>
    );
}
