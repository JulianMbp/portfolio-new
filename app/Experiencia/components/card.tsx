'use client'
import { useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Me from "@/./public/img/julian-pixel.jpeg";
import ButtonCV from "@/app/Experiencia/components/ButtonCV";
import ButtonPage from "@/app/Experiencia/components/ButtonContact";

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
                className={`fixed top-10 left-5 flex flex-col items-center bg-azul-400 border-2 border-black text-white rounded-2xl shadow-2xl p-5 z-50 transition-all duration-700 transform ${
                    isVisible
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-0 -translate-y-10 opacity-0"
                }`}
                style={{ width: "400px" }} // Ajusta el tamaño del componente
            >
                <div className="flex flex-col items-center">
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

                    {/* Botón para cerrar */}
                    <button
                        onClick={toggleVisibility}
                        className="mt-4 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-semibold shadow-md hover:bg-red-600 transition-colors"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
