import React from "react";
import { Typewriter } from "react-simple-typewriter";

const SobreMi = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-900 p-10 m-3 rounded-2xl">
      <h1 className="text-9xl text-azul-50 drop-shadow-2xl p-5 font-bold h-40">
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
      <p className="text-2xl text-azul-50 drop-shadow-2xl p-5 text-center">    
        ¡Hola! 👋 Soy Julián, ingeniero de software 🧑‍💻.Me encanta crear cosas innovadoras y llevar ideas al siguiente nivel 🚀. Soy una persona divertida, extrovertida y me apasiona programar 💡💻.Vivo en la hermosa ciudad de Pasto 🏞️.Siempre que te cruces conmigo, te recibiré con mi mejor sonrisa 😁✨,
      </p>
    </div>
  );
};

export default SobreMi;
