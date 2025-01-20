"use client"

import useWindowWidth from "@/app/hooks/widthHooks";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const projects = [
  {
    name: "Los Ceibos Jardines - Frontend",
    description: "Aplicacíon para la gestión de clientes y administración de parques, orientado a empresa de jardinería, realizado en React con typescript",
    repo: "https://github.com/pali13/pali13-los-ceibos-jardines-frontend"
  },
  {
    name: "Los Ceibos Jardines - Backend",
    description: "Backend con registro de usuarios, parques, facturas, pagos, planificación de horarios y generación de PDFs, realizado en Java con Spring boot, JWT, lombok",
    repo: "https://github.com/pali13/pali13-los-ceibos-jardines-backend"
  },
  {
    name: "Control de consumo en el Hogar - Frontend",
    description: "Aplicación web para el control del consumo de aparatos electrónicos en el hogar, con diferentes tipos de tarifas y horarios",
    repo: "https://github.com/pali13/energy-consumption-tracker"
  },
  {
    name: "Control de consumo en el Hogar - Backend",
    description: "Backend para el proyecto del control de consumo de aparatos electrónicos en el hogar y con registro de usuario",
    repo: "https://github.com/pali13/energy-consumption-tracker-backend"
  },
  {
    name: "Ecommerce - Frontend",
    description: "Aplicación web para la gestión de un ecommerce con diferentes roles de usuarios y experiencías de usuarios según el rol",
    repo: "https://github.com/pali13/pali13-los-ceibos-jardines-backend"
  },
  {
    name: "Ecommerce - Backend",
    description: "Backend para el registro de usuarios, productos y todo lo necesario para el manejo del ecommerce",
    repo: "https://github.com/pali13/ecommerce"
  },
]

export default function ProjectsPage() {
  const width = useWindowWidth();
  const router = useRouter();

  return (
    <div className={`${width > 750 && 'w-3/5 mx-auto'}`}>
      <div className="mt-28">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-2 mx-2 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold text-blue-800">{project.name}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button
                onClick={() => project.repo && router.push(project.repo)}
                title="Abrir repositorio"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" /> Abrir
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
