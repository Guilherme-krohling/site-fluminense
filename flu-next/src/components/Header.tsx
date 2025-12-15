'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '/', icon: Home },
  { label: 'História', href: '/historia' },
  { label: 'Meus Jogos', href: '/meus-jogos' },
  { label: 'Escalações', href: '/escalacoes' },
  { label: 'Estádios', href: '/estadios' },
  { label: 'Títulos', href: '/titulos' },
  { label: 'Músicas', href: '/musicas' },
  { label: 'Ídolos', href: '/idolos' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // LÓGICA MESTRA: Define se o header deve estar transparente (Branco) ou Sólido (Colorido)
  // Só é transparente se estiver na Home ('/') E não tiver rolado a tela ainda.
  const isTransparent = pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Se NÃO for transparente, coloca fundo branco e sombra. Se for, fica invisível.
        !isTransparent
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Faixa Tricolor (Só aparece quando o menu NÃO é transparente/branco) */}
      {!isTransparent && (
         <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-flu-verde via-white to-flu-grena opacity-80" />
      )}
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO (Lógica de Cores) */}
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            {/* Se for transparente, texto Branco. Se não, Verde. */}
            <span className={isTransparent ? "text-white" : "text-flu-verde"}>FLU</span>
            
            {/* Se for transparente, texto Branco. Se não, Grená. */}
            <span className={isTransparent ? "text-white" : "text-flu-grena"}>MINENSE</span>
          </Link>

          {/* DESKTOP NAV - ALTERADO AQUI: De 'md:flex' para 'xl:flex' */}
          {/* Só aparece em telas Extra Grandes (acima de 1280px) */}
          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm uppercase tracking-wider font-bold transition-colors relative group ${
                      // REGRA DE COR DO TEXTO DOS LINKS
                      active
                        ? (isTransparent ? 'text-white' : 'text-flu-grena') // Ativo: Branco no topo, Grená quando desce
                        : (isTransparent ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-flu-grena') // Normal: Branco suave no topo, Cinza quando desce
                    }`}
                  >
                    {item.label}
                    
                    {/* LINHA SUBLINHADA (Underline) */}
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-flu-grena transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} 
                    />
                  </Link>
                );
            })}
          </div>

          {/* MOBILE MENU BUTTON - ALTERADO AQUI: De 'md:hidden' para 'xl:hidden' */}
          {/* Aparece em celulares, tablets e notebooks pequenos (até 1280px) */}
          <button
            className={`xl:hidden p-2 transition-colors ${
                // O ícone do menu também precisa obedecer: Branco no topo, Escuro embaixo
                isTransparent ? 'text-white' : 'text-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU LISTA - ALTERADO AQUI: De 'md:hidden' para 'xl:hidden' */}
        {isMobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-gray-100 bg-white absolute left-0 right-0 shadow-xl px-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block w-full text-left py-3 px-4 uppercase tracking-wider font-bold transition-colors rounded-lg mb-1 ${
                  isActive(item.href)
                    ? 'text-flu-grena bg-gray-50'
                    : 'text-gray-600 hover:text-flu-grena hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};