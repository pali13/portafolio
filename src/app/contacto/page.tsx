"use client"

import { EnvelopeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from 'emailjs-com';

const buttons =
    [
        {
            name: "Github",
            url: "https://github.com/pali13",
            icon: <FaGithub className="text-black w-10 h-10" />
        },
        {
            name: "Linkedin",
            url: "https://github.com/pali13",
            icon: <FaLinkedin className="text-blue-800 w-10 h-10" />
        },
        {
            name: "Correo Electrónico",
            url: "https://github.com/pali13",
            icon: <EnvelopeIcon className="w-10 h-10 text-blue-500" />
        },
        {
            name: "Whatsapp",
            url: "https://github.com/pali13",
            icon: <IoLogoWhatsapp className="text-green-800 w-10 h-10" />
        },
    ]


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        validateEmail(formData.email);
        setIsSubmitting(true);
        emailjs
            .send(
                'service_gs131jz', // Service ID de EmailJS
                'template_dc3u3z7', // Template ID de EmailJS
                formData,
                'IoJqIH1jz2oXPLCbq' // Public Key de EmailJS
            )
            .then(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setSuccessMessage('¡Correo enviado correctamente! Te contactaré pronto.');
            })
            .catch((error) => {
                console.error('Error enviando el correo:', error);
                setSuccessMessage('Hubo un error enviando tu mensaje. Intenta nuevamente.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
            <div className="flex flex-row">
                <span className="text-2xl font-bold mb-6 text-gray-800">
                    Mis redes:
                </span>
                {buttons.map((button, index) => (
                    <Link href={button.url} key={index} className="px-2" title={button.name}>
                        {button.icon}
                    </Link>
                ))}
            </div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contáctame</h2>
            {successMessage && (
                <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-md">
                    {successMessage}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className=" text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Asunto
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2 text-white font-semibold rounded-md shadow-sm ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </div>
            </form>
        </div>
    );
}