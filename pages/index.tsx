import Bienvenida from '@/app/Bienvenida/sections/bienvenida';
import Footer from '@/app/Bienvenida/sections/footer';
import SobreMi from '@/app/Bienvenida/sections/SobreMi';
import type { Metadata } from 'next';
import Exp from '@/app/Experiencia/components/card'

export const metadata: Metadata = {
  title: 'Portfolio de Julian B',
}

export default function Home() {
  return (
    <main className="bg-gradient-to-tl font-mono from-azul-200 to-azul-600 
                    flex flex-col justify-center items-center overflow-hidden scroll inset-0 transition-all ">
        <Bienvenida/>
        <SobreMi/>
        <Footer/>
        <Exp/> 
    </main>
  );
}
