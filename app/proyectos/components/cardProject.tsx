'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project1 from '../../../public/Tabs/potencia.jpg';
import project2 from '../../../public/Tabs/Hackaton.webp';
import project3 from '../../../public/Tabs/EPS.webp';
import project4 from '../../../public/Tabs/AppFilipense.webp';

import { SlSocialGithub } from "react-icons/sl";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { TbBrandOffice } from "react-icons/tb";

const projects = [
  {
    id: 1,
    title: "Campeon Hackaton PotenCIA Summit 2024",
    description: "Este es el primer proyecto del portafolio. Involucra diseño y desarrollo de interfaces.",
    imageUrl: project1,
    githubUrl: "https://github.com/JulianMbp/Medicamentos.git", // URL del repositorio
    technologies: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <SlSocialGithub className="text-gray-50" /> },
      { name: "Office", icon: <TbBrandOffice className="text-azul-500" /> },
    ],
  },
  {
    id: 2,
    title: "Campeon Hackaton Nexo Digital",
    description: "Este proyecto se centra en la creación de una API eficiente y escalable.",
    imageUrl: project2,
    githubUrl: "https://github.com/JulianMbp/Hackaton2024", // URL del repositorio
    technologies: [
      { name: "Node.js", icon: <FaGitAlt className="text-green-500" /> },
      { name: "Express", icon: <SlSocialGithub className="text-red-600" /> },
    ],
  },
  {
    id: 3,
    title: "Proyecto EPS",
    description: "Un proyecto innovador que combina tecnología y diseño gráfico.",
    imageUrl: project3,
    githubUrl: "https://github.com/JulianMbp/EPS_Front.git", // URL del repositorio
    technologies: [
      { name: "React", icon: <FaGitAlt className="text-blue-500" /> },
      { name: "CSS", icon: <TbBrandOffice className="text-teal-500" /> },
    ],
  },
  {
    id: 4,
    title: "Practica Universitaria",
    description: "Un proyecto innovador que combina tecnología y diseño gráfico.",
    imageUrl: project4,
    githubUrl: "https://github.com/JulianMbp/PhP-Crud.git", // URL del repositorio
    technologies: [
      { name: "PHP", icon: <FaGitAlt className="text-blue-600" /> },
      { name: "MySQL", icon: <SlSocialGithub className="text-yellow-600" /> },
    ],
  },
];

const Portfolio = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event, id) => {
    if (activeCard !== id) return;
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 30; // Scale rotation X
    const y = ((clientY - top) / height - 0.5) * -30; // Scale rotation Y
    setMousePosition({ x, y });
  };

  const handleMouseEnter = (id) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <div key={project.id} className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
          <motion.div
            className="relative w-full h-full"
            style={
              activeCard === project.id
                ? { rotateX: mousePosition.y, rotateY: mousePosition.x }
                : { rotateX: 0, rotateY: 0 }
            }
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={500} // Ajusta el tamaño según tus necesidades
              height={400} // Ajusta el tamaño según tus necesidades
              className="w-full h-full object-cover rounded-2xl"
            />
            <motion.div
              className="absolute inset-0 bg-[#2A7890] bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-2xl"
              style={
                activeCard === project.id
                  ? { rotateX: mousePosition.y, rotateY: mousePosition.x }
                  : { rotateX: 0, rotateY: 0 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-center text-white p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div className="flex gap-4 mt-4 justify-center">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>                
            </motion.div>
          </motion.div>

          {/* Botones fuera del efecto 3D */}
          <div className="absolute bottom-1 right-4 flex gap-4">
            <a
              href={project.githubUrl} // URL del repositorio por proyecto
              className="bg-gradient-to-r h-10 from-azul-400 to-azul-600 flex gap-2 items-center text-zinc-50 rounded-lg p-2 mt-5 hover:scale-110 active:scale-95 active:duration-200 
              hover:shadow-2xl transition-all"
            >
              <FaGithub className="h-6 w-6 text-slate-50" />
              <h1 className="hidden md:block">Repositorio</h1>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
