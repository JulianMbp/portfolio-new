"use client"
import React from "react";
import { motion } from "framer-motion";
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
      { title: (
        <div className="flex flex-col">
            <h1 className=" text-white">Practicante ParqueSoft Nariño</h1>
          <p className="text-sm text-white opacity-50">ParqueSoft Nariño(Pasto)</p>
        </div>
  ),
        content: (
            <div className="grid grid-cols-[0.2fr_1fr] divide-x-2 text-sm">
              <div className=" ">
                <p className="order-1 font-semibold text-base text-azul-400 ">Desde:</p>
                <p className="order-2 text-zinc-50 text-sm">Febrero-2025</p>
                <p className="order-3 font-semibold text-base  text-azul-400">Hasta:</p>
                <p className="order-4 text-zinc-50 text-sm ">Mayo-2025</p>
              </div >
              <p className="pl-3">
              Desarrollar, mantener y optimizar software de alta calidad, implementar mejoras en sistemas existentes, realizar pruebas, documentar proyectos, automatizar procesos, aportar ideas innovadoras, investigar nuevas tecnologías y colaborar con equipos multidisciplinarios para satisfacer las necesidades empresariales.
              </p>
            </div>
      )},
      { title: (
        <div className="flex flex-col">
            <h1 className=" text-white">Joven Investigador</h1>
          <p className="text-sm text-white opacity-50">Universidad de Nariño(Pasto)</p>
        </div>
  ),
        content: (
            <div className="grid grid-cols-[0.2fr_1fr] divide-x-2 text-sm">
              <div className=" ">
                <p className="order-1 font-semibold text-base text-azul-400 ">Desde:</p>
                <p className="order-2 text-zinc-50 text-sm">Febrero-2025</p>
                <p className="order-3 font-semibold text-base  text-azul-400">Hasta:</p>
                <p className="order-4 text-zinc-50 text-sm ">Febrero-2026</p>
              </div >
              <p className="pl-3">
                Participación en proyectos de investigación sobre desarrollo de software, contribuyendo en la creación de soluciones innovadoras y en la mejora de procesos académicos, así como en la presentación de resultados en conferencias.
              </p>
            </div>
      )},
    ]
  },
  {
    title: "Estudios",
    descriptions: [
      {
        title: "",
        content: (
          <div className="grid grid-cols-2 gap-4 ">
            <div className="flex flex-col gap-2">
            <p className="text-2xl">Bachiller Academico</p>
            <p className="text-sm text-white pr-4 opacity-70"> Institucion Educativa Nuestra Señora de las Lajas</p>
            <div className="justify-center items-center flex ">

            </div>
          <div className="flex flex-col">
            <h1 className="text-2xl text-white">Ingenieria de Software</h1>
            <p className="text-sm text-white opacity-70"> Universidad Manuela Beltran</p>
            <p className="text-sm text-white opacity-70 flex gap-1 ml-2"> 
              <p className="text-azul-300">
                Desde:
              </p>
                2020
            </p>
            <p className="text-sm text-white opacity-70 flex gap-1 ml-2"> 
              <p className="text-azul-300">
                Hasta:
              </p>
                2023
            </p>
            <p className="text-sm text-white opacity-70"> Universidad Cooperativa de Colombia</p>
            <p className="text-sm text-white opacity-70 flex gap-1 ml-2"> 
              <p className="text-azul-300">
                Desde:
              </p>
                2024
            </p>
            <p className="text-sm text-white opacity-70 flex gap-1 ml-2"> 
              <p className="text-azul-300">
                Hasta:
              </p>
                2025
            </p>
            {/* <Image className="h-32 w-32 object-cover rounded-xl " src={Grado} alt={""}/> */}

          </div>
          <div className=" flex flex-col gap-5">
          </div >
          </div>
          <div>
          <ol className="text-zinc-50">
            <h1 className="font-semibold  text-2xl text-white">Estudios Complementarios</h1>
            <li>• Cloud computing </li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(UMB)</p>
            <li>• Alfabetización informática </li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(SENA)</p>
            <li>• Herramientas ofimáticas TIC </li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(SENA)</p>
            <li>• Base de Datos Microsoft Access
            (SENA)</li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(SENA)</p>
            <li>• RESTful Web Services</li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(udemy)</p>
            <li>• Director Deportivo Nv III
            </li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(EntrenamientoCiclismo - España)</p>
            <li>• Licencia de Conducción</li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1"> A2 y B1</p>
            <li>• Guitarra</li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">10 años de experiencia</p>
          </ol>
          </div>
          </div>
          
        )
      },
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
      <h1 className=" text-9xl " > _Experiencia_</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
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
