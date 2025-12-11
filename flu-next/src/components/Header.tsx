'use client' // 1. Isso avisa o Next.js que este componente tem interação (cliques)

import { useState } from 'react' // Importamos a ferramenta de "memória" do React
import Link from 'next/link' // Importamos o Link turbo do Next
import Image from 'next/image' // Importamos a tag de imagem otimizada

export function Header() {
  // AQUI SUBSTITUÍMOS O JAVASCRIPT ANTIGO
  // Ao invés de document.getElementById, usamos uma variável de estado.
  // isMenuOpen = false (começa fechado)
  // setIsMenuOpen = função para mudar o valor
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Note o className ao invés de class
    <header className="bg-flu-grena flex flex-col shadow-md text-white sticky top-0 z-50">
      <div className="flex justify-between items-center p-4">
        {/* LOGO E TÍTULO */}
        <div className="flex items-center gap-4">
          <Link href="/">
             {/* O Next exige width e height nas imagens para otimizar o carregamento */}
             {/* Como não temos a imagem ainda, vou deixar um placeholder. Depois arrumamos */}
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-flu-grena font-bold">
               FFC
             </div>
          </Link>
          <h1 className="text-xl font-bold">Meu Fluminense</h1>
        </div>

        {/* BOTÃO HAMBURGUER (Só Mobile) */}
        {/* O onClick substitui o addEventListener */}
        <button 
          className="md:hidden cursor-pointer" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Inverte: se tá aberto, fecha. Se tá fechado, abre.
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* MENU DESKTOP (Escondido no Mobile) */}
        <nav className="hidden md:flex gap-4">
          <Link href="/" className="font-bold uppercase hover:text-flu-dourado transition-colors">Home</Link>
          <Link href="/historia" className="font-bold uppercase hover:text-flu-dourado transition-colors">História</Link>
          <Link href="/titulos" className="font-bold uppercase hover:text-flu-dourado transition-colors">Títulos</Link>
        </nav>
      </div>

      {/* MENU MOBILE (Renderização Condicional) */}
      {/* Tradução: "Se isMenuOpen for VERDADEIRO, mostre essa div" */}
      {isMenuOpen && (
        <div className="bg-flu-grena flex flex-col gap-4 p-4 border-t border-flu-dourado md:hidden">
          <Link href="/" className="font-bold uppercase hover:text-flu-dourado py-2 border-b border-white/20">Home</Link>
          <Link href="/historia" className="font-bold uppercase hover:text-flu-dourado py-2 border-b border-white/20">História</Link>
          <Link href="/titulos" className="font-bold uppercase hover:text-flu-dourado py-2 border-b border-white/20">Títulos</Link>
        </div>
      )}
    </header>
  )
}