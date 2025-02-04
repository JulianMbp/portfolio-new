'use client';
import Maya from "@/public/pets/Maya.jpg"
import Image from "next/image"
import { motion } from "framer-motion"

const mayaCard = () => {
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
            className="bg-brunoColor-700 h-[100%] w-[100%] rounded-3xl"
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
                        src={Maya} 
                        alt="" 
                    />
                </motion.div>
                <motion.dl 
                    variants={itemAnimation}
                    className="order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-brunoColor-200 font-serif pr-10"
                >
                    <motion.dl 
                        variants={containerAnimation}
                        className="lg:flex  lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center text-center md:justify-center md:items-center md:text-center lg:text-left"
                    >
                        <motion.h1 variants={itemAnimation} className="text-4xl lg:text-left text-slate-50 pl-10 md:pl-0">Maya🌞</motion.h1>
                        <motion.h1 variants={itemAnimation} className="text-2xl text-slate-50 text-opacity-80 pl-10 md:pl-0">Edad: 13 años</motion.h1>
                    </motion.dl>
                    <motion.p variants={itemAnimation} className="text-slate-50 text-opacity-80 pl-10 md:pl-0">Mestiza</motion.p>
                    <motion.p variants={itemAnimation} className="text-slate-50 text-sm text-opacity-50 pb-5 pl-10 md:pl-0 lg:px-0 lg:pb-0 lg:text-left ">
                        ¡Hola! Soy Maya, una perrita mestiza de aspecto robusto y amigable, con un poquito de Labrador o Retriever en mi sangre. Soy juguetona y alegre, aunque, si soy sincera, ¡también soy perezosa y dormilona! Mi lugar favorito es mi sillón o mi cama, donde me encanta echarme a disfrutar del sueño. Soy la consentida de papá, y me encanta comer, especialmente pollito. Ya soy viejita, llena de sabiduría, y he vivido toda mi vida en esta casa, donde recibo a los visitantes con mi encanto especial.
                    </motion.p>
                </motion.dl>
            </motion.dl>
        </motion.section>
    )
}

export default mayaCard