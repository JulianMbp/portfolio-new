'use client';

import Footer from "@/app/Bienvenida/sections/footer";
import Experiencia from "@/app/Experiencia/sections/experiencia";

export default function Home() {
    return (
        <section className="bg-gradient-to-tl font-mono from-azul-600 to-azul-200 
                    flex flex-col justify-center items-center overflow-hidden scroll inset-0 transition-all ">
            <Experiencia></Experiencia>
            <Footer/>
        </section>
    );
}