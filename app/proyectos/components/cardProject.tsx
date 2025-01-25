'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project1 from '../../../public/Tabs/potencia.jpg';
import project2 from '../../../public/Tabs/Hackaton.webp';
import project3 from '../../../public/Tabs/EPS.webp';
import project4 from '../../../public/Tabs/AppFilipense.webp';
import { FaBootstrap, FaGithub, FaPhp } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAxios } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Campeon Hackaton PotenCIA Summit 2024",
    description: "Busqueda de medicamentos segun la ubicacion de la eps, gestion de usuarios e implementacion de IA y blockchain Blockchain para la busqueda de medicamentos en tiempo real IA predictiva de medicamentos",
    imageUrl: project1,
    githubUrl: "https://github.com/JulianMbp/Medicamentos.git", 
    technologies: [
      { name: "Node.Js", icon: <FaNodeJs className="text-green-500 h-8 w-8" /> },
      { name: "Django", icon: <DiDjango className= "text-slate-900 h-8 w-8" />      },
      { name: "React", icon: <FaReact className="text-azul-300 h-8 w-8" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-300 h-8 w-8" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-slate-950 h-8 w-8" /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-600 h-8 w-8" /> },
      { name: "Blockchain", icon: <SiHiveBlockchain className="text-slate-50 h-8 w-8" /> },
      { name: "Axios", icon: <SiAxios className="text-slate-950 h-8 w-8" /> },
    ],
  },
  {
    id: 2,
    title: "Campeon Hackaton Nexo Digital",
    description: "Este proyecto se centra en la creación de una API eficiente y escalable.",
    imageUrl: project2,
    githubUrl: "https://github.com/JulianMbp/Hackaton2024",
    technologies: [
      { name: "React Native", icon: <TbBrandReactNative className="text-azul-300 h-8 w-8" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-300 h-8 w-8" /> },
      { name: "FireBase", icon: <SiFirebase className="text-orange-600 h-8 w-8" /> },
      { name: "Expo", icon: <SiExpo className="text-slate-950 h-8 w-8" /> },
    ],
  },
  {
    id: 3,
    title: "Proyecto EPS",
    description: "Un proyecto innovador que combina tecnología y diseño gráfico.",
    imageUrl: project3,
    githubUrl: "https://github.com/JulianMbp/EPS_Front.git", 
    technologies: [
      { name: "Node.Js", icon: <FaNodeJs className="text-green-500 h-8 w-8" /> },
      { name: "React", icon: <FaReact className="text-azul-300 h-8 w-8" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-300 h-8 w-8" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-slate-950 h-8 w-8" /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-600 h-8 w-8" /> },
      { name: "Axios", icon: <SiAxios className="text-slate-950 h-8 w-8" /> },
      { name: "Express", icon: <SiExpress className="text-slate-950 h-8 w-8" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400 h-8 w-8" /> },
    ],
  },
  {
    id: 4,
    title: "Practica Universitaria",
    description: "Desarrollar un aplicativo web PHP, JavaScript, Bootstrap, HTML, y MySQL para certificar estudiantes con generación de PDF, seguridad y autenticación en institución educativa.",
    imageUrl: project4,
    githubUrl: "https://github.com/JulianMbp/PhP-Crud.git", 
    technologies: [
      { name: "PhP", icon: <FaPhp className="text-purple-50 h-8 w-8" /> },
      { name: "Bootstrap", icon: <FaBootstrap className= "text-violet-400 h-8 w-8" />      },
      { name: "Html5", icon: <TiHtml5 className="text-yellow-500 h-8 w-8" /> },
      { name: "Javascript", icon: <IoLogoJavascript className="text-yellow-400 h-8 w-8" /> },
      { name: "MySQL", icon: <SiMysql className="text-azul-50 h-8 w-8" /> },
    ],
  },
];

const Portfolio = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number | null) => {
    if (activeCard !== id) return;
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 30; 
    const y = ((clientY - top) / height - 0.5) * -30; 
    setMousePosition({ x, y });
  };

  const handleMouseEnter = (id: number) => {
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
          className="relative w-full h-96" 
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
            width={500} 
            height={500}  // Ajusta aquí el tamaño de la imagen
            className="w-full h-full object-cover rounded-2xl"  // Ajusta aquí la altura
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
            <div className="text-center text-white p-8">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <div className="grid grid-cols-3 gap-4 mt-4 justify-center">
                {project.technologies.map((tech, index) => (
                  <div key={index} className=" border rounded-xl border-white p-2 flex items-center gap-2">
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
              href={project.githubUrl} 
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
