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
    <div className="relative flex items-start gap-1 sm:gap-2">
      <a className="text-xs sm:text-sm hover:text-blue-500 hover:underline-offset-1 hover:scale-110 transition-all truncate">
        julian.bastidasmp@gmail.com
      </a>
      <button
        className="hover:text-blue-500 active:scale-95 active:duration-200 hover:scale-110 transition-all cursor-pointer flex-shrink-0 p-0.5"
        onClick={copyToClipboard}
        aria-label="Copiar correo electrónico"
      >
        <MdContentCopy className="h-3 w-3 sm:h-4 sm:w-4" />
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
