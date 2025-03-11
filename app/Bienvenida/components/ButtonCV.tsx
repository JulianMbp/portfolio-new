'use client'

function ButtonCV(){
    return(
        <button className="h-10 sm:h-12 md:h-14 lg:h-16 w-full sm:w-auto duration-300 flex items-center justify-center rounded-xl sm:rounded-2xl md:rounded-3xl p-2 sm:p-3 
            bg-gradient-to-br from-azul-500 via-azul-600 to-azul-700 gap-2 sm:gap-3 
            shadow-xl drop-shadow-xl hover:border-hidden hover:scale-105 sm:hover:scale-110 active:scale-95 active:duration-200 
            hover:shadow-xl transition-all" >
            <a className="flex gap-1 sm:gap-2 items-center"
                href="https://drive.google.com/file/d/12j5U5CZJAC6yy3Mg0jEfXIMPy9fz3N3t/view?usp=drive_link">
                <dl className="flex text-azul-50 font-medium text-sm sm:text-base md:text-lg lg:text-2xl">
                    <h1 className="">Descargar</h1>
                    <h1 className='ml-1'>CV</h1>
                </dl>
                <svg className="animate-bounce h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-azul-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
            </a>
        </button>
    );
}

export default ButtonCV;