'use client';
import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const colombiaTime = new Date().toLocaleTimeString("es-CO", {
        timeZone: "America/Bogota",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(colombiaTime);
    };

    updateTime(); // Actualizar de inmediato al cargar
    const timer = setInterval(updateTime, 1000); // Actualizar cada segundo

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <div className="flex items-center font-mono justify-center text-white">
        <p className="text-lg font-mono">{time}</p>
    </div>
  );
};

export default Clock;
