"use client";

import React, { useState, useRef } from 'react';
import { songsData } from '@/data/Songs'; // Caminho corrigido
import { Play, ChevronRight, X, Pause } from 'lucide-react';

export default function MusicasPage() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [selectedSong, setSelectedSong] = useState<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (song: any) => {
    if (playingId === song.id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      // --- ADICIONE ISSO AQUI ---
      // Avisa o site todo que um cântico vai começar
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('play-chant'));
      }
      
      setPlayingId(song.id);
      setTimeout(() => {
        if(audioRef.current) {
          audioRef.current.src = song.audioSrc || "";

          //volume em 15%
          audioRef.current.volume = 0.15;
          audioRef.current.play();
        }
      }, 50);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20"> 
      
      {/* Header com espaçamento corrigido */}
      <div className="pt-24 pb-10 text-center animate-slide-up">
        <h3 className="ext-sm uppercase tracking-[0.3em] text-flu-grena font-bold mb-2">
          CÂNTICOS
        </h3>
        <h1 className="text-4xl font-extrabold text-[#0b1f3f] uppercase">
          VOZ DA <span className="text-flu-verde">ARQUIBANCADA</span>
        </h1>
        <div className="w-24 h-1 mx-auto mt-4 bg-linear-to-r from-flu-grena via-white to-flu-verde rounded-full"></div>
      </div>

      <audio ref={audioRef} onEnded={() => setPlayingId(null)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 animate-slide-up animation-delay-100">
          {songsData.map((song) => (
            <div 
              key={song.id} 
              className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4 overflow-hidden">
                <button
                  onClick={() => toggleAudio(song)}
                  className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm
                    ${playingId === song.id 
                      ? 'bg-flu-grena text-white scale-110' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-flu-verde group-hover:text-white'}`}
                >
                  {playingId === song.id ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                </button>
                
                <div className="flex flex-col truncate">
                  {/* ALTERADO: song.title -> song.titulo */}
                  <span className="font-bold text-gray-800 truncate text-lg">{song.titulo}</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                    {playingId === song.id ? 'Tocando agora...' : 'Toque para ouvir'}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setSelectedSong(song)}
                className="p-2 text-gray-300 hover:text-flu-grena transition-colors"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedSong && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
            
            <div className="bg-flu-grena p-4 flex justify-between items-center text-white">
              {/* ALTERADO: song.title -> song.titulo */}
              <h2 className="font-bold text-lg">{selectedSong.titulo}</h2>
              <button onClick={() => setSelectedSong(null)} className="hover:bg-white/20 p-1 rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {selectedSong.audioSrc && (
                <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  {/* ALTERE A TAG AUDIO AQUI: */}
                  <audio controls className="w-full" src={selectedSong.audioSrc} onLoadedMetadata={(e)=>e.currentTarget.volume= 0.25} />
                </div>
              )}
              
              <div className="w-full flex justify-center">
                 {/* ALTERADO: song.lyrics -> song.letra */}
                 <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed text-base text-left">
                  {selectedSong.letra}
                </pre>
              </div>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}