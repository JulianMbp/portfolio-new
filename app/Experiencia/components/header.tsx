'use client';

import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Header() {
    return (
        <div className="my-5 justify-around flex px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-around w-full gap-2 sm:gap-4">
                <button className="h-10 sm:h-12 md:h-14 lg:h-16 order-2 shadow-xl drop-shadow-xl duration-300 flex items-center rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-1 sm:gap-2 
                    hover:border-hidden hover:scale-105 sm:hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-xl transition-all">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                    </svg>
                    <Link href="/experiencia" className="text-xs sm:text-sm md:text-base lg:text-lg text-azul-50 p-1 sm:p-2">Experiencia</Link>
                </button> 
                <button className="h-10 sm:h-12 md:h-14 lg:h-16 order-1 shadow-xl drop-shadow-xl duration-300 flex items-center rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-1 sm:gap-2 sm:gap-3 
                    hover:border-hidden hover:scale-105 sm:hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-xl transition-all">
                    <FaHome className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white"/>
                    <Link href="/" className="text-xs sm:text-sm md:text-base lg:text-lg text-azul-50 p-1 sm:p-2">Inicio</Link>
                </button>
                
                <button className="h-10 sm:h-12 md:h-14 lg:h-16 order-3 shadow-xl drop-shadow-xl duration-300 flex items-center rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-1 sm:gap-2 sm:gap-3 
                    hover:border-hidden hover:scale-105 sm:hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-xl transition-all">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <Link href="/proyectos" className="text-xs sm:text-sm md:text-base lg:text-lg text-azul-50 p-1 sm:p-2">Proyectos</Link>
                </button>
                <button className="h-10 sm:h-12 md:h-14 lg:h-16 order-4 shadow-xl drop-shadow-xl duration-300 items-center rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-1 sm:gap-2 sm:gap-3 
                    hover:border-hidden hover:scale-105 sm:hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-xl transition-all flex">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    <Link href="/mas-sobre-mi" className="text-xs sm:text-sm md:text-base lg:text-lg text-azul-50 p-1 sm:p-2">Mas_Sobre_Mi</Link>
                </button>
            </div>
        </div>
    );
}