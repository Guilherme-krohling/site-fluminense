'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook do Next para saber a página atual
import { Menu, X, Home } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '/', icon: Home },
  { label: 'História', href: '/historia' },
  { label: 'Meus Jogos', href: '/meus-jogos' },
  { label: 'Escalações', href: '/escalacoes' },
  { label: 'Estádios', href: '/estadios' },
  { label: 'Troféus', href: '/trofeus' },
  { label: 'Uniformes', href: '/uniformes' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Pega a rota atual (ex: /historia)

  // Efeito para detectar scroll e mudar a cor do menu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile quando muda de página
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
        // Lógica: Se rolou a tela OU não está na Home, fica com fundo branco e sombra
        isScrolled || pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Faixa Tricolor no topo do menu */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-flu-verde via-white to-flu-grena opacity-80" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            <span className="text-flu-dourado">FLU</span>
            <span className="text-flu-grena">MINENSE</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm uppercase tracking-wider font-bold transition-colors relative group ${
                  isActive(item.href)
                    ? 'text-flu-grena'
                    : (isScrolled || pathname !== '/') ? 'text-gray-600 hover:text-flu-grena' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {/* Linha sublinhada animada */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-flu-grena transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`md:hidden p-2 ${
                (isScrolled || pathname !== '/') ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU (Lista) */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white absolute left-0 right-0 shadow-xl px-4">
            {navItems.map((item, index) => (
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