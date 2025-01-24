'use client';
import Proyectos from "@/app/proyectos/sections/proyecto";
import Header from "@/app/Experiencia/components/header";
import Footer from "@/app/Bienvenida/sections/footer";


export default function Home() {
    return (
        <section className="bg-gradient-to-bl font-mono from-azul-600 to-azul-200 
                    flex flex-col justify-center items-center overflow-hidden scroll inset-0 transition-all  ">
            <Header></Header>
            <Proyectos></Proyectos>
            <Footer></Footer>
        </section>
    );
}