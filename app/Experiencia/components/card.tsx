'use client'
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import Me from '@/./public/img/julian-pixel.jpeg'
import ButtonCV from "@/app/Experiencia/components/ButtonCV"
import ButtonPage from "@/app/Experiencia/components/ButtonContact"
export default function Presentacion(){
    return (
        <section className="font-mono">
            <div className='flex w-96 justify-start gap-x-5 col-span-2 border-4 rounded-2xl p-2 pt-5'>
                <div className='flex justify-center items-start'>
                    <Image className="rounded-full shadow-2xl shadow-black" height={100} src={Me} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className=' text-2xl text-center text-azul-100 drop-shadow-2xl shadow-black font-bold'>
                        Julian_Mbp.dev
                    </h1>
                    <h1 className='w-64 text-lg text-center text-azul-50 drop-shadow-2xl shadow-black opacity-80 font-SemiBold'>
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
                    <div className='flex gap-x-5'>
                        <ButtonPage></ButtonPage>
                        <ButtonCV></ButtonCV>
                    </div>
                </div>

            </div>
{/*             <div className='justify-center items-center flex col-span-2'>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="mt-16 size-[80px] animate-bounce text-slate-50"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" 
            />
          </svg>
            </div> */}
        </section>
        
    )
}