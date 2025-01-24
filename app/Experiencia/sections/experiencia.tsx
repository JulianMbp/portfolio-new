'use client'
import Presentacion from "../components/card";
import Experience from "../components/xpcard";
export default function Experiencia(){
    return(
        <section className="w-screen font-mono  grid grid-cols-[0.4fr_1fr] justify-center overflow-y-hidden inset-0">
            <div className="order-1 p-3">
                <Presentacion/>
            </div>
            <div className="font-bold text-azul-50 drop-shadow-2xl -mt-10 text-center order-2 col-span-2 justify-center items-center">
                
                <Experience/>
            </div>
        </section>
    );
}
