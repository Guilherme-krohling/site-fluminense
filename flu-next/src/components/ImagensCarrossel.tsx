'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Definimos que este componente aceita uma lista de imagens (array de strings)
interface ImageCarouselProps {
  images: string[];
  themeColor: 'verde' | 'grena'; // Para pintar as setinhas da cor certa
}

export function ImageCarousel({ images, themeColor }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para voltar a imagem
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    // Se for a primeira, vai para a última. Se não, volta uma.
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Função para avançar a imagem
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    // Se for a última, volta para a primeira. Se não, avança uma.
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Lógica do Automático (5 segundos)
  useEffect(() => {
    // Cria um temporizador que chama nextSlide a cada 5000ms
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Limpa o temporizador se o usuário mudar de imagem manualmente (para resetar a contagem)
    // ou se o componente sair da tela.
    return () => clearInterval(slideInterval);
  }, [currentIndex]); // O array [currentIndex] garante que o timer reinicia a cada mudança

  // Define a cor das setinhas baseado no tema
  const arrowColorClass = themeColor === 'verde' ? 'hover:bg-flu-verde' : 'hover:bg-flu-grena';

  return (
    <div className="relative h-full w-full group/arrows">
      
      {/* A Imagem Atual */}
      {/* Usamos key={currentIndex} para forçar o React a recriar a imagem e fazer um efeito de transição suave */}
      <div 
        key={currentIndex}
        className="absolute inset-0 animate-fade-in" // animate-fade-in (precisa estar no globals.css, veja nota abaixo)
        style={{ 
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
      />

      {/* Setinha Esquerda (Só aparece quando passa o mouse no carrossel) */}
      <button 
        onClick={prevSlide} 
        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover/arrows:opacity-100 transition-all duration-300 ${arrowColorClass}`}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Setinha Direita */}
      <button 
        onClick={nextSlide} 
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover/arrows:opacity-100 transition-all duration-300 ${arrowColorClass}`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores (Bolinhas embaixo) - Opcional, mas fica chique */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`w-2 h-2 rounded-full transition-all ${
              slideIndex === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

    </div>
  );
}