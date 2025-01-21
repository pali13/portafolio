"use client"

import useWindowWidth from "@/app/hooks/widthHooks";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImageCarouselModal } from "../components/image-carousel-modal";

const projects = [
  {
    name: "Los Ceibos Jardines",
    description: "Aplicacíon para la gestión de clientes y administración de parques, orientado a empresa de jardinería, realizado en React con typescript",
    repo: "https://github.com/pali13/pali13-los-ceibos-jardines-frontend",
    type: "frontend"
  },
  {
    name: "Los Ceibos Jardines",
    description: "Backend con registro de usuarios, parques, facturas, pagos, planificación de horarios y generación de PDFs, realizado en Java con Spring boot, JWT, lombok",
    repo: "https://github.com/pali13/pali13-los-ceibos-jardines-backend",
    type: "backend"
  },
  {
    name: "Control de consumo en el Hogar",
    description: "Aplicación web para el control del consumo de aparatos electrónicos en el hogar, con diferentes tipos de tarifas y horarios",
    repo: "https://github.com/pali13/energy-consumption-tracker",
    type: "frontend"
  },
  {
    name: "Control de consumo en el Hogar",
    description: "Backend para el proyecto del control de consumo de aparatos electrónicos en el hogar y con registro de usuario",
    repo: "https://github.com/pali13/energy-consumption-tracker-backend",
    type: "backend"
  },
  {
    name: "Ecommerce",
    description: "Aplicación web para la gestión de un ecommerce con diferentes roles de usuarios y experiencías de usuarios según el rol",
    repo: "https://github.com/pali13/pali13-los-ceibos-jardines-backend",
    type: "frontend"
  },
  {
    name: "Ecommerce",
    description: "Backend para el registro de usuarios, productos y todo lo necesario para el manejo del ecommerce",
    repo: "https://github.com/pali13/ecommerce",
    type: "backend"
  },
]

const privateProyects =
{
  name: "Modelado 3D de Almacenes",
  description: "Proyecto realizado en Babylon.js y React para el modelado en 3D de almacenes, el proyecto también contó con un pequeño backend realizado en .Net"
}

const images = [
  "/images/Screenshot_1.png?height=600&width=800",
  "/images/Screenshot_2.png?height=600&width=800",
  "/images/Screenshot_3.png?height=600&width=800",
  "/images/Screenshot_4.png?height=600&width=800",
  "/images/Screenshot_5.png?height=600&width=800",
]

export default function ProjectsPage() {
  const width = useWindowWidth();
  const router = useRouter();
  const [modal, setModal] = useState(false);

  return (
    <div className={`mt-16 ${width > 750 ? "w-4/5 mx-auto" : "px-4"}`}>
      <h1 className="text-center text-4xl font-bold text-white mb-10">Proyectos</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-blue-400">{project.name}</h2>
            <p className="text-gray-300 my-2">{project.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                {project.type}
              </span>
              <button
                onClick={() => project.repo && router.push(project.repo)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" /> Repositorio
              </button>
            </div>
          </div>
        ))}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-400">{privateProyects.name}</h2>
          <p className="text-gray-300 my-2">{privateProyects.description}</p>
          <p className="text-gray-300">Proyecto para una empresa privada, código no disponible.</p>
          <button
            onClick={() => setModal(true)}
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Ver imágenes
          </button>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Galería de Imágenes</h1>
            <ImageCarouselModal images={images} setModal={setModal} modal={modal} />
          </div>
        </div>
      )}
    </div>
  );
}
