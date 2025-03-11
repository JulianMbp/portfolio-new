import { Typewriter } from "react-simple-typewriter";

const SobreMi = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-2 sm:p-3 md:p-4 lg:p-6 m-1 sm:m-2 rounded-2xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-azul-50 drop-shadow-2xl p-1 sm:p-2 md:p-3 font-bold h-12 sm:h-16 md:h-20 lg:h-28 overflow-hidden">
      <Typewriter
          words={[
            "_Sobre Mi"          
]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={80}
          delaySpeed={4000}
        />
        
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-azul-50 drop-shadow-2xl p-1 sm:p-2 md:p-3 text-center">    
        ¡Hola! 👋 Soy Julián, ingeniero de software 🧑‍💻.Me encanta crear cosas innovadoras y llevar ideas al siguiente nivel 🚀. Soy una persona divertida, extrovertida y me apasiona programar 💡💻.Vivo en la hermosa ciudad de Pasto 🏞️.Siempre que te cruces conmigo, te recibiré con mi mejor sonrisa. 😁✨
      </p>
    </div>
  );
};

export default SobreMi;
