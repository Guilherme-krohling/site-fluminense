import { Trophy } from 'lucide-react';

const trophies = [
  {
    name: 'Copa Libertadores',
    count: 1,
    years: ['2023'],
    importance: 'continental',
    description: 'A glória eterna! Após 111 anos, o Fluminense conquistou a América.',
  },
  {
    name: 'Campeonato Brasileiro',
    count: 4,
    years: ['1970', '1984', '2010', '2012'],
    importance: 'national',
    description: 'Tetracampeão brasileiro, com campanhas históricas.',
  },
  {
    name: 'Campeonato Carioca',
    count: 33,
    years: ['1906', '...', '2023'],
    importance: 'state',
    description: 'O maior campeão estadual do Rio de Janeiro no século XX.',
  },
  {
    name: 'Copa do Brasil',
    count: 1,
    years: ['2007'],
    importance: 'national',
    description: 'Conquista emocionante com virada sobre o Figueirense.',
  },
  {
    name: 'Copa Rio (internacional)',
    count: 1,
    years: ['1952'],
    importance: 'other',
    description: 'Competição internacional de clubes de futebol disputada por dois anos seguidos, no Brasil, durante o começo da década de 1950, mais precisamente nos anos de 1951 e 1952.',
  },
  {
    name: 'Recopa Sul-Americana',
    count: 1,
    years: ['2024'],
    importance: 'continental',
    description: 'Disputa entre os campeões da Libertadores e sul-americana.',
  },
];

// Função traduzida para as SUAS cores
const getImportanceColor = (importance: string) => {
  switch (importance) {
    case 'continental':
      return 'from-flu-dourado to-yellow-400'; // Dourado brilhante
    case 'national':
      return 'from-flu-verde to-green-400'; // Verde
    case 'state':
      return 'from-flu-grena to-red-400'; // Grená
    default:
      return 'from-gray-400 to-gray-600'; // Cinza
  }
};

export const Trofeus = () => {
  return (
    <section id="trofeus" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-sm uppercase tracking-[0.3em] text-flu-dourado mb-2 font-bold">
            Conquistas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            SALA DE <span className="text-flu-dourado">TROFÉUS</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-flu-verde via-flu-dourado to-flu-grena mx-auto rounded-full" />
        </div>

        {/* CONTADORES (BIG NUMBERS) */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 animate-slide-up animation-delay-100">
          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-w-[150px]">
            <div className="text-5xl md:text-6xl font-bold text-flu-dourado mb-2">63</div>
            <p className="text-gray-500 uppercase tracking-wider text-sm font-bold">Títulos Oficiais</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-w-[150px]">
            <div className="text-5xl md:text-6xl font-bold text-flu-verde mb-2">1</div>
            <p className="text-gray-500 uppercase tracking-wider text-sm font-bold">Libertadores</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-w-[150px]">
            <div className="text-5xl md:text-6xl font-bold text-flu-grena mb-2">33</div>
            <p className="text-gray-500 uppercase tracking-wider text-sm font-bold">Cariocas</p>
          </div>
        </div>

        {/* GRID DE TROFÉUS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trophies.map((trophy, index) => (
            <div
              key={trophy.name}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-md hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Barra Colorida no Topo do Card */}
              <div className={`h-2 bg-linear-to-r ${getImportanceColor(trophy.importance)}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Ícone com fundo lineare */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center bg-linear-to-br ${getImportanceColor(
                        trophy.importance
                      )} shadow-lg text-white`}
                    >
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 leading-tight">
                        {trophy.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 font-mono">{trophy.years.join(', ')}</p>
                    </div>
                  </div>
                  <span className={`text-3xl font-bold ${
                      trophy.importance === 'continental' ? 'text-flu-dourado' : 
                      trophy.importance === 'national' ? 'text-flu-verde' : 
                      trophy.importance === 'state' ? 'text-flu-grena' : 'text-gray-400'
                  }`}>
                    {trophy.count}x
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">{trophy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};