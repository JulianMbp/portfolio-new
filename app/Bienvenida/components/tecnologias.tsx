'use client'
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaDocker,
  FaEthereum,
  FaGitAlt,
  FaGithub,
  FaGoogle,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiDjango, SiExpress, SiFirebase, SiFlutter, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPrisma, SiSpringboot } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { Typewriter } from "react-simple-typewriter";

import { GrTrigger } from "react-icons/gr";



const techGroups = [
  {
    title: "Python / Django",
    technologies: [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
    ],
  },
  {
    title: "JavaScript",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name:"JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "Axios", icon: <SiJavascript className="text-blue-400" /> },
    ],
  },
  {
    title: "React & React Native",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "React Native", icon: <FaReact className="text-purple-500" /> },
    ],
  },

  {
    title: "Git & Office",
    technologies: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-50" /> },
      { name: "Office", icon: <TbBrandOffice className="text-azul-500"></TbBrandOffice>},
    ],
  },
  {
    title: "Java/Spring Boot",
    technologies: [
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    ],
  },
  {
    title: "Cloud Platforms",
    technologies: [
      { name: "Azure", icon: <VscAzure className="text-blue-500" /> },
      { name: "Google Cloud", icon: <FaGoogle className="text-red-500" /> },
    ],
  },
  {
    title: "Bases de Datos",
    technologies: [
      { name: "PostgresSQL", icon: <BiLogoPostgresql className="text-blue-500" /> },
      { name: "MySql", icon: <SiMysql className="text-blue-400" /> },
      { name: "Mongodb", icon: <SiMongodb className="text-green-500" /> },
      { name: "PrismaORM", icon: <SiPrisma className="text-slate-50" /> },

    ],
  },
  {
    title: "Adicionales",
    technologies: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      { name: "Blockchain", icon: <FaEthereum className="text-gray-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      { name: "Triggers", icon: <GrTrigger className="text-yellow-500" /> },

    ],
  },
];

const TechCarousel = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white rounded-xl mt-1">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold h-10 sm:h-12 md:h-16 lg:h-20 overflow-hidden">
              <Typewriter
                  words={[
                    "<Tecnologías/>"          
        ]}
                  loop={true}
                  cursor
                  cursorStyle=""
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={4000}
                /></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-1 sm:p-2 md:p-3">
        {techGroups.map((group, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-2 sm:p-3 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">{group.title}</h2>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {group.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-wrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{tech.icon}</div>
                  <p className="mt-1 text-[10px] sm:text-xs md:text-sm">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
