"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Importando el componente Image de Next.js
import { Typewriter } from "react-simple-typewriter";
import Accion from '../../Bienvenida/components/btnAccion';


const techGroups = [
  {
    title: "Habilidades Técnicas",
    descriptions: [
      { title: "Frontend", content: "Desarrollo de interfaces interactivas y responsivas." },
      { title: "Backend", content: "Manejo de bases de datos y servidores." }
    ]
  },
  {
    title: "Experiencia Laboral",
    descriptions: [
      { title: "Empresa XYZ", content: "Diseño de soluciones de software a medida." },
      { title: "Startup ABC", content: "Implementación de sistemas escalables." }
    ]
  },
  {
    title: "Estudios",
    descriptions: [
      {
        title: "Universidad Ejemplo",
        content: (
          <div className="flex flex-col items-start gap-4">
            <p>Licenciatura en Ciencias de la Computación.</p>
            <Image
              src="/ruta-a-la-imagen.jpg" // Reemplaza con la ruta real de la imagen
              alt="Imagen relacionada con los estudios"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        )
      },
      { title: "Cursos Adicionales", content: "Certificación en desarrollo web." }
    ]
  }
];

const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 }
};

const ExperiencesSection = () => {
  return (
    <div className=" items-center justify-center grid-cols-[0.3fr] gap-x-10 grid-rows-[0.07fr] text-white bg-gray-900 m-10 p-5 rounded-lg shadow-lg">
      <Accion></Accion>
      <h1 className=" text-9xl " >Experiencia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-5">
        {techGroups.map((group, index) => (
          <motion.div
            key={index}
            className="bg-azul-950 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              <Typewriter
                words={[group.title]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                delaySpeed={40000}
              />
            </h2>
            <div className="h-auto p-4 border border-gray-50 rounded-lg bg-azul-800">
              {group.descriptions.map((desc, i) => (
                <motion.div
                  key={i}
                  className="mb-4"
                  initial={fadeInAnimation.initial}
                  animate={fadeInAnimation.animate}
                  transition={{ ...fadeInAnimation.transition, delay: i * 0.2 }}
                >
                  <h3 className="text-lg font-bold text-white">{desc.title}</h3>
                  <p className="text-white">{desc.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesSection;
