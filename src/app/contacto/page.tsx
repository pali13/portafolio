"use client"

import { EnvelopeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from 'emailjs-com';

const buttons = [
    {
      name: 'Github',
      url: 'https://github.com/pali13',
      icon: <FaGithub className="w-12 h-12 text-gray-800 hover:text-black transition-colors" />,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/pablo-su%C3%A1rez-urrutia-392513bb/',
      icon: <FaLinkedin className="w-12 h-12 text-blue-700 hover:text-blue-900 transition-colors" />,
    },
    {
      name: 'Correo Electrónico',
      url: 'mailto:psuarezu.13@gmail.com',
      icon: <EnvelopeIcon className="w-12 h-12 text-blue-500 hover:text-blue-700 transition-colors" />,
    },
    {
      name: 'Whatsapp',
      url: 'https://wa.me/+59896118665',
      icon: <IoLogoWhatsapp className="w-12 h-12 text-green-600 hover:text-green-800 transition-colors" />,
    },
  ];
  
  export default function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return emailRegex.test(email);
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
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Redes sociales */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Mis Redes</h2>
          <div className="flex space-x-5 mt-4">
            {buttons.map((button, index) => (
              <Link key={index} href={button.url} target="_blank" rel="noopener noreferrer" title={button.name}>
                {button.icon}
              </Link>
            ))}
          </div>
        </div>
  
        {/* Formulario */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contáctame</h2>
        {successMessage && (
          <div className="mb-4 p-4 text-sm font-medium bg-green-100 text-green-700 border border-green-300 rounded-md">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-4 py-2 text-white font-medium rounded-md shadow-sm ${
                isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>
        </form>
      </div>
    );
  }