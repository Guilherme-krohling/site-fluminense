'use client';

import { principaisTitulos } from '@/data/Titulos';
import { MapPin, Star } from 'lucide-react';
import ImageCarousel from '@/components/ImagensCarrossel';

export const GloriasEternas = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-black uppercase mb-8 flex items-center gap-2 border-l-4 border-[#eab308] pl-4">
           Principais Conquistas Detalhadas
        </h2>
        
        <div className="space-y-16">
          {principaisTitulos.map((titulo, index) => (
            <div 
              key={titulo.id} 
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-shadow duration-300"
            >
              
              {/* Lado da Mídia (Carrossel com Vídeo) */}
              <div className="w-full lg:w-1/2 h-64 lg:h-[450px] bg-black relative">
                 {/* @ts-ignore */}
                 <ImageCarousel images={titulo.midias} themeColor="verde" />
                 
                 {/* Badge do Ano */}
                 <div className="absolute top-4 left-4 bg-[#eab308] text-black font-black text-xl px-4 py-2 rounded-lg shadow-lg z-10">
                    {titulo.ano}
                 </div>
              </div>

              {/* Lado das Informações */}
              <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                 <h3 className="text-2xl lg:text-4xl font-extrabold text-black mb-3">{titulo.nome}</h3>
                 
                 <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium text-gray-500">
                    <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                       <MapPin size={16} className="text-flu-grena" /> {titulo.estadio}
                    </span>
                 </div>

                 <p className="text-gray-600 leading-relaxed mb-8 text-justify text-lg">
                    {titulo.descricao}
                 </p>

                 {/* Lista de Artilheiros */}
                 <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <span className="flex text-xs font-bold text-flu-verde uppercase mb-3 items-center gap-1">
                       <Star size={14} fill="currentColor" /> Artilheiros:
                    </span>
                    <div className="flex flex-wrap gap-2">
                       {titulo.artilheiros.map((art, idx) => (
                          <span key={idx} className="bg-white px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700 shadow-sm border border-gray-200">
                             {art}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};