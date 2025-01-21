"use client"

import Image from "next/image";
import useWindowWidth from "./hooks/widthHooks";

const text =
  "Soy Tecnólogo en Informática con experiencia en desarrollo de proyectos utilizando tecnologías como React, Next.js, Tailwind CSS, Spring Boot, etc. Me destaco por mi capacidad de trabajo en equipo, adaptabilidad y enfoque en resultados. Busco aportar mis conocimientos técnicos mientras continúo creciendo profesionalmente y contribuyo al éxito de la organización.";

export default function Home() {
  const width = useWindowWidth();

  return (
    <section className={`${width > 750 ? "w-4/5 mx-auto" : "px-4"} mt-16 flex flex-col md:flex-row items-center`}>
      <div className="md:w-1/2 text-justify text-lg space-y-4">
        <p>{text}</p>
        <a
          href="/proyectos"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Ver Proyectos
        </a>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/images/ProfileImage.png" // Reemplaza con el path de tu imagen
          alt="Pablo Suárez"
          width={400}
          height={400}
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}