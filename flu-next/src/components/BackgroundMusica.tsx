"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Tenta iniciar o áudio assim que carrega (Autoplay policy pode bloquear)
  useEffect(() => {
    const startAudio = async () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.05; // Volume ambiente
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay bloqueado pelo navegador. Usuário precisa interagir.");
          setIsPlaying(false);
        }
      }
    };

    startAudio();
    // Pequeno delay para garantir carregamento
    setTimeout(startAudio, 1000);

    // ESCUTA O EVENTO DA PÁGINA DE MÚSICAS
    const handleChantPlay = () => {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    // Adiciona o ouvinte do evento customizado
    window.addEventListener('play-chant', handleChantPlay);

    return () => {
      window.removeEventListener('play-chant', handleChantPlay);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio 
        ref={audioRef} 
        src="/audios/Hino_piano.mp3" 
        loop // Toca em loop infinito
      />
      
      <button
        onClick={toggleMusic}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 border-2 
          ${isPlaying 
            ? 'bg-[#006F39] border-[#006F39] text-white animate-pulse-slow' // Verde quando toca
            : 'bg-white border-gray-300 text-gray-400' // Cinza quando mudo
          }`}
        title={isPlaying ? "Pausar música de fundo" : "Tocar música de fundo"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
}