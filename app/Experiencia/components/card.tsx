'use client'
import Me from "@/./public/img/julian-pixel (1).webp";
import ButtonCV from "@/app/Experiencia/components/ButtonCV";
import ButtonPage from "@/app/Experiencia/components/ButtonContact";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";


export default function Presentacion() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="relative">
            {/* Burbuja al lado izquierdo - Responsive */}
            {!isVisible && (
                <button
                    onClick={toggleVisibility}
                    className="fixed top-4 sm:top-6 md:top-8 lg:top-10 left-2 sm:left-3 md:left-4 lg:left-5 bg-white p-1 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
                >
                    <Image
                        className="rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
                        height={50}
                        width={50}
                        src={Me}
                        alt="Profile Bubble"
                    />
                </button>
            )}

            {/* Componente principal - Responsive */}
            <div
                className={`fixed top-4 sm:top-6 md:top-8 lg:top-10 left-2 sm:left-3 md:left-4 lg:left-5 grid grid-cols-1 gap-1 sm:gap-2 items-center bg-gradient-to-bl from-azul-400 via-azul-700 to-azul-900 border-2 border-black text-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 md:p-5 z-50 transition-all duration-700 transform ${
                    isVisible
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-0 -translate-y-10 opacity-0"
                }`}
                style={{ width: "280px", maxWidth: "90vw" }} // Ajuste responsive
            >
                <div className="flex gap-1 col-span-1 -mt-1 sm:-mt-2 -ml-1 sm:-ml-2 justify-start items-start">
                    <button onClick={toggleVisibility} className="h-3 w-3 sm:h-4 sm:w-4 rounded-full justify-center items-center flex text-center bg-red-500 group">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <IoMdClose className="h-2 sm:h-3 md:h-4 text-black"/>
                        </div>
                    </button>
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-yellow-500 justify-center items-center flex text-center"></div>
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-500"></div>
                </div>
                
                <div className="flex flex-col mt-2 sm:mt-3 items-center">
                    {/* Foto de perfil y texto - Responsive */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-4 items-center">
                        <Image
                            className="rounded-full shadow-lg h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-cover"
                            height={80}
                            width={80}
                            src={Me}
                            alt="Julian"
                        />
                        <div className="flex flex-col text-center sm:text-left mt-2 sm:mt-0">
                            <h1 className="text-lg sm:text-xl font-bold drop-shadow-md">
                                Julian_Mbp.dev
                            </h1>
                            <h2 className="text-xs sm:text-sm opacity-80 w-full sm:w-40 md:w-48 lg:w-64">
                                <Typewriter
                                    words={[
                                        "Ingeniero de Software",
                                        "Full Stack Developer",
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </h2>
                        </div>
                    </div>

                    {/* Botones - Responsive */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-3 mt-3 sm:mt-4 w-full">
                        <ButtonPage />
                        <ButtonCV />
                    </div>
                </div>
            </div>
        </div>
    );
}
