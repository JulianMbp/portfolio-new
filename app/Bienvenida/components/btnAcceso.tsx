'use client';

import Link from "next/link";


export default function btnAccion() {
    return (
    <div className="my-1 sm:my-2 md:my-3 flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-1 sm:gap-2 px-1 sm:px-2 md:px-4 lg:px-8">
        <button className="w-full sm:w-auto h-8 sm:h-10 md:h-12 lg:h-14 shadow-xl drop-shadow-xl duration-300 flex items-center justify-center rounded-xl sm:rounded-2xl p-1 sm:p-2 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-1 
            hover:border-hidden hover:scale-105 active:scale-95 active:duration-200 
            hover:shadow-xl transition-all ">
                <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
                <Link href="/experiencia" className="text-[10px] sm:text-xs md:text-sm lg:text-base text-azul-50 p-0.5 sm:p-1">Experiencia</Link>
        </button>
        <button className="w-full sm:w-auto h-8 sm:h-10 md:h-12 lg:h-14 shadow-xl drop-shadow-xl duration-300 flex items-center justify-center rounded-xl sm:rounded-2xl p-1 sm:p-2 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-1 
            hover:border-hidden hover:scale-105 active:scale-95 active:duration-200 
            hover:shadow-xl transition-all ">
                <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <Link href="/proyectos" className="text-[10px] sm:text-xs md:text-sm lg:text-base text-azul-50 p-0.5 sm:p-1">Proyectos</Link>
        </button>
        <button className="w-full sm:w-auto h-8 sm:h-10 md:h-12 lg:h-14 shadow-xl drop-shadow-xl duration-300 flex items-center justify-center rounded-xl sm:rounded-2xl p-1 sm:p-2 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-1 
            hover:border-hidden hover:scale-105 active:scale-95 active:duration-200 
            hover:shadow-xl transition-all">
                <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                <Link href="/mas-sobre-mi" className="text-[10px] sm:text-xs md:text-sm lg:text-base text-azul-50 p-0.5 sm:p-1">Mas_Sobre_Mi</Link>
        </button>
    </div>
    );
}