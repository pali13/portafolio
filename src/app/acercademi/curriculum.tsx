"use client"

import React from 'react';
import { saveAs } from 'file-saver';
import Image from 'next/image';
import { curriculumData } from './curriculumData';

const Curriculum = () => {
    const handleDownload = () => {
        saveAs('/curriculum/Curriculum Pablo Suárez.pdf', 'Curriculum_Pablo_Suarez.pdf');
    };

    return (
        <div className="p-6 bg-gray-100 text-gray-900 max-w-4xl mx-auto shadow-lg rounded-lg">
            {/* Header */}
            <header className="text-center mb-6 flex flex-col items-center space-y-4">
                <Image
                    src={curriculumData.profileImage}
                    alt="Foto de perfil"
                    width={300}
                    height={300}
                    className="rounded-full border-4 border-gray-300 shadow-sm"
                />
                <div className="flex justify-around w-full text-center text-sm md:text-base">
                    <div className="flex flex-col items-center">
                        {curriculumData.phone.icon}
                        <span className="mt-1 font-medium">{curriculumData.phone.number}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        {curriculumData.email.icon}
                        <span className="mt-1 font-medium">{curriculumData.email.address}</span>
                    </div>
                </div>
            </header>

            <div className="flex flex-col md:flex-row">
                {/* Columna izquierda */}
                <div className="md:w-1/2 px-6">
                    {/* Datos Personales */}
                    <Section title="Datos Personales" items={curriculumData.personalDetails} />

                    {/* Educación */}
                    <Section title="Educación" items={curriculumData.education} />

                    {/* Conocimientos */}
                    <SkillsSection title="Conocimientos" skills={curriculumData.skills} />
                </div>

                {/* Columna derecha */}
                <div className="md:w-1/2 px-6">
                    {/* Acerca de mí */}
                    <AboutMeSection title={curriculumData.aboutMe.title} text={curriculumData.aboutMe.data} />

                    {/* Experiencia Laboral */}
                    <WorkExperienceSection workExperience={curriculumData.workExperience} />

                    {/* Referencias Laborales */}
                    <Section title={curriculumData.references.title} items={curriculumData.references.peoples} />
                </div>
            </div>

            {/* Botón de descarga */}
            <div className="text-center mt-8">
                <button
                    onClick={handleDownload}
                    className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 shadow-lg transition-all duration-300"
                >
                    Descargar PDF
                </button>
            </div>
        </div>
    );
};

type Item = {
    label?: string;
    value?: string;
    name?: string;
    title?: string;
    institution?: string;
    relation?: string;
    contact?: string;
};

const Section = ({ title, items }: { title: string; items: Item[] }) => (
    <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-400 pb-2 uppercase text-blue-600">
            {title}
        </h2>
        <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            {items.map((item, index) => {
                // Lógica para mostrar las propiedades de forma dinámica
                const displayLabel = item.label || item.name || item.institution;
                const displayValue = item.value || item.title || item.relation;
                const phoneValue = item.contact;

                return (
                    <li key={index}>
                        {displayLabel ? `${displayLabel}: ` : ''}
                        <span className="font-medium">{displayValue}</span>
                        {phoneValue && <span className="font-medium"> - {phoneValue}</span>}
                    </li>
                );
            })}
        </ul>
    </section>
);

interface Skills {
    programmingLanguages: string;
    frameworks: string;
    databases: string;
    tools: string;
    languages: string;
}

const SkillsSection = ({ title, skills }: { title: string; skills: Skills }) => (
    <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-400 pb-2 uppercase text-blue-600">
            {title}
        </h2>
        <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            {(Object.keys(skills) as (keyof Skills)[]).map((key) => (
                <li key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {skills[key]}
                </li>
            ))}
        </ul>
    </section>
);

const AboutMeSection = ({ title, text }: { title: string; text: string }) => (
    <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-400 pb-2 uppercase text-blue-600">
            {title}
        </h2>
        <p className="mt-2 text-gray-700 leading-6">
            {text.split('. ').map((sentence, index) => (
                <span key={index}>
                    {sentence}.
                    <br />
                </span>
            ))}
        </p>
    </section>
);

// Interfaz base para un trabajo
interface Job {
    position: string; // Cargo ocupado
    period: string;   // Periodo de trabajo
}

// Interfaz para trabajos con una única empresa
interface SingleCompanyJob extends Job {
    company: string; // Nombre de la empresa
}

// Interfaz para trabajos con múltiples empresas
interface MultiCompanyJob extends Job {
    companies: string[]; // Lista de empresas
}

// Unión de ambas interfaces
type WorkExperienceJob = SingleCompanyJob | MultiCompanyJob;

interface WorkExperience {
    title: string;
    jobs: WorkExperienceJob[];
}

const WorkExperienceSection = ({ workExperience }: { workExperience: WorkExperience }) => (
    <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-400 pb-2 uppercase text-blue-600">
            {workExperience.title}
        </h2>
        <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            {workExperience.jobs.map((job) => (
                <>
                    <p>
                        <strong>{job.position}</strong> ({job.period})
                    </p>
                    {("company" in job) && <p>Empresa: {job.company}</p>}
                    {("companies" in job) && (
                        <div>
                            Empresas:
                            <ul className="list-disc list-inside ml-4">
                                {job.companies.map((company, idx) => (
                                    <li key={idx}>{company}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            ))}
        </ul>
    </section>
);

export default Curriculum;