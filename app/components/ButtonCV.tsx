'use client'

function ButtonCV(){
    return(
        <button className=" h-16 duration-300 flex items-center rounded-3xl p-3 
            bg-gradient-to-br from-azul-500 via-azul-600 to-azul-700 gap-3 
            shadow-2xl drop-shadow-2xl hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
            hover:shadow-2xl transition-all  " >
            <a className="flex gap-2"
                href="https://drive.google.com/file/d/12j5U5CZJAC6yy3Mg0jEfXIMPy9fz3N3t/view?usp=drive_link">
            <dl className="flex text-azul-50 font-medium  text-2xl">
                <h1 className="">Descargar</h1>
                <h1 className=''>CV</h1>
            </dl>
            <svg className="animate-bounce h-10 w-10 text-azul-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
            </a>
    </button>
    );
}

export default ButtonCV;