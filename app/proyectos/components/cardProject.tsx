'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project1 from '@/public/img/julian-pixel (1).webp';
import { SlSocialGithub } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Este es el primer proyecto del portafolio. Involucra diseño y desarrollo de interfaces.",
    imageUrl: project1,
    githubUrl: "https://github.com/usuario/proyecto1", // URL del repositorio
    videoUrl: "https://youtu.be/ejemploVideo1", // URL del video
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Este proyecto se centra en la creación de una API eficiente y escalable.",
    imageUrl: project1,
    githubUrl: "https://github.com/usuario/proyecto2", // URL del repositorio
    videoUrl: "https://youtu.be/ejemploVideo2", // URL del video
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Un proyecto innovador que combina tecnología y diseño gráfico.",
    imageUrl: project1,
    githubUrl: "https://github.com/usuario/proyecto3", // URL del repositorio
    videoUrl: "https://youtu.be/ejemploVideo3", // URL del video
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
              height={300} // Ajusta el tamaño según tus necesidades
              className="w-full h-56 object-cover rounded-2xl"
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
              </div>                
            </motion.div>
          </motion.div>

          {/* Botones fuera del efecto 3D */}
          <div className="absolute bottom-4 right-4 flex gap-4">
            <a
              href={project.githubUrl} // URL del repositorio por proyecto
              className="bg-slate-200 flex gap-2 items-center text-zinc-950 rounded-lg p-2 mt-5 hover:scale-110 active:scale-95 active:duration-200 
              hover:shadow-2xl transition-all"
            >
              <SlSocialGithub className="h-8 w-8 text-slate-950" />
              <h1 className="hidden md:block">Repositorio</h1>
            </a>

            <a
              href={project.videoUrl} // URL del video por proyecto
              className="bg-slate-200 flex gap-2 items-center text-zinc-950 rounded-lg p-2 mt-5 hover:scale-110 active:scale-95 active:duration-200 
              hover:shadow-2xl transition-all"
            >
              <FaYoutube className="h-8 w-8 text-slate-950" />
              <h1 className="hidden md:block">Presentacion</h1>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
