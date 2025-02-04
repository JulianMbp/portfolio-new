'use client'
import Presentacion from "@/app/Experiencia/components/card";
import Pets from '@/app/mas-sobre-mi/sections/pets';
import Video from "@/app/mas-sobre-mi/sections/video";



export default function Proyectos(){
    return(
        <section className="font-mono  grid grid-cols-[0.4fr_1fr] justify-center overflow-y-hidden inset-0">
            <div className="order-1 p-3">
                <Presentacion></Presentacion>
            </div>
            <div className="font-bold text-azul-50 drop-shadow-2xl text-center order-2 col-span-2 justify-center items-center">
                <div className="flex flex-col gap-y-52 justify-center items-center mb-[10%] h-full w-full ">
                    <Video/>
                    <Pets/>
                </div>
            </div>
        </section>
    );
}
