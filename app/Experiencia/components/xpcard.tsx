"use client"
import BtnAccion from '@/app/Bienvenida/components/btnAccion';
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
          <h1 className="text-white">Practica Universitaria</h1>
          <p className="text-sm text-white opacity-50">Colegio Filipense(Ipiales)</p>
        </div>
      ),
        content: (
          <div className="grid grid-cols-[0.2fr_1fr] divide-x-2 text-sm">
            <div className="">
              <p className="order-1 font-semibold text-base text-azul-400">Desde:</p>
              <p className="order-2 text-zinc-50 text-sm">Mayo-2023</p>
              <p className="order-3 font-semibold text-base text-azul-400">Hasta:</p>
              <p className="order-4 text-zinc-50 text-sm">Septiembre-2023</p>
            </div>
            <p className="pl-3">
              Desarrollo de una aplicación web para el control del trabajo social de los estudiantes del colegio filipense en PHP y JavaScript, incluyendo diseño de interfaces, integración con bases de datos y pruebas para asegurar la calidad del software.
            </p>
          </div>
        )
      },
      { title: (
        <div className="flex flex-col">
          <h1 className="text-white">Practicante ParqueSoft Nariño</h1>
          <p className="text-sm text-white opacity-50">ParqueSoft Nariño(Pasto)</p>
        </div>
      ),
        content: (
          <div className="grid grid-cols-[0.2fr_1fr] divide-x-2 text-sm">
            <div className="">
              <p className="order-1 font-semibold text-base text-azul-400">Desde:</p>
              <p className="order-2 text-zinc-50 text-sm">Febrero-2025</p>
              <p className="order-3 font-semibold text-base text-azul-400">Hasta:</p>
              <p className="order-4 text-zinc-50 text-sm">Mayo-2025</p>
            </div>
            <p className="pl-3">
              Desarrollar, mantener y optimizar software de alta calidad, implementar mejoras en sistemas existentes, realizar pruebas, documentar proyectos, automatizar procesos, aportar ideas innovadoras, investigar nuevas tecnologías y colaborar con equipos multidisciplinarios para satisfacer las necesidades empresariales.
            </p>
          </div>
        )
      },
      { title: (
        <div className="flex flex-col">
          <h1 className="text-white">Joven Investigador</h1>
          <p className="text-sm text-white opacity-50">Universidad de Nariño(Pasto)</p>
        </div>
      ),
        content: (
          <div className="grid grid-cols-[0.2fr_1fr] divide-x-2 text-sm">
            <div className="">
              <p className="order-1 font-semibold text-base text-azul-400">Desde:</p>
              <p className="order-2 text-zinc-50 text-sm">Febrero-2025</p>
              <p className="order-3 font-semibold text-base text-azul-400">Hasta:</p>
              <p className="order-4 text-zinc-50 text-sm">Febrero-2026</p>
            </div>
            <p className="pl-3">
              Participación en proyectos de investigación sobre desarrollo de software, contribuyendo en la creación de soluciones innovadoras y en la mejora de procesos académicos, así como en la presentación de resultados en conferencias.
            </p>
          </div>
        )
      },
    ]
  },
  {
    title: "Estudios",
    descriptions: [
      {
        title: "",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xl sm:text-2xl">Bachiller Academico</p>
              <p className="text-sm text-white pr-4 opacity-70">Institucion Educativa Nuestra Señora de las Lajas</p>
              <div className="justify-center items-center flex">
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl text-white">Ingenieria de Software</h1>
                <p className="text-sm text-white opacity-70">Universidad Manuela Beltran</p>
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
                <p className="text-sm text-white opacity-70">Universidad Cooperativa de Colombia</p>
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
              </div>
              <div className="flex flex-col gap-5">
              </div>
            </div>
            <div>
              <ol className="text-zinc-50 text-xs sm:text-sm break-words">
                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl text-white mb-2">Estudios Complementarios</h1>
                <li className="mb-1">• Cloud computing</li>
                <p className="text-cyan-600 text-left opacity-70 -mt-1 mb-2">(UMB)</p>
                
                <li className="mb-1">• Alfabetización informática</li>
                <p className="text-cyan-600 text-left opacity-70 -mt-1 mb-2">(SENA)</p>
                
                <li className="mb-1">• Herramientas ofimáticas TIC</li>
                <p className="text-cyan-600 text-left opacity-70 -mt-1 mb-2">(SENA)</p>
                
                <li className="mb-1">• Base de Datos Microsoft Access</li>
                <p className="text-cyan-600 text-left opacity-70 -mt-1 mb-2">(SENA)</p>
                
                <li className="mb-1">• RESTful Web Services</li>
                <p className="text-cyan-600 text-left opacity-70 -mt-1 mb-2">(udemy)</p>
                
                <li className="mb-1">• Director Deportivo Nv III</li>
                <p className="text-cyan-600 text-left opacity-70 -mt-1 mb-2">(EntrenamientoCiclismo - España)</p>
                
                <li className="mb-1">• Licencia de Conducción</li>
                <p className="text-cyan-600 text-left opacity-70 -mt-1 mb-2">A2 y B1</p>
                
                <li className="mb-1">• Guitarra</li>
                <p className="text-cyan-600 text-left opacity-70 -mt-1">10 años de experiencia</p>
              </ol>
            </div>
          </div>
        )
      },
    ]
  }
];

export default function ExperiencesSection() {
  return (
    <div className="items-center justify-center grid-cols-[0.3fr] gap-x-10 grid-rows-[0.07fr] text-white bg-gray-900 m-2 sm:m-4 md:m-6 lg:m-10 p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute top-2 sm:top-3 md:top-4 lg:top-5 left-2 sm:left-3 md:left-4 lg:left-5">
        <BtnAccion />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">_Experiencia_</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-5">
        {techGroups.map((group, index) => (
          <motion.div
            key={index}
            className="bg-azul-950 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-white">
              <Typewriter
                words={[group.title]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <div className="h-auto p-2 sm:p-3 md:p-4 border border-gray-50 rounded-lg bg-azul-800">
              {group.descriptions.map((desc, i) => (
                <motion.div
                  key={i}
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white">{desc.title}</h3>
                  <div className="text-white text-justify p-2">{desc.content}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
