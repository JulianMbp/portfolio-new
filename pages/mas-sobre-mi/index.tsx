'use client';

import Footer from "@/app/Bienvenida/sections/footer";
import Header from "@/app/Experiencia/components/header";
import Mas from "@/app/mas-sobre-mi/sections/mas-sobre-mi";

export default function Home() {
    return (
        <section className="bg-gradient-to-tl font-mono from-azul-600 to-azul-200 
                    flex flex-col justify-center items-center overflow-hidden scroll inset-0 transition-all ">
            <Header></Header>
            <Mas></Mas>
            <Footer/>
        </section>
    );
}