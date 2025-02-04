'use client';
import Brownie from "@/public/pets/Brownie.jpeg"
import Image from "next/image"
import { motion } from "framer-motion"

const BrownieCard = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    const imageAnimation = {
        hidden: { scale: 0.8, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    return (
        <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerAnimation}
            className="bg-brownieColor-950 h-[100%] w-[100%] rounded-3xl"
        >
            <motion.dl 
                variants={containerAnimation}
                className="rounded-3xl flex lg:gap-0 gap-5 flex-col lg:flex-row justify-center items-center"
            >
                <motion.div variants={imageAnimation}>
                    <Image 
                        className="order-1 rounded-full sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
                        md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
                        h-[150px] w-[150px] sm:h-[250px] sm:w-[90%] -mt-10 
                        lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  
                        object-cover lg:object-cover shadow-2xl shadow-black" 
                        src={Brownie} 
                        alt="" 
                    />
                </motion.div>
                <motion.dl 
                    variants={itemAnimation}
                    className="order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-brownieColor-100 font-serif pr-10"
                >
                    <motion.dl 
                        variants={containerAnimation}
                        className="lg:flex lg:justify-between  grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center text-center md:justify-center md:items-center md:text-center lg:text-left"
                    >
                        <motion.h1 variants={itemAnimation} className="text-4xl lg:text-left pl-10 md:pl-0">Brownie🍫</motion.h1>
                        <motion.h1 variants={itemAnimation} className="text-2xl text-slate-50 text-opacity-80 pl-10 md:pl-0">Edad: 3 años</motion.h1>
                    </motion.dl>
                    <motion.p variants={itemAnimation} className="text-brownieColor-100 text-opacity-80 pl-10 md:pl-0">Mestiza</motion.p>
                    <motion.p variants={itemAnimation} className="text-brownieColor-100 text-sm text-opacity-60 pb-5 pl-10 md:pl-0 lg:px-0 lg:pb-0 lg:text-left">
                        ¡Hola! Soy Brownie, una perra mestiza con un toque especial que me hace única. Dicen que tengo algo de Pastor y quizá un poquito de Rottweiler o Doberman, pero, sobre todo, soy yo misma: fuerte, seria y protectora. En la parte baja de la casa soy la alfa; me encargo de cuidar el territorio y mantener todo en orden. Aun así, me encanta jugar y hacer trucos (¡soy muy lista!) y disfruto de las caricias. Eso sí, soy bastante celosa y posesiva con los míos; nada se escapa de mi vigilancia.
                    </motion.p>
                </motion.dl>
            </motion.dl>
        </motion.section>
    )
};

export default BrownieCard