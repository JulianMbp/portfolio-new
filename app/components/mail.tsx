'use client'

import React from "react";
import { Toaster, toast } from "react-hot-toast";

const CopyEmail: React.FC = () => {
  const copyToClipboard = async () => {
      await navigator.clipboard.writeText("julian.bastidasmp@gmail.com");
      toast.success("¡Correo copiado al portapapeles!");
  };

  return (
    <div className="flex flex-col items-center">
      <a
        className="hover:text-blue-500 hover:underline-offset-1 hover:scale-110 transition-all text-xl cursor-pointer"
        onClick={copyToClipboard}
      >
        julian.bastidasmp@gmail.com
      </a>

      {/* Contenedor de toasts */}
      <Toaster position="bottom-center" />
    </div>
  );
};

export default CopyEmail;
