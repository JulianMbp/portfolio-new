'use client';
import Samy from "@/public/pets/Samy.jpeg"
import Image from "next/image"
import { motion } from "framer-motion"

const SamyCard = () => {
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
        <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerAnimation}
            className="flex md:col-span-2 justify-center items-center"
        >
            <motion.section 
                variants={itemAnimation}
                className="bg-lunaColor-300 h-[100%] w-[100%] md:w-[60%] lg:w-[50%] rounded-3xl"
            >
                <motion.dl 
                    variants={containerAnimation}
                    className="rounded-3xl flex lg:gap-0 gap-5 flex-col lg:flex-row justify-center items-center"
                >
                    <motion.div variants={imageAnimation}>
                        <Image 
                            className="order-1 rounded-full sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
                            md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
                            h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] -mt-10 
                            lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  
                            object-cover lg:object-cover shadow-2xl shadow-black" 
                            src={Samy} 
                            alt="" 
                        />
                    </motion.div>
                    <motion.dl 
                        variants={itemAnimation}
                        className="order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-lunaColor-950 font-serif pr-10"
                    >
                        <motion.dl 
                            variants={containerAnimation}
                            className=" mt-10 lg:flex lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center text-center md:justify-center md:items-center md:text-center lg:text-left"
                        >
                            <motion.h1 variants={itemAnimation} className="text-4xl lg:text-left pl-10 md:pl-0">Samy🪽</motion.h1>
                            <motion.h1 variants={itemAnimation} className="text-2xl text-luanColor-50 text-opacity-80 pl-10 md:pl-0">Edad: 16 años</motion.h1>
                        </motion.dl>
                        <motion.p variants={itemAnimation} className="text-lunaColor-950 text-opacity-80 pl-10 md:pl-0">Puddle</motion.p>
                        <motion.p variants={itemAnimation} className="text-lunaColor-950 text-sm text-opacity-60 mb-10 pl-10 md:pl-0 lg:px-0 lg:pb-0 lg:text-left ">
                            Samy fue una pequeña Puddle, una perrita alegre, juguetona y llena de felicidad que dejó una huella profunda en el corazón de su familia. Siempre fue muy querida por todos, aunque también tenía su carácter bravo, que la hacía única. Amaba su caja, el pollito, y su comida húmeda en lata, pequeños placeres que disfrutaba con entusiasmo.
                            <br />
                            <br />
                            El 12 de junio de 2024, Samy partió, dejando hermosos recuerdos y el amor que compartió con su mamá. Hasta el último momento, Samy estuvo a su lado, queriéndola y haciéndola feliz. Su amor incondicional y leal será recordado siempre con mucho cariño.
                        </motion.p>
                    </motion.dl>
                </motion.dl>
            </motion.section>
        </motion.div>
    )
};

export default SamyCard;