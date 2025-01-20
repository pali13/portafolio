"use client"

import useWindowWidth from "./hooks/widthHooks";

const text: string = "Soy Tecnólogo en Informática con experiencia en desarrollo de proyectos utilizando tecnologías como React, Next.js, Tailwind CSS, Spring Boot, etc. Me destaco por mi capacidad de trabajo en equipo, adaptabilidad y enfoque en resultados. Busco aportar mis conocimientos técnicos mientras continúo creciendo profesionalmente y contribuyo al éxito de la organización."

export default function Home() {
  const width = useWindowWidth();

  return (
    <div className={`${width > 750 ? 'w-3/5 mx-auto' : ''}`}>
      <div className="px-5 text-justify mt-16">
        {text}
      </div>
    </div>
  );
}
