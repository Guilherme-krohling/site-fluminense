'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  themeColor?: 'verde' | 'grena'; // Opcional, padrão grena
}

export default function ImageCarousel({ images, themeColor = 'grena' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // SEGURANÇA 1: Se não houver lista ou ela for vazia, não renderiza nada (Evita o erro .map is not a function)
  if (!images || !Array.isArray(images) || images.length === 0) return null;

  // Função auxiliar para saber se é vídeo (pela extensão .mp4)
  const isVideo = (url: string) => url.toLowerCase().endsWith('.mp4');

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    // Só passa automático se NÃO for vídeo (para não cortar o vídeo no meio)
    if (isVideo(images[currentIndex])) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const arrowColorClass = themeColor === 'verde' ? 'hover:bg-[#006F39]' : 'hover:bg-[#9E0D2C]';

  return (
    <div className="relative w-full h-full group/arrows bg-gray-100 overflow-hidden">
      
      {/* Mídia Atual */}
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        {isVideo(images[currentIndex]) ? (
          <video 
            src={images[currentIndex]}
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          />
        ) : (
          <img 
            src={images[currentIndex]}
            alt={`Mídia ${currentIndex}`}
            className="w-full h-full object-cover animate-fade-in"
          />
        )}
      </div>

      {/* Setas (Só mostra se tiver mais de 1 item) */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide} 
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover/arrows:opacity-100 transition-all duration-300 ${arrowColorClass}`}
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide} 
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover/arrows:opacity-100 transition-all duration-300 ${arrowColorClass}`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={`w-2 h-2 rounded-full transition-all shadow-sm ${
                  slideIndex === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}