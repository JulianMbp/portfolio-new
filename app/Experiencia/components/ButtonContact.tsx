'use client';
import Mail from '@/app/Bienvenida/components/mail';
import Modal from '@/app/Bienvenida/components/Modal';
import { useState } from 'react';
import { IoIosMail } from 'react-icons/io';


const ButtonPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
      <section className="w-full">
        <button
        className='h-8 sm:h-10 md:h-12 w-full shadow-lg drop-shadow-lg duration-300 flex items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl p-1 sm:p-2 md:p-3 bg-gradient-to-br from-azul-700 via-azul-600 to-azul-500 gap-1 sm:gap-2 
            hover:border-hidden hover:scale-105 active:scale-95 active:duration-200 
            hover:shadow-lg transition-all'
        onClick={openModal}>
                <svg className="order-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-azul-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <h1 className="text-azul-50 order-1 font-medium text-xs sm:text-sm md:text-base">Contactame</h1>
        </button>
      
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Ingeniero de Software" >
        <div className="p-2 sm:p-3 md:p-4">
          <p className="font-semibold text-base sm:text-lg text-azul-400">Numero de Contacto</p>
          <p className="text-zinc-950 text-sm sm:text-base">315-242-74-21</p>
          <p className="font-semibold text-base sm:text-lg text-azul-400 mt-2 sm:mt-3">Correo Electronico</p>
          <div className="flex flex-col w-full gap-2 sm:gap-3">
            <div className="w-full">
              <Mail />
            </div>
            <a className="duration-300 gap-1 text-slate-50 w-full text-nowrap flex items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl px-2 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-azul-500
                      shadow-lg hover:border-hidden hover:scale-105 active:scale-95 active:duration-200 
                      hover:shadow-lg transition-all" href="mailto:julian.bastidasmp@gmail.com">
              <IoIosMail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <span className="ml-1">Escribir Correo</span>
            </a>
          </div>
        </div>
      </Modal>
      </section>
    );
};
export default ButtonPage;