'use client';

export default function btnAccion() {
    return (
    <div className="my-5 justify-around flex px-32">
        <button className="h-16 shadow-2xl drop-shadow-2xl duration-300 flex items-center rounded-3xl p-3 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-2 
            hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
            hover:shadow-2xl transition-all ">
                                    <svg className="h-6 w-6 text-slate-100 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                    </svg>
        <a href="/experiencia" className="text-xl text-azul-50 p-2">Experiencia</a>
        </button>
        <button className="h-16 shadow-2xl drop-shadow-2xl duration-300 flex items-center rounded-3xl p-3 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-3 
            hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
            hover:shadow-2xl transition-all ">
                                    <svg className="h-5 w-5 text-slate-100 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
        <a href="/proyectos" className="text-xl text-azul-50 p-2">Proyectos</a>
        </button>
        <button className="h-16 shadow-2xl drop-shadow-2xl duration-300 items-center rounded-3xl p-3 bg-gradient-to-t from-azul-700 via-azul-800 to-azul-900 gap-3 
            hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
            hover:shadow-2xl transition-all flex ">
                    <svg className="h-5 w-5 text-slate-100 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
        <a href="/mas-sobre-mi" className="text-xl text-azul-50 p-2">Mas_Sobre_Mi</a>
        </button>
    </div>
    );
}