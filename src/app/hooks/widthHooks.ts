"use client"

import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
        // Código que depende de `window`
        console.log(window.location.href);
    }
}, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Escuchar el evento de redimensionamiento
    window.addEventListener("resize", handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useWindowWidth;
