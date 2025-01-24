'use client'
import Presentacion from "@/app/Experiencia/components/card";

export default function Proyectos(){
    return(
        <section className="w-screen font-mono  grid grid-cols-[0.4fr_1fr] justify-center overflow-y-hidden inset-0">
            <div className="order-1 p-3">
                <Presentacion></Presentacion>
            </div>
            <div className="font-bold text-azul-50 drop-shadow-2xl text-center order-2 col-span-2 justify-center items-center">
                
            </div>
        </section>
    );
}
