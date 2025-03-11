'use client';

import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";

const CopyEmail: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText("julian.bastidasmp@gmail.com");
    setShowTooltip(true);

    // Ocultar el tooltip después de 2 segundos
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <div className="relative flex items-center gap-1 sm:gap-2 w-full">
      <p className="text-xs sm:text-sm md:text-base truncate w-full">julian.bastidasmp@gmail.com</p>
      <button
        className="hover:text-blue-500 active:scale-95 active:duration-200 hover:scale-110 transition-all cursor-pointer flex-shrink-0 p-1"
        onClick={copyToClipboard}
        aria-label="Copiar correo electrónico"
      >
        <MdContentCopy className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-full left-0 mt-1 w-max bg-gray-800 text-white text-xs rounded-md py-1 px-2 shadow-md z-10">
          ¡Copiado!
        </div>
      )}
    </div>
  );
};

export default CopyEmail;
