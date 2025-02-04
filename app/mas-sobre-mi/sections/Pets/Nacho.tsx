'use client';
import Nacho from "@/public/pets/nacho.jpg"
import Image from "next/image"
import { motion } from "framer-motion"

const nachoCard = () => {
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

    return(
        <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerAnimation}
            className="bg-brunoColor-300 h-[100%] w-[100%] rounded-3xl"
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
                        lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[350px]  
                        object-cover md:object-right lg:object-cover shadow-2xl shadow-black" 
                        src={Nacho} 
                        alt="" 
                    />
                </motion.div>
                <motion.dl 
                    variants={itemAnimation}
                    className="order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-brunoColor-950 font-serif pr-10"
                >
                    <motion.dl 
                        variants={containerAnimation}
                        className="lg:flex  lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center text-center md:justify-center md:items-center md:text-center lg:text-left"
                    >
                        <motion.h1 variants={itemAnimation} className="text-4xl lg:text-left pl-10 md:pl-0">Nacho🧀</motion.h1>
                        <motion.h1 variants={itemAnimation} className="text-2xl text-brunoColor-950 text-opacity-80 pl-10 md:pl-0">Edad: 7 años</motion.h1>
                    </motion.dl>
                    <motion.p variants={itemAnimation} className="text-brunoColor-950 text-opacity-80 pl-10 md:pl-0">Perro Pequines</motion.p>
                    <motion.p variants={itemAnimation} className="text-brunoColor-950 text-sm text-opacity-60 pb-5 pl-10 md:pl-0 lg:px-0 lg:pb-0 lg:text-left ">
                        ¡Hola! Soy Nacho, un pequeño pero muy querido perro pequinés. Me encanta dormir y acurrucarme junto a mi abuelo; él es mi compañero favorito para descansar y también para molestar un poquito. Tengo mis gustos bien definidos: no me resisto al pan remojado en café y al concentrado con arroz. También disfruto de probar las pepas de Bruno (aunque a él no siempre le guste). Vivo en Ipiales con él, y soy el consentido de mi mamá. ¡Dormir y comer es lo mejor del mundo! 🐾
                    </motion.p>
                </motion.dl>
            </motion.dl>
        </motion.section>
    )
};

export default nachoCard