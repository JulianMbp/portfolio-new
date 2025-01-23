import Bienvenida from '@/app/sections/bienvenida';
import SobreMi from '@/app/sections/SobreMi';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio de Julian B',
}

export default function Home() {
  return (
    <main className="bg-gradient-to-br font-mono from-azul-200 to-azul-400 
                    flex flex-col justify-center items-center overflow-hidden scroll inset-0 transition-all ">
        <Bienvenida/>
        <SobreMi/>

        
    </main>
  );
}
