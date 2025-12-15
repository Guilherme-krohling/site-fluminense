import { anosCariocas } from '@/data/Titulos';
import { Trophy } from 'lucide-react';

export const GaleriaCarioca = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
         <div className="bg-neutral-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Decoração de Fundo */}
            <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none text-white">
               <Trophy size={400} />
            </div>

            <div className="relative z-10">
               <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-2">O clube com mais estaduais no século XX</h2>
                  <p className="text-white/70 max-w-2xl mx-auto">
                    O Rei do Rio. Confira todos os 33 anos em que pintamos o Rio de Janeiro de Verde, Branco e Grená.
                  </p>
               </div>

               {/* Grid de Anos */}
               <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3">
                  {anosCariocas.map((ano) => (
                     <div 
                        key={ano} 
                        className="bg-white/10 hover:bg-[#9E0D2C] hover:scale-110 transition-all duration-300 rounded-lg py-2 px-1 text-center font-bold text-sm border border-white/10 cursor-default"
                     >
                        {ano}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};