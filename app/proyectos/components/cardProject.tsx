'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project1 from '../../../public/Tabs/potencia.jpg';
import project2 from '../../../public/Tabs/Hackaton.webp';
import project3 from '../../../public/Tabs/EPS.webp';
import project4 from '../../../public/Tabs/AppFilipense.webp';
import project5 from '../../../public/Tabs/Task.png';
import project6 from '../../../public/Tabs/Convert.png';
import project8 from '../../../public/Tabs/facebook_search.png';
import { SiN8N } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";

import { SiTypescript } from "react-icons/si";
import { FaBootstrap, FaGithub, FaPhp, FaAngular, FaFilePdf, FaFileWord  } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { GrTrigger } from "react-icons/gr"; import { TiHtml5 } from "react-icons/ti"; import { SiMysql, SiExpress, SiHiveBlockchain, SiFirebase, SiExpo } from "react-icons/si"; import { DiDjango } from "react-icons/di"; import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa"; import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"; import { BiLogoPostgresql } from "react-icons/bi"; import { SiAxios } from "react-icons/si"; import { TbBrandReactNative } from "react-icons/tb"; import { IoLogoJavascript } from "react-icons/io5";

const projects = [
  {
    id: 1,
    title: "Campeon Hackaton PotenCIA Summit 2024 App Web",
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
    title: "Campeon Hackaton Nexo Digital App Mobile",
    description: "Navegación por Proyectos: Visualización de la lista de proyectos en el dashboard. Gestión de Tareas y Bitácoras: Acceso y creación de registros en cada proyecto.",
    imageUrl: project2,
    githubUrl: "https://github.com/JulianMbp/Hackaton2024",
    technologies: [
      { name: "React Native", icon: <TbBrandReactNative className="text-azul-300 h-8 w-8" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-300 h-8 w-8" /> },
      { name: "FireBase", icon: <SiFirebase className="text-orange-600 h-8 w-8" /> },
      { name: "Expo", icon: <SiExpo className="text-slate-950 h-8 w-8" /> },
      { name: "IoT", icon: <SiHiveBlockchain className="text-slate-50 h-8 w-8" /> },
    ],
  },
  {
    id: 8,
    title: "Meta Search",
    description: "Esta es una aplicacion para buscar publciaciones en las aplicaciones de meta (Facebook e Instagram), y tambien responder comentarios de las publicaciones, asi como responder al DM de las personas que te escriben. A traves de webhook en n8n.dev",
    imageUrl: project8,
    githubUrl: "https://youtu.be/w0Q2e4bDreM", 
    technologies: [
      { name: "Angular", icon: <FaAngular className="text-purple-50 h-8 w-8" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-300 h-8 w-8" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-azul-300 h-8 w-8" /> },
      { name: "N8N", icon: <SiN8N className="text-slate-950 h-8 w-8" /> },
      { name: "Meta", icon: <FaMeta className="text-blue-500 h-8 w-8" /> },
    ],
  },
  {
    id: 3,
    title: "Proyecto EPS",
    description: "Desarrollar un aplicativo web, JavaScript, React, Next.js, PostgreSQL, Docker, node.js, y Tailwind Desarrollar el Sistema de autenticación y sesiones.Gestion de pacientes, medicamentos y citas",
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
    id: 6,
    title: "Convertidor de Archivos",
    description: "Aplicacion web para convertir archivos de word a pdf mas login de usuarios",
    imageUrl: project6,
    githubUrl: "https://github.com/JulianMbp/Login.git", 
    technologies: [
      { name: "Next.js", icon: <RiNextjsFill className="text-purple-50 h-8 w-8" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 h-8 w-8" /> },
      { name: "PostgreSQL", icon: <SiMysql className="text-azul-50 h-8 w-8" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-azul-300 h-8 w-8" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-300 h-8 w-8" /> },
      { name: "Word", icon: <FaFileWord className="text-white h-8 w-8" /> },
      { name: "Pdf", icon: <FaFilePdf className="text-red-500 h-8 w-8" /> },
      { name: "Trigger.dev", icon: <GrTrigger className="text-gray-500 h-8 w-8" /> },
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
  {
    id: 5,
    title: "BackEnd CRUD con Nest.js y clave foranea",
    description: "Desarrollar una Aplicacion Web para la gestion de tareas de un equipo de trabajo con un crud de tareas, usuarios y proyectos.",
    imageUrl: project5,
    githubUrl: "https://github.com/JulianMbp/Back-CRUD-con-nest-y-clave-foranea.git", 
    technologies: [
      { name: "Angular", icon: <FaAngular className="text-purple-50 h-8 w-8" /> },
      { name: "Nest.js", icon: <SiNestjs className= "text-black h-8 w-8" />},
      { name: "PostgreSQL", icon: <SiMysql className="text-azul-50 h-8 w-8" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-azul-300 h-8 w-8" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-300 h-8 w-8" /> },
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
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
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
