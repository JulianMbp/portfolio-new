'use client'
import Presentacion from "../components/card";
import Experience from "../components/xpcard";

export default function Experiencia(){
    return(
        <section className="w-full min-h-screen font-mono grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] justify-center overflow-x-hidden px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="order-1 p-2 sm:p-3 md:p-4 lg:p-5">
                <Presentacion/>
            </div>
            <div className="font-bold text-azul-50 drop-shadow-2xl mt-4 sm:mt-0 lg:-mt-10 text-center order-2 col-span-1 lg:col-span-2 justify-center items-center">
                <Experience/>
            </div>
        </section>
    );
}
