import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobeAltIcon, UserIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const buttons = [
  { href: "/", label: "Inicio", icon: <HomeIcon className="h-5 w-5 mr-2" /> },
  { href: "/proyectos", label: "Proyectos", icon: <GlobeAltIcon className="h-5 w-5 mr-2" /> },
  { href: "/acercademi", label: "Acerca de mí", icon: <UserIcon className="h-5 w-5 mr-2" /> },
  { href: "/contacto", label: "Contacto", icon: <EnvelopeIcon className="h-5 w-5 mr-2" /> },
];

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Mi portafolio - Pablo Suárez",
  description: "Mi portafolio de proyectos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}>
        <header className="text-center py-10 bg-gradient-to-b from-gray-800 to-transparent">
          <h1 className="font-serif text-white text-5xl md:text-7xl">Pablo Suárez</h1>
          <h3 className="text-xl md:text-2xl mt-3">Tecnólogo en Informática</h3>
        </header>
        <main>{children}</main>
        <nav className="flex justify-around mt-16 pb-10">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition space-x-2"
            >
              {button.icon}
              {button.label}
            </Link>
          ))}
        </nav>
      </body>
    </html>
  );
}
