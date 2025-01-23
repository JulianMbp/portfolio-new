'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaAws,
  FaGoogle,
  FaEthereum,
} from "react-icons/fa";
import { SiDjango, SiJavascript, SiExpress, SiNextdotjs, SiFlutter, SiSpringboot } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { TbBrandOffice } from "react-icons/tb";


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
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-500" /> },
    ],
  },
  {
    title: "JavaScript",
    technologies: [
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
      { name: "Azure", icon: <FaAws className="text-blue-500" /> },
      { name: "Google Cloud", icon: <FaGoogle className="text-red-500" /> },
    ],
  },
  {
    title: "Adicionales",
    technologies: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      { name: "Blockchain", icon: <FaEthereum className="text-gray-500" /> },

    ],
  },
];

const TechCarousel = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-white rounded-xl mt-2">
      <h1 className="text-6xl font-bold h-32">
              <Typewriter
                  words={[
                    "Tecnologías"          
        ]}
                  loop={true}
                  cursor
                  cursorStyle=""
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={4000}
                /></h1>
      <div className="grid grid-cols-3 gap-5 p-5">
        {techGroups.map((group, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-5">{group.title}</h2>
            <div className="flex flex-wrap gap-5">
              {group.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-wrap"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="text-4xl">{tech.icon}</div>
                  <p className="mt-2 text-lg">{tech.name}</p>
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
