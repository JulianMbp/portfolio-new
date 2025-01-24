'use client'
import { useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Me from "@/./public/img/julian-pixel (1).webp";
import ButtonCV from "@/app/Experiencia/components/ButtonCV";
import ButtonPage from "@/app/Experiencia/components/ButtonContact";
import { IoMdClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdOpenInFull } from "react-icons/md";

export default function Presentacion() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        
        <div className="relative">
            {/* Burbuja al lado izquierdo */}
            {!isVisible && (
                <button
                    onClick={toggleVisibility}
                    className="fixed top-10 left-5 bg-white p-1 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
                >
                    <Image
                        className="rounded-full"
                        height={50}
                        width={50}
                        src={Me}
                        alt="Profile Bubble"
                    />
                </button>
            )}

            {/* Componente principal */}
            <div
                className={`fixed top-10 left-5 grid grid-cols-1 gap-2 items-center bg-gradient-to-bl from-azul-400 via-azul-700 to-azul-900 border-2 border-black text-white rounded-2xl shadow-2xl p-5 z-50 transition-all duration-700 transform ${
                    isVisible
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-0 -translate-y-10 opacity-0"
                }`}
                style={{ width: "300px" }} // Ajusta el tamaño del componente
            >
            
            <div className="flex gap-1 col-span-1 -mt-2 -ml-2  justify-start items-start ">
            <button onClick={toggleVisibility} className="h-4 w-4 rounded-full justify-center items-center flex text-center bg-red-500 group">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IoMdClose className="h-4 text-black"/>
                </div>
            </button>

                <div className=" h-4 w-4 rounded-full bg-yellow-500 justify-center items-center flex text-center">

                </div>
                <div className="h-4 w-4 rounded-full bg-green-500">

                </div>
            </div>
                <div className="flex flex-col mt-3 items-center">
                    {/* Foto de perfil y texto */}
                    <div className="flex gap-x-4 items-center">
                        <Image
                            className="rounded-full shadow-lg"
                            height={80}
                            width={80}
                            src={Me}
                            alt="Julian"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold drop-shadow-md">
                                Julian_Mbp.dev
                            </h1>
                            <h2 className="text-sm opacity-80 w-64">
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

                    {/* Botones */}
                    <div className="flex gap-x-3 mt-4">
                        <ButtonPage />
                        <ButtonCV />
                    </div>
                </div>
            </div>
        </div>
    );
}
