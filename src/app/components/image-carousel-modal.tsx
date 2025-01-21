"use client"

import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"

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
      <Dialog open={modal} onOpenChange={() => setModal(false)}>
        <DialogContent className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full relative p-3">
            {/* Título */}
            <DialogTitle className="text-2xl font-semibold text-gray-800 text-center">
              Galería de Imágenes
            </DialogTitle>
  
            {/* Botón de cierre */}
            <button
              onClick={() => setModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
  
            {/* Carrusel */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Imagen */}
              <div className="relative w-full max-w-[75%] flex items-center justify-center">
                <Image
                  src={images[currentIndex]}
                  alt={`Imagen ${currentIndex + 1}`}
                  layout="intrinsic"
                  width={1920}
                  height={1080}
                  className="object-contain rounded-lg transition-transform duration-300"
                />
              </div>
  
              {/* Control Izquierdo */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-gray-800/70 p-3 rounded-full hover:bg-gray-900/80 transition"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
  
              {/* Control Derecho */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-gray-800/70 p-3 rounded-full hover:bg-gray-900/80 transition"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
  
            {/* Indicadores */}
            <div className="absolute bottom-6 w-full flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
