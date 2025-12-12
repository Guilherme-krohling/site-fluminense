import Link from 'next/link';
import { CapaHome } from '@/components/CapaHome'; // <-- Importando com o nome novo
import { History, Ticket, Users, Building2, Trophy, Shirt, ArrowRight } from 'lucide-react';

// Configuração dos Cards (Menu de Navegação)
const sections = [
  { title: 'História', description: 'Conheça a trajetória do Tricolor desde 1902', href: '/historia', icon: History, color: 'from-flu-verde to-flu-verde/60' },
  { title: 'Meus Jogos', description: 'Momentos que vivi no estádio', href: '/meus-jogos', icon: Ticket, color: 'from-flu-grena to-flu-grena/60' },
  { title: 'Escalações', description: 'Times históricos e artilheiros', href: '/escalacoes', icon: Users, color: 'from-flu-verde to-flu-verde/60' },
  { title: 'Estádios', description: 'Laranjeiras e Maracanã', href: '/estadios', icon: Building2, color: 'from-flu-dourado to-flu-dourado/60' },
  { title: 'Troféus', description: 'Nossa galeria de conquistas', href: '/trofeus', icon: Trophy, color: 'from-flu-verde to-flu-verde/60' },
  { title: 'Uniformes', description: 'A evolução do manto tricolor', href: '/uniformes', icon: Shirt, color: 'from-flu-grena to-flu-grena/60' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* 1. Capa do Site (Antigo Hero) */}
      <CapaHome />
      
      {/* 2. Grid de Navegação (Cards) */}
      <section className="py-20 bg-linear-to-b from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          
          {/* Título da Seção */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-flu-verde font-bold mb-2">
              Explore
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Navegue pela <span className="text-flu-grena">História</span>
            </h2>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-flu-verde/50 hover:shadow-xl hover:-translate-y-1 block"
                >
                  {/* Gradiente sutil no fundo ao passar o mouse */}
                  <div className={`absolute inset-0 bg-linear-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Ícone Colorido */}
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-white shadow-md`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Textos */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-flu-verde transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {section.description}
                  </p>

                  {/* Link com Seta */}
                  <div className="flex items-center text-flu-grena text-sm font-bold">
                    <span>Explorar</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}