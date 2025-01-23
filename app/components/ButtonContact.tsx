'use client';
import Modal from '@/app/components/Modal';
import { useState } from 'react';
import { IoIosMail } from 'react-icons/io';
import Mail from './mail';


const ButtonPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
      <section>
        <button
        className='h-16 shadow-2xl drop-shadow-2xl duration-300 flex items-center rounded-3xl p-3 bg-gradient-to-br from-azul-500 via-azul-600 to-azul-700 gap-3 
            hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
            hover:shadow-2xl transition-all '
        onClick={openModal}>
                <svg className="order-2 h-8 w-8 text-azul-50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <h1 className="text-azul-50 order-1 font-medium font-moono text-2xl">Contactame</h1>
            </button>
      <br />
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Ingeniero de Software" >
        <p className="font-semibold text-lg text-azul-400">Numero de Contacto</p>
        <p className="text-zinc-950">315-242-74-21</p>
        <p className="font-semibold  text-lg text-azul-400">Correo Electronico</p>
        <dl className="flex items-center justify-between gap-x-4">
        <Mail></Mail>
          <a className="duration-300 gap-1 text-slate-50 w-auto text-nowrap flex items-center rounded-3xl px-1 py-2 text-xs md:text-lg bg-azul-500
                    shadow-xl hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all" href="mailto:julian.bastidasmp@gmail.com">
                      <IoIosMail className=" h-8 w-8"></IoIosMail>
                      <h1 className="md:block hidden">Escribir Correo</h1>
                      </a>
          </dl>
      </Modal>
      </section>
    );
};
export default ButtonPage;