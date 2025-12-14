"use client";

import React, { useState } from 'react';
import { idolosData } from '@/data/Idolos';
import { Trophy, X, User } from 'lucide-react';

// Categorias para o filtro
const CATEGORIES = ["Todos", "Goleiros", "Defensores", "Meias", "Atacantes", "Eternos"];

export default function IdolosPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedIdolo, setSelectedIdolo] = useState<any>(null);

  // Lógica de Filtragem
  const filteredIdolos = idolosData.filter((idolo) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "Eternos") return idolo.inMemoriam === true;
    // O filtro compara com a string "posicao" do JSON (ex: Atacante)
    // O includes ajuda caso a gente tenha "Lateral/Defensor"
    return idolo.posicao.includes(activeFilter.slice(0, -1)); // Hack simples: Remove o 's' do plural (Atacantes -> Atacante)
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="pt-24 pb-8 text-center px-4">
        <h3 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
          jogadores icônicos
        </h3>
        <h1 className="text-4xl font-extrabold text-[#0b1f3f] uppercase">
          NOSSOS <span className="text-flu-grena">ÍDOLOS</span>
        </h1>
        <div className="w-24 h-1 mx-auto mt-4 bg-linear-to-r from-flu-grena via-white to-flu-verde rounded-full"></div>
      </div>

      {/* Barra de Filtros (Scroll horizontal no mobile) */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide justify-start md:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-300 border
                ${activeFilter === cat 
                  ? 'bg-flu-grena text-white border-flu-grena shadow-md transform scale-105' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-flu-grena hover:text-flu-grena'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {filteredIdolos.map((idolo) => (
            <div 
              key={idolo.id}
              onClick={() => setSelectedIdolo(idolo)}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Container da Imagem (Aspect Ratio quadrado ou 4:5) */}
              <div className="aspect-4/5 w-full bg-gray-200 relative overflow-hidden">
                {/* Imagem (Se não tiver imagem, mostra um ícone de user) */}
                 {idolo.imagem ? (
                    <img 
                      src={idolo.imagem} 
                      alt={idolo.nome}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                 ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                      <User size={64} />
                    </div>
                 )}
                
                {/* Gradiente sobre a foto para leitura do texto */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                
                {/* Info no Card */}
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <p className="text-flu-dourado text-xs font-bold uppercase tracking-wider mb-1">
                    {idolo.posicao}
                  </p>
                  <h3 className="text-white text-xl font-bold leading-tight">{idolo.nome}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mensagem se não houver resultados */}
        {filteredIdolos.length === 0 && (
           <div className="text-center py-20 text-gray-400">
             <p>Nenhum ídolo encontrado nesta categoria.</p>
           </div>
        )}
      </div>

      {/* MODAL (Popup) */}
      {selectedIdolo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto relative animate-in zoom-in-95 duration-200 flex flex-col md:flex-row">
            
            {/* Botão Fechar (Mobile flutuante) */}
            <button 
              onClick={() => setSelectedIdolo(null)} 
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 md:hidden"
            >
              <X size={20} />
            </button>

            {/* Lado Esquerdo: Foto Grande */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
               <img 
                  src={selectedIdolo.imagem} 
                  alt={selectedIdolo.nome}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-flu-grena/80 to-transparent md:bg-linear-to-r md:from-transparent md:to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white md:hidden">
                    <h2 className="text-3xl font-bold">{selectedIdolo.nome}</h2>
                    <p className="opacity-90">{selectedIdolo.apelido}</p>
                </div>
            </div>

            {/* Lado Direito: Informações */}
            <div className="w-full md:w-3/5 p-6 md:p-8 bg-white">
              <div className="flex justify-between items-start mb-6">
                 <div className="hidden md:block">
                    <h2 className="text-3xl font-bold text-[#0b1f3f]">{selectedIdolo.nome}</h2>
                    <p className="text-flu-grena font-medium text-lg">{selectedIdolo.apelido}</p>
                 </div>
                 <button onClick={() => setSelectedIdolo(null)} className="hidden md:block hover:bg-gray-100 p-2 rounded-full transition-colors">
                   <X size={24} className="text-gray-500" />
                 </button>
              </div>

              {/* Estatísticas */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-center">
                   <span className="block text-2xl font-bold text-flu-verde]">{selectedIdolo.jogos}</span>
                   <span className="text-xs text-gray-500 uppercase font-bold">Jogos</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-center">
                   <span className="block text-2xl font-bold text-flu-verde]">{selectedIdolo.gols}</span>
                   <span className="text-xs text-gray-500 uppercase font-bold">Gols</span>
                </div>
              </div>

              {/* Biografia */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase mb-2">Sobre o Ídolo</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {selectedIdolo.biografia}
                </p>
              </div>

              {/* Títulos */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                   <Trophy size={16} className="text-[#eab308]" /> Principais Títulos
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedIdolo.titulos.map((titulo: string, index: number) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#fff8e1] text-[#b45309] text-xs font-bold rounded-full border border-flu-dourado"
                    >
                      {titulo}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}