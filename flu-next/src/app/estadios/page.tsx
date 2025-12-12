import { MapPin, Users, Calendar, Heart } from 'lucide-react';
import { ImageCarousel } from '@/components/ImagensCarrossel'; // <-- Importamos nossa ferramenta nova

// --- DEFINIÇÃO DAS IMAGENS ---
// Garanta que esses arquivos existem na pasta public/images
const imagensLaranjeiras = [
  '/images/laranjeiras_1.png',
  '/images/laranjeiras_2.png',
  '/images/laranjeiras_3.png',
  '/images/laranjeiras_4.png'
];

const imagensMaracana = [
  '/images/maracana_1.jpg',
  '/images/maracana_2.jpg',
  '/images/maracana_3.jpg',
  '/images/maracana_4.jpg',
  '/images/maracana_5.jpg'
];


export default function Estadios() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      
      {/* CABEÇALHO DA PÁGINA */}
      <div className="text-center mb-16 animate-slide-up">
        <p className="text-sm uppercase tracking-[0.3em] text-flu-verde font-bold mb-2">
          Nossas Casas
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 uppercase">
          Templos do <span className="text-flu-grena">Futebol</span>
        </h1>
        <div className="h-1 w-24 bg-linear-to-r from-flu-verde via-white to-flu-grena mx-auto mt-4 rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* --- CARD 1: LARANJEIRAS (Tema Verde) --- */}
        <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-flu-verde/30 transition-all duration-300 animate-slide-up animation-delay-100">
          
          {/* Área da Foto (Agora com Carrossel) */}
          <div className="relative h-72 overflow-hidden bg-gray-200">
            {/* Overlay colorido que some no hover (mantivemos do design anterior) */}
            {/* <div className="absolute inset-0  group-hover:bg-transparent transition-colors z-20 pointer-events-none" /> */}
            
            {/* Ícone de Coração (mantivemos fixo sobre o carrossel) */}
            <div className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur p-2 rounded-full text-flu-verde shadow-md">
              <Heart className="fill-flu-verde w-6 h-6" />
            </div>

            {/* NOSSO NOVO COMPONENTE CARROSSEL AQUI */}
            {/* Passamos as imagens e a cor do tema */}
            <ImageCarousel images={imagensLaranjeiras} themeColor="verde" />
          
          </div>

          {/* Conteúdo */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Estádio das Laranjeiras</h2>
            <p className="text-sm text-flu-verde font-bold mb-6">Estádio Manoel Schwartz</p>

            {/* Grid de Informações */}
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <MapPin className="w-5 h-5 mx-auto text-flu-verde mb-1" />
                <span className="text-xs text-gray-500 block">Local</span>
                <span className="text-sm font-bold text-gray-700">Laranjeiras</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <Users className="w-5 h-5 mx-auto text-flu-verde mb-1" />
                <span className="text-xs text-gray-500 block">Capacidade</span>
                <span className="text-sm font-bold text-gray-700">8.000</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <Calendar className="w-5 h-5 mx-auto text-flu-verde mb-1" />
                <span className="text-xs text-gray-500 block">Inaugurado</span>
                <span className="text-sm font-bold text-gray-700">1919</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              O berço do Fluminense e do futebol brasileiro. Construído pela própria torcida, foi o primeiro estádio de cimento armado da América Latina. Palco do primeiro título Sul-Americano da Seleção Brasileira.
            </p>
          </div>
        </div>

        {/* --- CARD 2: MARACANÃ (Tema Grená) --- */}
        <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-flu-grena/30 transition-all duration-300 animate-slide-up animation-delay-200">
          
          {/* Área da Foto (Carrossel) */}
          <div className="relative h-72 overflow-hidden bg-gray-200">
            {/* <div className="absolute inset-0 bg-flu-grena/20 group-hover:bg-transparent transition-colors z-20 pointer-events-none" /> */}
            <div className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur p-2 rounded-full text-flu-grena shadow-md">
              <Heart className="fill-flu-grena w-6 h-6" />
            </div>

            {/* NOSSO NOVO COMPONENTE CARROSSEL AQUI */}
            <ImageCarousel images={imagensMaracana} themeColor="grena" />
          </div>

          {/* Conteúdo */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Maracanã</h2>
            <p className="text-sm text-flu-grena font-bold mb-6">Estádio Jornalista Mário Filho</p>

            {/* Grid de Informações */}
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <MapPin className="w-5 h-5 mx-auto text-flu-grena mb-1" />
                <span className="text-xs text-gray-500 block">Local</span>
                <span className="text-sm font-bold text-gray-700">Zona Norte</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <Users className="w-5 h-5 mx-auto text-flu-grena mb-1" />
                <span className="text-xs text-gray-500 block">Capacidade</span>
                <span className="text-sm font-bold text-gray-700">78.838</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <Calendar className="w-5 h-5 mx-auto text-flu-grena mb-1" />
                <span className="text-xs text-gray-500 block">Inaugurado</span>
                <span className="text-sm font-bold text-gray-700">1950</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              O templo máximo do futebol mundial. Casa do Fluminense nos grandes jogos, onde a torcida tricolor faz as festas mais bonitas do mundo. Palco da Glória Eterna de 2023.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}