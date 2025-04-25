'use client';
import AboutMe from '@/public/img/AboutMePerfil.webp';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CiClock2, CiLinkedin, CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import Btn from '../components/btnAcceso';
import Accion from '../components/btnAccion';
import Mail from '../components/mail';
import Clock from '../components/reloj';
import Sobremi from '../components/SobreMI';
import Tech from '../components/tecnologias';

export default function SobreMi() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // Detectar tamaño de pantalla
    useEffect(() => {
        const checkScreenSize = () => {
            const isLarge = window.innerWidth >= 1024; // 1024px es el breakpoint lg en Tailwind
            setIsLargeScreen(isLarge);
            
            // Si cambia a pantalla grande, mostrar menú automáticamente
            if (isLarge && !menuOpen) {
                setMenuOpen(true);
            }
        };

        // Verificar al cargar
        checkScreenSize();
        
        // Verificar al redimensionar
        window.addEventListener('resize', checkScreenSize);
        
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <main className="min-h-screen w-full flex justify-center items-center px-2 sm:px-4 md:px-8 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-10">
            <section className="border-2 rounded-2xl border-black m-2 sm:m-3 md:m-4 lg:m-5 w-full drop-shadow-2xl shadow-2xl bg-azul-950 overflow-visible">
                <div className="ml-3 mt-3">
                    <Accion></Accion>
                </div>
                
                {/* Contenedor para el layout flexible */}
                <div className="flex flex-col lg:flex-row relative">
                    {/* Botón de menú hamburguesa - Solo visible en pantallas md y menores */}
                    <button 
                        onClick={toggleMenu} 
                        className="lg:hidden fixed top-2 right-7 z-50 bg-azul-400 text-white p-2 rounded-full shadow-lg hover:bg-azul-500 transition-colors duration-300"
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {menuOpen ? (
                            <RiCloseFill className="h-6 w-6" />
                        ) : (
                            <RiMenu3Fill className="h-6 w-6" />
                        )}
                    </button>
                    
                    {/* Overlay oscuro cuando el menú está abierto - Solo para pantallas pequeñas */}
                    <div 
                        className={`lg:hidden fixed inset-0 bg-black z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-60' : 'opacity-0 pointer-events-none'}`}
                        onClick={toggleMenu}
                    ></div>
                    
                    {/* Menú lateral - Fijo en pantallas grandes, deslizable en md y menores */}
                    <aside 
                        className={`fixed lg:static top-0 left-0 h-full w-72 sm:w-80 lg:w-80 bg-azul-950 border-r-2 border-black shadow-lg z-50 transition-all duration-300 ease-in-out transform ${
                            !isLargeScreen && !menuOpen ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                        } ${isLargeScreen ? 'lg:block' : menuOpen ? 'block' : 'hidden'}`}
                    >
                        <div className="p-6 h-full flex flex-col">
                            <button 
                                onClick={toggleMenu} 
                                className="lg:hidden absolute top-4 right-4 z-50 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
                                aria-label="Cerrar menú"
                            >
                                <RiCloseFill className="h-6 w-6" />
                            </button>
                            
                            {/* Foto de perfil */}
                            <div className='justify-center items-center flex px-2 sm:px-4 mt-8 lg:mt-4'>
                                <Image 
                                    className="rounded-full shadow-2xl shadow-black w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover border-2 border-azul-300" 
                                    src={AboutMe} 
                                    alt="Foto de perfil de Julian" 
                                />
                            </div>
                            
                            {/* Nombre y usuario */}
                            <div className='flex flex-col mb-4 mt-4'>
                                <h1 className='text-azul-50 items-start justify-center text-center text-base sm:text-lg drop-shadow-2xl shadow-black font-bold'>
                                    Julian M. Bastidas P.
                                </h1>
                                <div className='flex mt-1 justify-center gap-x-2 sm:gap-x-3 text-azul-50 items-center text-xs opacity-50'>
                                    <h2 className=''>
                                        Julian_Mbp
                                    </h2>
                                    <div className='font-bold text-lg'>
                                        ·
                                    </div>
                                    <h2>
                                        King Julian
                                    </h2>
                                </div>
                            </div>
                            
                            {/* Separador decorativo estilizado */}
                            <div className="flex items-center my-5">
                                <div className="h-0.5 bg-azul-700 flex-grow opacity-30 rounded-full"></div>
                                <div className="mx-2">
                                    <div className="w-2 h-2 bg-azul-400 rounded-full"></div>
                                </div>
                                <div className="h-0.5 bg-azul-700 flex-grow opacity-30 rounded-full"></div>
                            </div>
                            
                            {/* Información de contacto y redes sociales - Responsive */}
                            <div className='space-y-3'>
                                <div className='flex pl-2 justify-start items-center text-azul-50 gap-2 hover:bg-azul-900 p-2 rounded-lg transition-colors duration-300'>
                                    <MdOutlineWorkOutline className='h-4 w-4 sm:h-5 sm:w-5 text-azul-300 flex-shrink-0'></MdOutlineWorkOutline>
                                    <p className='text-xs sm:text-sm'>Practicante ParqueSoft Nariño</p>
                                </div>
                                <div className='flex pl-2 justify-start items-center text-azul-50 gap-2 hover:bg-azul-900 p-2 rounded-lg transition-colors duration-300'>
                                    <CiLocationOn className='h-4 w-4 sm:h-5 sm:w-5 text-azul-300 flex-shrink-0'></CiLocationOn>
                                    <p className='text-xs sm:text-sm'>Colombia</p>
                                </div>
                                <div className='flex pl-2 justify-start items-center text-azul-50 gap-2 hover:bg-azul-900 p-2 rounded-lg transition-colors duration-300'>
                                    <CiClock2 className='h-4 w-4 sm:h-5 sm:w-5 text-azul-300 flex-shrink-0'></CiClock2>
                                    <Clock></Clock>
                                    <p className='opacity-45 text-xs sm:text-sm'>(UTC-05:00)</p>
                                </div>
                            </div>
                            
                            {/* Separador decorativo estilizado */}
                            <div className="flex items-center my-5">
                                <div className="h-0.5 bg-azul-700 flex-grow opacity-30 rounded-full"></div>
                                <div className="mx-2">
                                    <div className="w-2 h-2 bg-azul-400 rounded-full"></div>
                                </div>
                                <div className="h-0.5 bg-azul-700 flex-grow opacity-30 rounded-full"></div>
                            </div>
                            
                            {/* Redes sociales */}
                            <div className='space-y-3'>
                                <div className='flex pl-2 justify-start items-center text-azul-50 gap-2 hover:bg-azul-900 p-2 rounded-lg transition-colors duration-300 group'>
                                    <CiLinkedin className='h-4 w-4 sm:h-5 sm:w-5 text-azul-300 group-hover:text-blue-400 flex-shrink-0 transition-colors duration-300'></CiLinkedin>
                                    <a className='text-xs sm:text-sm group-hover:text-blue-400 transition-colors duration-300 truncate' href='https://www.linkedin.com/in/julian-bastidas-27779b18b/'>julian-bastidas</a>
                                </div>
                                <div className='flex pl-2 justify-start items-center text-azul-50 gap-2 hover:bg-azul-900 p-2 rounded-lg transition-colors duration-300 group'>
                                    <FaXTwitter className='h-4 w-4 sm:h-5 sm:w-5 text-azul-300 group-hover:text-blue-400 flex-shrink-0 transition-colors duration-300'></FaXTwitter>
                                    <a className='text-xs sm:text-sm group-hover:text-blue-400 transition-colors duration-300' href='https://x.com/JbastidasP09'>@JBastidasP09</a>
                                </div>
                                <div className='flex pl-2 justify-start items-center text-azul-50 gap-2 hover:bg-azul-900 p-2 rounded-lg transition-colors duration-300 group'>
                                    <FaInstagram className='h-4 w-4 sm:h-5 sm:w-5 text-azul-300 group-hover:text-pink-400 flex-shrink-0 transition-colors duration-300'></FaInstagram>
                                    <a className='text-xs sm:text-sm group-hover:text-pink-400 transition-colors duration-300' href='https://www.instagram.com/julian_mbp/'>julian_mbp</a>
                                </div>
                                <div className='flex pl-2 justify-start items-center text-azul-50 gap-2 hover:bg-azul-900 p-2 rounded-lg transition-colors duration-300 group'>
                                    <FaGithub className='h-4 w-4 sm:h-5 sm:w-5 text-azul-300 group-hover:text-purple-400 flex-shrink-0 transition-colors duration-300'></FaGithub>
                                    <a className='text-xs sm:text-sm group-hover:text-purple-400 transition-colors duration-300' href='https://github.com/JulianMbp'>JulianMbp</a>
                                </div>
                                <div className='flex pl-2 justify-start items-center text-azul-50 gap-2 hover:bg-azul-900 p-2 rounded-lg transition-colors duration-300 group'>
                                    <SiGmail className='h-4 w-4 sm:h-5 sm:w-5 text-azul-300 group-hover:text-red-400 flex-shrink-0 transition-colors duration-300'></SiGmail>
                                    <Mail></Mail>
                                </div>
                            </div>
                        </div>
                    </aside>
                    
                    {/* Contenido principal */}
                    <div className="flex-1 p-5 sm:p-6 md:p-7 pt-16 lg:pt-6">
                        {/* Secciones de contenido principal - Responsive */}
                        <div className="flex flex-col gap-6 w-full">
                            <section className="border-2 rounded-2xl w-full border-black p-4 sm:p-5 md:p-6 drop-shadow-2xl shadow-2xl bg-gray-900 hover:shadow-azul-500/20 transition-shadow duration-300">
                                <div className="mb-2">
                                    <Accion></Accion>
                                </div>
                                <div className="flex justify-center w-full">
                                    <Sobremi></Sobremi>
                                </div>
                            </section>
                            
                            <section className='my-2'>
                                <Btn></Btn>
                            </section>
                            
                            <section className="border-2 rounded-2xl border-black p-4 sm:p-5 md:p-6 w-full drop-shadow-2xl shadow-2xl bg-gray-900 hover:shadow-azul-500/20 transition-shadow duration-300">
                                <div className="mb-2">
                                    <Accion></Accion>
                                </div>
                                <div className='w-full overflow-x-auto'>
                                    <Tech></Tech>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}