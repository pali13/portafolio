"use client"

import React from 'react';
import { saveAs } from 'file-saver';
import Image from 'next/image';
import { curriculumData } from './curriculumData';

const Curriculum = () => {
    const handleDownload = () => {
        saveAs('/curriculum/Currículum Pablo Suárez.pdf', 'Curriculum_Pablo_Suarez.pdf');
    };

    return (
        <div className="p-6 bg-gray-100 text-gray-900 max-w-4xl mx-auto">
            {/* Header */}
            <header className="text-center mb-6 flex flex-row justify-around items-center space-x-4">
                <div className="flex flex-col items-center w-1/4">
                    {curriculumData.phone.icon}
                    <span>{curriculumData.phone.number}</span>
                </div>
                <div className="flex-shrink-0 flex justify-center">
                    <Image
                        src={curriculumData.profileImage}
                        alt="Profile"
                        width={300}
                        height={300}
                        className="rounded-full border border-gray-300"
                    />
                </div>
                <div className="flex flex-col items-center w-1/4">
                    {curriculumData.email.icon}
                    <span>{curriculumData.email.address}</span>
                </div>
            </header>

            <div className='flex flex-row'>
                <div className='w-1/2 px-6'>
                    {/* Datos Personales */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 uppercase underline">Datos Personales</h2>
                        <ul className="list-disc ml-6 mt-2">
                            {curriculumData.personalDetails.map((personal, index) => (
                                <li key={index}>{personal.label}: {personal.value}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Educación */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 uppercase underline">Educación</h2>
                        <ul className="list-disc ml-6 mt-2">
                            {curriculumData.education.map((edu, index) => (
                                <li key={index}>{edu.title} - {edu.institution}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Conocimientos */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 uppercase underline">Conocimientos</h2>
                        <ul className="list-disc ml-6 mt-2">
                            <li>{curriculumData.skills.languages}</li>
                            <li>{curriculumData.skills.programmingLanguages}</li>
                            <li>{curriculumData.skills.frameworks}</li>
                            <li>{curriculumData.skills.databases}</li>
                            <li>{curriculumData.skills.tools}</li>
                        </ul>
                    </section>
                </div>
                <div className='w-1/2 px-6'>
                    {/* Acerca de mí */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 uppercase underline">{curriculumData.aboutMe.title}</h2>
                        <p className="mt-2">
                            {curriculumData.aboutMe.data}
                        </p>
                    </section>

                    {/* Experiencia Laboral */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 uppercase underline">{curriculumData.workExperience.title}</h2>
                        <ul className="list-disc ml-6 mt-2">
                            {curriculumData.workExperience.jobs.map((job, index) => (
                                job.companies ? (
                                    <li key={index}>{job.position} - {job.companies.join(", ")} ({job.period})</li>
                                ) : (
                                    <li key={index}>{job.position} - {job.company} ({job.period})</li>
                                )
                            ))}
                        </ul>
                    </section>

                    {/* Referencias Laborales */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 uppercase underline">{curriculumData.references.title}</h2>
                        <ul className="list-disc ml-6 mt-2">
                            {curriculumData.references.peoples.map((people, index) => (
                            <li key={index}>{people.name} - {people.relation} - {people.contact}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

            {/* Download Button */}
            <div className="text-center mt-8">
                <button
                    onClick={handleDownload}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Descargar PDF
                </button>
            </div>
        </div>
    );
};

export default Curriculum;
