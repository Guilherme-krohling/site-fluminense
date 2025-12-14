'use client'; // Necessário para o botão de scroll funcionar

import { ChevronDown } from 'lucide-react';

export const CapaHome = () => {
  const rolarParaBaixo = () => {
    // Rola suavemente para a próxima seção (altura da janela)
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo (Capa) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
        style={{ backgroundImage: `url('/images/torcida.jpg')` }} 
      >
        {/* Degradê (Filtro por cima da foto) */}
        <div className="absolute inset-0 bg-linear-to-b from-flu-verde/80 via-black/40 to-flu-grena/90" />
      </div>

      {/* Conteúdo Central (Texto) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
        
        {/* Texto Pequeno (Slide Up é a animação que criamos no CSS) */}
        <div className="animate-slide-up">
          <p className="font-sans text-lg md:text-xl uppercase tracking-[0.3em] text-gray-200 mb-4 font-bold">
            Minha Paixão Tricolor
          </p>
        </div>
        
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up animation-delay-100 drop-shadow-lg">
          FLUMINENSE
          <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-flu-dourado font-serif">
            Football Club
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-100 font-bold max-w-2xl mx-auto mb-8 animate-slide-up animation-delay-200 drop-shadow-md">
          Uma jornada de amor, memórias e paixão pelo Tricolor das Laranjeiras.
          Desde 1902, fazendo história.
        </p>

        {/* Pílulas de Títulos (Efeito de Vidro) */}
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up animation-delay-300">
          <div className="glass-card px-6 py-3 rounded-full">
            <span className="text-white font-bold">
              <strong className="text-flu-dourado ">4x</strong> Campeão Brasileiro
            </span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full">
            <span className="text-white font-bold">
              <strong className="text-flu-dourado">1x</strong> Libertadores
            </span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full">
            <span className="text-white font-bold">
              <strong className="text-flu-dourado">33x</strong> Cariocas
            </span>
          </div>
        </div>
      </div>

      {/* Botão Seta para descer */}
      <button
        onClick={rolarParaBaixo}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-flu-dourado transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};