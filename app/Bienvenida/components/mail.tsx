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
    <div className="relative flex items-center gap-1 sm:gap-2">
      <p className="text-[10px] sm:text-xs truncate max-w-[100px] sm:max-w-[120px] md:max-w-full">julian.bastidasmp@gmail.com</p>
      <a
        className="hover:text-blue-500 hover:underline-offset-1 active:scale-95 active:duration-200 hover:scale-110 transition-all text-[10px] sm:text-xs cursor-pointer relative flex-shrink-0"
        onClick={copyToClipboard}
        aria-label="Copiar correo electrónico"
      >
        <MdContentCopy className="" />
      </a>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-full left-0 mt-1 w-max bg-gray-800 text-white text-[8px] sm:text-[10px] rounded-md py-0.5 px-1 shadow-md z-10">
          ¡Copiado!
        </div>
      )}
    </div>
  );
};

export default CopyEmail;
