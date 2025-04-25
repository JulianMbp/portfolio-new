'use client';
import Me from '@/public/img/AboutMePerfil.webp';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import ButtonPage from '../components/ButtonContact';
import ButtonCV from '../components/ButtonCV';

function Bienvenida() {
    return (
        <section className="h-screen w-full grid grid-cols-1 sm:grid-cols-2 justify-center items-center overflow-y-hidden inset-0 px-4 sm:px-6 md:px-8 lg:px-10">
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-x-5 col-span-1 sm:col-span-2 mt-10 sm:mt-16 md:mt-20'>
                <div className="flex justify-center items-center w-full sm:w-auto">
                    <Image 
                        className="rounded-full transition-all ease-in-out duration-300
                        h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px] lg:h-[400px] lg:w-[400px]
                        object-cover shadow-2xl shadow-black" 
                        src={Me} 
                        alt="Foto de perfil de Julian" 
                        priority
                    />
                </div>
                <div className='flex flex-col justify-center items-center text-center mt-4 sm:mt-0'>
                    <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl text-center text-azul-100 drop-shadow-2xl shadow-black font-bold'>
                        Julian_Mbp.dev
                    </h1>
                    <h1 className='text-lg sm:text-xl md:text-2xl lg:text-4xl text-center text-azul-50 drop-shadow-2xl shadow-black opacity-80 font-SemiBold mt-2'>
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
                    </h1>
                    <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start sm:flex-row gap-3 sm:gap-x-5 mt-6 sm:mt-8 md:mt-10'>
                        <ButtonPage></ButtonPage>
                        <ButtonCV></ButtonCV>
                    </div>
                </div>
            </div>
            <div className='justify-center items-center flex col-span-1 sm:col-span-2 mt-8 sm:mt-12'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="size-[40px] sm:size-[60px] md:size-[80px] animate-bounce text-slate-50"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" 
                    />
                </svg>
            </div>
        </section>
    );
}
export default Bienvenida;