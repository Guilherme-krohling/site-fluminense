"use client";

import React from 'react';
import { meusJogosData } from '@/data/MeusJogos';
import { Calendar, MapPin, Trophy, Info } from 'lucide-react';
// Import do seu componente de carrossel
import ImageCarousel from '@/components/ImagensCarrossel';

export default function MeusJogosPage() {
  
  // 1. Inverte a ordem para o mais recente (ID maior) aparecer em cima
  const jogosOrdenados = [...meusJogosData].reverse();

  const getResultColor = (resultado: string) => {
    switch (resultado) {
      case 'Vitoria': return 'bg-[#006F39] border-[#006F39]';
      case 'Empate': return 'bg-gray-400 border-gray-400';
      case 'Derrota': return 'bg-[#9E0D2C] border-[#9E0D2C]';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="pt-24 pb-8 text-center px-4">
        <h3 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
          DIÁRIO DE TORCEDOR
        </h3>
        <h1 className="text-4xl font-extrabold text-[#0b1f3f] uppercase">
          MINHAS <span className="text-[#9E0D2C]">EXPERIÊNCIAS</span>
        </h1>
        <div className="w-24 h-1 mx-auto mt-4 bg-linear-to-r from-[#9E0D2C] via-white to-[#006F39] rounded-full"></div>
      </div>

      {/* Manifesto (Seu Texto Grande) */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-4 text-6xl text-gray-100 font-serif">“</div>
          <div className="relative z-10 text-gray-700 leading-relaxed text-lg text-justify font-medium">
            Muito prazer me chamo Guilherme Gonzaga, tricolor apaixonado. Sou programador e tomei a iniciativa de fazer esse site em homenagem ao clube que tanto amo. 
            Essa parte é dedicada tentar mostrar um pouco o quanto esse time é importante e presente na minha vida. 
            <br/><br/>
            Hoje em dia não moro mais no Rio de Janeiro, moro em Santos-SP mas ocorre com frequencia fazer bate e volta apenas para ver um jogo. 
            Mesmo de longe acompanhar e torcer é uma obrigação na minha vida, gostaria de ir a todos os jogos no maracanã mas infelizmente não é possível.
            <br/><br/>
            Como explicar o que é ser fluminense ne? Muito difícil colocar em palavras e mais difícil ainda não se emocionar tentado.  
            <br/>
            O fluminense é um sentimento passado de geração em geração, meu pai me ensinou a amar essa instituição. FLUMINENSE É UM SENTIMENTO SEM IGUAL. 
            <br/><br/>
            E eu diria que essa foi a maior e melhor herança que ele vai me deixar. Minha maior ligação com ele é o flu, nós podemos estar sem se falar, 
            brigados ou coisa do tipo, mas se tem jogo esse fato é simplesmente esquecido se tem gol nos nos abraçamos e se perde a frustração é mútua. 
            O jeito que ele me ensinou a viver, amar, respeitar o fluminense nunca será esquecido, muito pelo contrário a cada minuto é intensificado. 
            Com certeza isso será passado para meus filhos, e ciclo vai se repetir e repetir. 
            <br/><br/>
            Torcer para o fluminense é saber que o time vai lutar até o fim e não vai desistir, afinal somos o time de guerreiros. 
            É saber que alguns jogos serão extremamente sofridos, mas no fim nós sabemos que esse sofrimento será recompensado. 
            Afinal nada é mais cara de fluminense do que fazer um jogo impecável contra o líder do campeonato e na rodada seguinte empatar com o lanterna kkkkkkkkkkk. 
            <br/><br/>
            É um sentimento de alívio após um jogo os jogadores vindo na direção do setor sul e começar FLU!👏 FLU!👏 FLU!👏 NENSE! NENSE!  
            <br/><br/>
            O flu é o time do bem e de pessoas do bem, enquanto uns se orgulham em ser o " coisa ruim", "bem-vindos ao inferno". 
            Nós somos um time abençoado, em momentos complicados e nervosos vem aquela música que nunca nos decepciona. 
            “A beeeeeeenção João de Deus, o nosso povo te abraça....” 
            <br/><br/>
            Mesmo sendo um dos times mais subestimados da história, sempre lutando contra arbitragens e sendo diminuído pela mídia, 
            é muito comum ver os “especialistas” após algum jogo dizerem que é mais demérito do adversário do que mérito da nossa equipe. 
            Mas isso não é um problema afinal é quando ninguém acredita que o fluminense cresce e mostra vontade, garra e determinação.  
            Mas o fluminense tem uma arma secreta que nenhum outro time no mundo tem. A sua torcida, a única que pula e canta o jogo todo. 
            “Se o Fluminense jogasse no céu, eu morreria para vê-lo jogar. Nelson Rodrigues” 
            <br/><br/>
            A sensação de pisar nas laranjeiras é algo que eu não consigo explicar. Apenas passar no bairro já me arrepia, ver os postes, muros, 
            estruturas e bandeiras nas cores verde, branco e grená dá um sentimento de orgulho inexplicável. 
            E quando chego finalmente no Estádio Manoel Schwartz, só de ver aquele muro nas 3 cores já arrepia até a alma.  
          </div>
          <div className="absolute bottom-0 right-4 text-6xl text-gray-100 font-serif rotate-180">“</div>
        </div>
      </div>

      {/* --- NOVO: AVISO CRONOLÓGICO --- */}
      <div className="max-w-2xl mx-auto px-4 text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-gray-500 text-sm font-medium">
          <Info size={16} className="text-[#9E0D2C]" />
          <span>
            Abaixo estão listados os jogos que fui em ordem cronológica. A lista é curta pois contém apenas os registros que tenho salvos no celular atual.
          </span>
        </div>
      </div>

      {/* Timeline de Jogos (Ajustada para ficar Larga) */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
        <div className="relative">
          
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {jogosOrdenados.map((jogo, index) => (
              <div key={jogo.id} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Bolinha */}
                <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10 ${getResultColor(jogo.resultado)}`}></div>

                {/* Espaçador (Empurra o card para a ponta) */}
                <div className="hidden md:block md:w-[48%]"></div>

                {/* Card do Jogo (Aumentado para 48%) */}
                <div className="w-full md:w-[48%] pl-12 md:pl-0">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                    
                    {/* Header do Card */}
                    <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide flex items-center gap-1">
                          <Calendar size={12} /> {jogo.data}
                        </span>
                        <h3 className="font-bold text-[#0b1f3f] text-lg">Adversário: {jogo.adversario}</h3>
                      </div>
                      <div className="text-right">
                        <span className="block text-2xl font-black text-[#9E0D2C]">{jogo.placar}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase px-2 py-0.5 bg-gray-200 rounded-full inline-block">
                          {jogo.resultado}
                        </span>
                      </div>
                    </div>

                    {/* Carrossel (Só aparece se tiver midias no JSON) */}
                    {/* @ts-ignore */}
                    {jogo.midias && jogo.midias.length > 0 && (
                      <div className="w-full h-64 md:h-[550px] relative overflow-hidden bg-black">
                        {/* @ts-ignore */}
                        <ImageCarousel images={jogo.midias} themeColor="grena" />
                      </div>
                    )}

                    {/* Texto do Card */}
                    <div className="p-5">
                      <div className="flex gap-4 mb-4 text-xs text-gray-500 font-medium">
                        <span className="flex items-center gap-1"><Trophy size={14} className="text-[#eab308]" /> {jogo.campeonato}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} className="text-[#006F39]" /> {jogo.estadio}</span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        {jogo.texto}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}