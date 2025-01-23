'use client';
import Modal from '@/app/Bienvenida/components/Modal';
import { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from 'react-icons/io';
import { MdAttachEmail } from "react-icons/md";
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import Mail from '../components/mail';



const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
    <footer className='justify-items-end   flex flex-col text-azul-50 items-center justify-center border-t-2 border-slate-50 border-opacity-80 w-screen py-2 overflow-hidden'>
        Copyright &copy; 2024

        <dl className="flex gap-3 mb-5 mt-5">
            <a href=" mailto:julian.bastidasmp@gmail.com" className="order-6 hover:scale-150 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all">
                <MdAttachEmail className="h-8 w-8 text-slate-100"/>
            </a>
            <a href="https://github.com/JulianMbp " className="order-5 hover:scale-150 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all">
                <SlSocialGithub className="order-5 h-8 w-8 text-slate-100"/>
            </a>
            <a href="https://www.facebook.com/JulianBastidasPerez.999" className="order-1 hover:scale-150 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all">
                <FaFacebookSquare className="order-1 h-8 w-8 text-slate-100"/>
            </a>
            <a href="https://www.instagram.com/julian_mbp/" className="order-2 hover:scale-150 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all">
                <SlSocialInstagram className="order-2 h-8 w-8 text-slate-100"/>
            </a>
            <a href="https://www.linkedin.com/in/julian-bastidas-27779b18b/" className="order-3 hover:scale-150 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all">
                <SlSocialLinkedin className="order-3 h-8 w-8 text-slate-100"/>
            </a> 
            <a href="https://x.com/JbastidasP09" className="order-4 hover:scale-150 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all">
                <SlSocialTwitter className="order-4 h-8 w-8 text-slate-100"/>
            </a>
        </dl>
        <h1 className="flex gap-1">Hecho con<svg className="h-6 w-6 text-slate-100 animate-pulse "  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>        Por Julian B.</h1>
        
        <ul className='flex text-center gap-5 py-4 text-sm'>
        <li>
        <Modal isOpen={isModalOpen} onClose={closeModal} title="Ingeniero de Software" >
        <p className="font-semibold text-lg text-azul-400">Numero de Contacto</p>
        <p className="text-zinc-950">315-242-74-21</p>
        <p className="font-semibold  text-lg text-azul-400">Correo Electronico</p>
        <dl className="flex items-center justify-between gap-x-4">
        <Mail></Mail>
          <a className="duration-300 gap-1 text-slate-50 flex items-center rounded-3xl px-1 py-2 text-xs md:text-lg bg-azul-500
                    shadow-xl hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all" href="mailto:julian.bastidasmp@gmail.com">
                      <IoIosMail className=" h-8 w-8"></IoIosMail>
                      <h1 className="md:block hidden">Escribir Correo</h1>
                      </a>
          </dl>
      </Modal>
            <a href='#contact' onClick={openModal}>Contactame!</a>
        </li>
        </ul>
    </footer>
    );
};

export default Footer;