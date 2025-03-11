'use client';
import AboutMe from '@/public/img/AboutMePerfil.webp';
import Image from 'next/image';
import { useState } from 'react';
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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <main className="min-h-screen w-full flex justify-center items-center px-2 sm:px-4 md:px-8 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-10">
            <section className="border-2 rounded-2xl grid grid-cols-1 gap-4 border-black m-2 sm:m-3 md:m-4 lg:m-5 p-3 sm:p-4 md:p-5 h-full w-full drop-shadow-2xl shadow-2xl bg-azul-950 overflow-hidden relative">
                <Accion></Accion>
                
                {/* Botón de menú hamburguesa */}
                <button 
                    onClick={toggleMenu} 
                    className="absolute top-3 right-3 z-50 bg-azul-400 text-white p-2 rounded-full shadow-lg"
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {menuOpen ? (
                        <RiCloseFill className="h-6 w-6" />
                    ) : (
                        <RiMenu3Fill className="h-6 w-6" />
                    )}
                </button>
                
                {/* Menú lateral con información personal - Responsive y deslizable */}
                <div 
                    className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-60' : 'opacity-0 pointer-events-none'}`}
                    onClick={toggleMenu}
                ></div>
                
                <menu className={`fixed top-0 right-0 h-full w-64 sm:w-72 md:w-80 bg-azul-950 border-l-2 border-black shadow-2xl z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${menuOpen ? 'translate-x-0' : 'translate-x-full'} p-4`}>
                    <button 
                        onClick={toggleMenu} 
                        className="absolute top-3 right-3 z-50 bg-red-500 text-white p-2 rounded-full shadow-lg"
                        aria-label="Cerrar menú"
                    >
                        <RiCloseFill className="h-6 w-6" />
                    </button>
                    <div className='justify-center items-center flex px-2 sm:px-4 mt-10'>
                        <Image className="rounded-full shadow-2xl shadow-black w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover" src={AboutMe} alt="Foto de perfil de Julian" />
                    </div>
                    <div className='flex flex-col mb-2 mt-2 sm:mb-3 sm:mt-3'>
                        <h1 className='text-azul-50 items-start justify-center text-center text-lg sm:text-xl drop-shadow-2xl shadow-black'>
                            Julian M. Bastidas P.
                        </h1>
                        <div className='flex -mt-1 justify-center gap-x-2 sm:gap-x-3 text-azul-50 items-center text-xs opacity-50'>
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
                    
                    {/* Información de contacto y redes sociales - Responsive */}
                    <div className='flex pl-2 sm:pl-3 justify-start items-start text-azul-50 gap-2 mt-4'>
                        <MdOutlineWorkOutline className='h-4 w-4 sm:h-5 sm:w-5 text-azul-50 flex-shrink-0'></MdOutlineWorkOutline>
                        <p className='text-xs sm:text-sm'>Practicante ParqueSoft Nariño</p>
                    </div>
                    <div className='flex pl-2 sm:pl-3 justify-start items-start text-azul-50 gap-2 mt-2'>
                        <CiLocationOn className='h-4 w-4 sm:h-5 sm:w-5 text-azul-50 flex-shrink-0'></CiLocationOn>
                        <p className='text-xs sm:text-sm'>Colombia</p>
                    </div>
                    <div className='flex pl-2 sm:pl-3 justify-start items-start text-azul-50 gap-2 mt-2'>
                        <CiClock2 className='h-4 w-4 sm:h-5 sm:w-5 text-azul-50 flex-shrink-0'></CiClock2>
                        <Clock></Clock>
                        <p className='opacity-45 text-xs sm:text-sm'>(UTC-05:00)</p>
                    </div>
                    
                    <div className='flex pl-2 sm:pl-3 justify-start items-start text-azul-50 gap-2 mt-2'>
                        <CiLinkedin className='h-4 w-4 sm:h-5 sm:w-5 text-azul-50 flex-shrink-0'></CiLinkedin>
                        <a className='hover:text-blue-500 hover:underline-offset-1 hover:scale-110 transition-all text-xs sm:text-sm truncate' href='https://www.linkedin.com/in/julian-bastidas-27779b18b/'>julian-bastidas</a>
                    </div>
                    <div className='flex pl-2 sm:pl-3 justify-start items-start text-azul-50 gap-2 mt-2'>
                        <FaXTwitter className='h-4 w-4 sm:h-5 sm:w-5 text-azul-50 flex-shrink-0'></FaXTwitter>
                        <a className='hover:text-blue-500 hover:underline-offset-1 hover:scale-110 transition-all text-xs sm:text-sm' href='https://x.com/JbastidasP09'>@JBastidasP09</a>
                    </div>
                    <div className='flex pl-2 sm:pl-3 justify-start items-start text-azul-50 gap-2 mt-2'>
                        <FaInstagram className='h-4 w-4 sm:h-5 sm:w-5 text-azul-50 flex-shrink-0'></FaInstagram>
                        <a className='hover:text-blue-500 hover:underline-offset-1 hover:scale-110 transition-all text-xs sm:text-sm' href='https://www.instagram.com/julian_mbp/'>julian_mbp</a>
                    </div>
                    <div className='flex pl-2 sm:pl-3 justify-start items-start text-azul-50 gap-2 mt-2'>
                        <FaGithub className='h-4 w-4 sm:h-5 sm:w-5 text-azul-50 flex-shrink-0'></FaGithub>
                        <a className='hover:text-blue-500 hover:underline-offset-1 hover:scale-110 transition-all text-xs sm:text-sm' href='https://github.com/JulianMbp'>JulianMbp</a>
                    </div>
                    <div className='flex pl-2 sm:pl-3 justify-start items-start text-azul-50 gap-2 mt-2'>
                        <SiGmail className='h-4 w-4 sm:h-5 sm:w-5 text-azul-50 flex-shrink-0'></SiGmail>
                        <Mail></Mail>
                    </div>
                </menu>
                
                {/* Secciones de contenido principal - Responsive */}
                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                    <section className="border-2 mb-3 sm:mb-4 rounded-2xl w-full border-black p-2 sm:p-3 md:p-4 lg:p-5 drop-shadow-2xl shadow-2xl bg-gray-900 ">
                        <Accion></Accion>
                        <div className="flex justify-center w-full">
                            <Sobremi></Sobremi>
                        </div>
                    </section>
                    
                    <section className='mb-3 sm:mb-4'>
                        <Btn></Btn>
                    </section>
                    
                    <section className="border-2 rounded-2xl border-black p-2 sm:p-3 md:p-4 lg:p-5 w-full drop-shadow-2xl shadow-2xl bg-gray-900">
                        <Accion></Accion>
                        <div className='w-full overflow-x-auto'>
                            <Tech></Tech>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};