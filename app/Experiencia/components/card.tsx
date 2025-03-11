'use client'
import Me from "@/./public/img/julian-pixel (1).webp";
import ButtonCV from "@/app/Experiencia/components/ButtonCV";
import ButtonPage from "@/app/Experiencia/components/ButtonContact";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";


export default function Presentacion() {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // Función para cerrar la tarjeta al hacer clic fuera de ella
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (isVisible && cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setIsVisible(false);
            }
        };

        // Agregar el event listener cuando la tarjeta está visible
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside as EventListener);
            document.addEventListener('touchstart', handleClickOutside as EventListener);
        }

        // Limpiar el event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside as EventListener);
            document.removeEventListener('touchstart', handleClickOutside as EventListener);
        };
    }, [isVisible]);

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

            {/* Overlay para cerrar al tocar fuera */}
            {isVisible && (
                <div 
                    className="fixed inset-0 z-40" 
                    aria-hidden="true"
                />
            )}

            {/* Componente principal - Responsive */}
            <div
                ref={cardRef}
                className={`fixed top-4 sm:top-6 md:top-8 lg:top-10 left-2 sm:left-3 md:left-4 lg:left-5 grid grid-cols-1 gap-1 sm:gap-2 items-center bg-gradient-to-bl from-azul-400 via-azul-700 to-azul-900 border-2 border-black text-white rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-3 md:p-4 z-50 transition-all duration-700 transform ${
                    isVisible
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-0 -translate-y-10 opacity-0"
                }`}
                style={{ width: "260px", maxWidth: "85vw" }} // Ajuste responsive
            >
                <div className="flex gap-1 col-span-1 -mt-1 -ml-1 justify-start items-start">
                    <button onClick={toggleVisibility} className="h-3 w-3 sm:h-4 sm:w-4 rounded-full justify-center items-center flex text-center bg-red-500 group">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <IoMdClose className="h-2 sm:h-3 text-black"/>
                        </div>
                    </button>
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-yellow-500 justify-center items-center flex text-center"></div>
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-500"></div>
                </div>
                
                <div className="flex flex-col mt-2 items-center">
                    {/* Foto de perfil y texto - Responsive */}
                    <div className="flex flex-col gap-2 items-center">
                        <Image
                            className="rounded-full shadow-lg h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-cover"
                            height={80}
                            width={80}
                            src={Me}
                            alt="Julian"
                        />
                        <div className="flex flex-col text-center mt-1 sm:mt-2">
                            <h1 className="text-base sm:text-lg font-bold drop-shadow-md">
                                Julian_Mbp.dev
                            </h1>
                            <h2 className="text-xs sm:text-sm opacity-80 w-full">
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
                    <div className="flex flex-col gap-2 mt-2 sm:mt-3 w-full">
                        <ButtonPage />
                        <ButtonCV />
                    </div>
                </div>
            </div>
        </div>
    );
}
