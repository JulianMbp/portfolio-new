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
    <div className="relative flex items-center gap-5">
      <p>julian.bastidasmp@gmail.com</p>
      <a
        className="hover:text-blue-500 hover:underline-offset-1 active:scale-95 active:duration-200 hover:scale-110 transition-all text-xl cursor-pointer relative"
        onClick={copyToClipboard}
      >
        <MdContentCopy className="" />
      </a>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-full left-0 mt-2 w-max bg-gray-800 text-white text-sm rounded-md py-1 px-3 shadow-md">
          ¡Correo copiado al portapapeles!
        </div>
      )}
    </div>
  );
};

export default CopyEmail;
