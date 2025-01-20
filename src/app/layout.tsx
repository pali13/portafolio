import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobeAltIcon, UserIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const buttons = [
  {
    href: "/",
    label: "Inicio",
    icon: <HomeIcon className="h-5 w-5 mr-4" />,
  },
  {
    href: "/proyectos",
    label: "Proyectos",
    icon: <GlobeAltIcon className="h-5 w-5 mr-4" />,
  },
  {
    href: "/acercademi",
    label: "Acerca de mi",
    icon: <UserIcon className="h-5 w-5 mr-4" />,

  },
  {
    href: "/contacto",
    label: "Contacto",
    icon: <EnvelopeIcon className="h-5 w-5 mr-4" />,
  },
]

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi portafolio - Pablo Suárez",
  description: "Mi portafolio de proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1 className="font-serif text-white text-center text-7xl mt-5">Pablo Suárez</h1>
        <h3 className="my-3 text-center text-2xl">Tecnólogo en Informática</h3>
        {children}
        <div className="flex grid-rows-3 justify-around mt-32 pb-10">
        {buttons.map((button, index) => (
          <Link key={index} href={button.href} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition space-x-2">
            {button.icon}
            {button.label}
          </Link>
        ))}
      </div>
      </body>
    </html>
  );
}
