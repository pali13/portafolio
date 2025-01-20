import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

export const curriculumData = {
  profileImage: "/ProfileImage.png",
  phone: {
    icon: <PhoneIcon className="h-10 w-10 mb-2" />,
    number: "096 118 665",
  },
  email: {
    icon: <EnvelopeIcon className="h-10 w-10 mb-2" />,
    address: "psuarezu.13@gmail.com",
  },
  personalDetails: [
    { label: "Fecha de nacimiento", value: "15/02/1996" },
    { label: "Nacionalidad", value: "Uruguay" },
    { label: "Estado civil", value: "Casado" },
    { label: "CI", value: "5.117.109-2" },
  ],
  education: [
    { title: "Tecnólogo en Informática (EGRESADO 2024)", institution: "CURE Maldonado" },
    { title: "Bachiller en Ingeniería", institution: "Liceo N° 1 San Carlos" },
  ],
  skills: {
    programmingLanguages: "Lenguajes de programación: C/C++, Java, .NET, PHP, Javascript, TypeScript",
    frameworks: "Frameworks y Librerías: React, Next.js, Expo, React Native, Spring Boot, Tailwind CSS",
    databases: "Bases de datos: MySQL, SQLite, Firebase",
    tools: "Herramientas: Git, GitHub, Docker, Postman",
    languages: "Inglés (Nivel Avanzado)",
  },
  aboutMe: {
    data: "Soy Tecnólogo en Informática con experiencia en desarrollo de proyectos utilizando tecnologías como React, Next.js, Tailwind CSS, Spring Boot, etc. Me destaco por mi capacidad de trabajo en equipo, adaptabilidad y enfoque en resultados. Busco aportar mis conocimientos técnicos mientras continúo creciendo profesionalmente y contribuyo al éxito de la organización.",
    title: "Acerca de mi"
  },
  workExperience: {
    title: "Experiencia Laboral",
    jobs: [
      {
        position: "Secretario del Alcalde",
        company: "Municipio de Garzón y José Ignacio",
        period: "2020-2025",
      },
      {
        position: "Programador Junior (Pasantía)",
        company: "WIS Soluciones en Logística",
        period: "2024",
      },
      {
        position: "Trabajos varios",
        companies: [
          "Hotel Las Cumbres",
          "Edificio Golden Gate",
          "Ártico Congelados",
          "Ártico",
          "Edificio Tequendama II",
          "Devoto Hnos",
          "El Dorado",
          "Gardeña",
        ],
        period: "2012-2020",
      },
    ],
  },
  references: {
    title: "Referencias Laborales",
    peoples: [
      { name: "Jaime Cohen", relation: "Jefe", contact: "094417967" },
      { name: "Margarita Ruiz", relation: "Jefa", contact: "099 810 857" },
      { name: "Matías Lecuna", relation: "Compañero", contact: "091 099 274" },
    ],
  }
};
