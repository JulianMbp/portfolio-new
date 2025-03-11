'use client'
import { FaFileDownload } from 'react-icons/fa';

const ButtonCV: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV_Julian_Bastidas.pdf';
        link.download = 'CV_Julian_Bastidas.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="w-full">
            <button
                className='h-8 sm:h-10 md:h-12 w-full shadow-lg drop-shadow-lg duration-300 flex items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl p-1 sm:p-2 md:p-3 bg-gradient-to-br from-azul-700 via-azul-600 to-azul-500 gap-1 sm:gap-2 
                hover:border-hidden hover:scale-105 active:scale-95 active:duration-200 
                hover:shadow-lg transition-all'
                onClick={handleDownload}
            >
                <FaFileDownload className="order-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-azul-50" />
                <h1 className="text-azul-50 order-1 font-medium text-xs sm:text-sm md:text-base">Descargar CV</h1>
            </button>
        </section>
    );
};

export default ButtonCV;