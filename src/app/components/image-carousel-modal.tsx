"use client"

import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ImageCarouselModalProps {
    images: string[],
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ImageCarouselModal({ images, setModal, modal }: ImageCarouselModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <Dialog open={modal} onOpenChange={setModal}>
            {/* Modal con Carrusel */}
            <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-[80vh] relative p-6">
                    <DialogTitle className="text-center text-black">
                        Galería de Imágenes
                    </DialogTitle>

                    {/* Botón para cerrar */}
                    <button
                        onClick={() => setModal(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        X
                    </button>

                    {/* Carrusel */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-full max-w-[90%] max-h-[70%] flex justify-center items-center">
                            <Image
                                src={images[currentIndex]}
                                alt={`Imagen ${currentIndex + 1}`}
                                layout="intrinsic"
                                width={1920} // Resolución alta para mantener calidad
                                height={1080}
                                className="object-contain rounded-lg"
                            />
                        </div>

                        {/* Controles del Carrusel */}
                        <div
                            onClick={prevSlide}
                            className="absolute top-1/2 left-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                        >
                            <ChevronLeft size={30} />
                        </div>
                        <div
                            onClick={nextSlide}
                            className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                        >
                            <ChevronRight size={30} />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
