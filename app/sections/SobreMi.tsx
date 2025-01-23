'use client';
import AboutMe from '@/public/img/AboutMePerfil.jpg';
import Image from 'next/image';
import { CiClock2, CiLinkedin, CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Accion from '../components/btnAccion';
import Mail from '../components/mail';
import Clock from '../components/reloj';
import React from 'react';
import Sobremi from '../components/SobreMI';
import Tech from '../components/tecnologias';

export default function SobreMi() {
    return (
        <main className=" h-full w-full flex justify-center items-center">
            <section className=" border-2 pb-40 rounded-2xl grid-cols-[0.3fr] gap-x-10 grid-rows-[0.07fr] grid border-black m-5 p-5 h-full w-full drop-shadow-2xl shadow-2xl bg-azul-950">
                <Accion></Accion>
                <menu className=' order-1 justify-start flex flex-col gap-3'>
                    <div className=' justify-center items-center flex px-10'>
                        <Image className=" rounded-full  shadow-2xl shadow-black" src={AboutMe} alt="" />
                    </div>
                    <div className='flex flex-col mb-5 mt-5'>
                        <h1 className='text-azul-50 items-start justify-center text-center text-3xl drop-shadow-2xl shadow-black'>
                            Julian M. Bastidas P.
                        </h1>
                        <div className='flex -mt-2 justify-center gap-x-8 text-azul-50 items-center text-lg opacity-50'>
                            <h2 className=''>
                                Julian_Mbp
                            </h2>
                            <div className='font-bold text-2xl'>
                                ·
                            </div>
                            <h2>
                                King Julian
                            </h2>
                        </div>
                    </div>
                    <div className=' flex pl-7 justify-start items-start text-azul-50 gap-2'>
                        <CiLocationOn className='h-7 w-7 text-azul-50 '></CiLocationOn>
                        <p className=' text-xl'>Colombia</p>
                    </div>
                    <div className=' flex pl-7 justify-start items-start text-azul-50 gap-2'>
                        <CiClock2 className='h-7 w-7 text-azul-50'></CiClock2>
                        <Clock ></Clock>
                        <p className=' opacity-45 text-xl'>(UTC-05:00)</p>
                    </div>
                    
                    <div className=' flex pl-7 justify-start items-start text-azul-50 gap-2'>
                        <CiLinkedin className='h-7 w-7 text-azul-50'></CiLinkedin>
                        <a className='hover:text-blue-500 hover:underline-offset-1  hover:scale-110 transition-all text-xl' href='https://www.linkedin.com/in/julian-bastidas-27779b18b/'>julian-bastidas</a>
                    </div>
                    <div className=' flex pl-7 justify-start items-start text-azul-50 gap-2'>
                        <FaXTwitter className='h-7 w-7 text-azul-50'></FaXTwitter>
                        <a className='hover:text-blue-500 hover:underline-offset-1  hover:scale-110 transition-all text-xl' href='https://x.com/JbastidasP09'>@JBastidasP09</a>
                    </div>
                    <div className=' flex pl-7 justify-start items-start text-azul-50 gap-2'>
                        <FaInstagram className='h-7 w-7 text-azul-50'></FaInstagram>
                        <a className='hover:text-blue-500 hover:underline-offset-1 hover:scale-110 transition-all text-xl'href='https://www.instagram.com/julian_mbp/'>julian_mbp</a>
                    </div>
                    <div className=' flex pl-7 justify-start items-start text-azul-50 gap-2 '>
                        <FaGithub className='h-7 w-7  text-azul-50'></FaGithub>
                        <a className='hover:text-blue-500 hover:underline-offset-1 hover:scale-110 transition-all  text-xl' href='https://github.com/JulianMbp'>JulianMbp</a>
                    </div>
                    <div className=' flex pl-7 justify-start items-start text-azul-50 gap-3'>
                        <SiGmail className='h-7 w-7 -ml-1 text-azul-50'></SiGmail>
                        <Mail></Mail>
                    </div>
                </menu>
                <div className="order-2">
                <section className=" border-2 rounded-2xl w-full border-black p-5 drop-shadow-2xl shadow-2xl bg-gray-900">
                    <Accion></Accion>
                    <div className="">
                    <Sobremi></Sobremi>
                    </div>
                
                </section>
                <section className="col-start-2 order-2 border-2 rounded-2xl grid-cols-2 grid border-black p-5 w-full drop-shadow-2xl shadow-2xl bg-gray-900">
                    <Accion></Accion>
                    <div className='col-span-2'>
                    <Tech></Tech>
                    </div>
                    
                    
                </section>
                </div>
            </section>
        </main>
    );
};