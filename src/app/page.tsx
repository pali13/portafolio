"use client"

import useWindowWidth from "./hooks/widthHooks";

const text: string = "Egresado de la carrera de tecnologo en informática, esta carrera tiene un enfoque grande en lo que es la programación. Tengo varios proyectos personales en los que he estado trabajando este último tiempo así también como proyectos curriculares de mediano y gran porte."

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
