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
      { title: "", content: "Como ingeniero de software, domino la programación, el diseño y desarrollo de aplicaciones, la gestión de bases de datos y el control de versiones. Tengo habilidades para diseñar arquitecturas escalables. Siempre con un enfoque en la resolución de problemas y la implementación de soluciones eficientes." },
    ]
  },
  {
    title: "Habilidades Blandas",
    descriptions: [
      { title: "", content: "Manejo mis emociones con calma y empatía, lo que me permite colaborar eficazmente con diferentes personas, adaptándome para alcanzar objetivos comunes. Ante cualquier desafío, analizo la situación y propongo soluciones prácticas, siempre buscando ideas innovadoras y originales. Como líder, inspiro y guío a los demás, delegando tareas en un ambiente positivo y fomentando el trabajo en equipo." },

    ]
  },
  {
    title: "Experiencia Laboral",
    descriptions: [
      { title: (
        <div className="flex flex-col">
          <h1 className=" text-white">Practica Universitaria</h1>
          <p className="text-sm text-white opacity-50">Colegio Filipense(Ipiales)</p>
        </div>
  ),
        content: (
            <div className="grid grid-cols-[0.2fr_1fr] divide-x-2 text-sm">
              <div className=" ">
                <p className="order-1 font-semibold text-base text-azul-400 ">Desde:</p>
                <p className="order-2 text-zinc-50 text-sm">Mayo-2023</p>
                <p className="order-3 font-semibold text-base  text-azul-400">Hasta:</p>
                <p className="order-4 text-zinc-50 text-sm ">Septiembre-2023</p>
              </div >
              <p className="pl-3">
                Desarrollo de una aplicación web para el control del trabajo social de los estudiantes del colegio filipense en PHP y JavaScript, incluyendo diseño de interfaces, integración con bases de datos y pruebas para asegurar la calidad del software.
              </p>
            </div>
      )},
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
            <h2 className="text-3xl font-semibold mb-4 text-white">
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
                  <h3 className="text-2xl font-bold text-white">{desc.title}</h3>
                  <div className="text-white text-justify p-2">{desc.content}</div>
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
