'use client';
import Me from '@/public/img/julian-pixel.jpeg';
import Image from 'next/image';
import ButtonPage from '../components/ButtonContact';
import ButtonCV from '../components/ButtonCV';
import { Typewriter } from 'react-simple-typewriter';

function Bienvenida() {
    return (
        <section className="h-screen w-full flex justify-center items-center overflow-y-hidden inset-0">
            <div className='flex justify-center items-center gap-x-5'>
                <div className='flex justify-center items-center'>
                    <Image className="rounded-full shadow-2xl shadow-black" src={Me} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className=' text-8xl text-center text-azul-100 drop-shadow-2xl shadow-black font-bold'>
                        Julian_Mbp.dev
                    </h1>
                    <h1 className=' text-4xl text-center text-azul-50 drop-shadow-2xl shadow-black opacity-80 font-SemiBold'>
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
                    <div className='flex gap-x-5 mt-10'>
                        <ButtonPage></ButtonPage>
                        <ButtonCV></ButtonCV>
                    </div>
                </div>
            </div>


        </section>
);
}
export default Bienvenida;