// import { Trophy, Star, Award, Medal } from 'lucide-react';

import { Trofeus } from '@/components/Trofeus'

export default function titulos() {
return (
    // pt-20 para compensar o menu fixo, caso precise
    <main className="min-h-screen pt-5 bg-gray-50">
      <Trofeus />
    </main>
  );   
}
// //-----------------------------------------------------------------------CODIGO 1-------------------------------------------------------------------------
//   return (
//     <main className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      
//       {/* CABEÇALHO COM CONTADORES (HERO) */}
//       <div className="text-center mb-20 animate-slide-up">
//         <p className="text-sm uppercase tracking-[0.3em] text-flu-dourado font-bold mb-3">
//           Conquistas
//         </p>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-800 uppercase mb-4">
//           Sala de <span className="text-flu-dourado">Troféus</span>
//         </h1>
//         <div className="h-1 w-24 bg-gradient-to-r from-flu-verde via-flu-dourado to-flu-grena mx-auto mb-12 rounded-full" />

//         {/* OS NÚMEROS GRANDES */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
//             <span className="block text-5xl md:text-6xl font-bold text-flu-dourado mb-2">41+</span>
//             <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Títulos Oficiais</span>
//           </div>
//           <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
//             <span className="block text-5xl md:text-6xl font-bold text-flu-verde mb-2">1</span>
//             <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Libertadores</span>
//           </div>
//           <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
//             <span className="block text-5xl md:text-6xl font-bold text-flu-grena mb-2">33</span>
//             <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Cariocas</span>
//           </div>
//         </div>
//       </div>

//       {/* GRID DE CAMPEONATOS (DETALHADO) */}
//       <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

//         {/* LIBERTADORES (DESTAQUE DOURADO) */}
//         <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-flu-dourado relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 animate-slide-up animation-delay-100">
//           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
//             <Trophy size={120} className="text-flu-dourado" />
//           </div>
//           <div className="relative z-10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-yellow-50 rounded-lg text-flu-dourado">
//                 <Trophy size={32} />
//               </div>
//               <span className="text-3xl font-bold text-flu-dourado">1x</span>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Copa Libertadores</h3>
//             <p className="text-gray-500 text-sm mb-4">A Glória Eterna! Após 111 anos, o Fluminense conquistou a América no Maracanã.</p>
//             <div className="flex gap-2 flex-wrap">
//               <span className="px-3 py-1 bg-flu-dourado text-white text-xs font-bold rounded-full">2023</span>
//             </div>
//           </div>
//         </div>

//         {/* BRASILEIRÃO (VERDE) */}
//         <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-flu-verde relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 animate-slide-up animation-delay-200">
//           <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
//             <Star size={120} className="text-flu-verde" />
//           </div>
//           <div className="relative z-10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-green-50 rounded-lg text-flu-verde">
//                 <Star size={32} />
//               </div>
//               <span className="text-3xl font-bold text-flu-verde">4x</span>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Campeonato Brasileiro</h3>
//             <p className="text-gray-500 text-sm mb-4">Tetracampeão brasileiro, com campanhas históricas e times inesquecíveis.</p>
//             <div className="flex gap-2 flex-wrap">
//               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">1970</span>
//               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">1984</span>
//               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">2010</span>
//               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">2012</span>
//             </div>
//           </div>
//         </div>

//         {/* COPA DO BRASIL (VERDE) */}
//         <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-flu-verde relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 animate-slide-up animation-delay-300">
//           <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
//             <Award size={120} className="text-flu-verde" />
//           </div>
//           <div className="relative z-10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-green-50 rounded-lg text-flu-verde">
//                 <Award size={32} />
//               </div>
//               <span className="text-3xl font-bold text-flu-verde">1x</span>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Copa do Brasil</h3>
//             <p className="text-gray-500 text-sm mb-4">Conquista emocionante com virada sobre o Figueirense fora de casa.</p>
//             <div className="flex gap-2 flex-wrap">
//               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">2007</span>
//             </div>
//           </div>
//         </div>

//         {/* CARIOCA (GRENÁ) */}
//         <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-flu-grena relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 animate-slide-up animation-delay-300">
//           <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
//             <Medal size={120} className="text-flu-grena" />
//           </div>
//           <div className="relative z-10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-red-50 rounded-lg text-flu-grena">
//                 <Medal size={32} />
//               </div>
//               <span className="text-3xl font-bold text-flu-grena">33x</span>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Campeonato Carioca</h3>
//             <p className="text-gray-500 text-sm mb-4">O Rei do Rio. Hegemonia estadual construída desde o início do século XX.</p>
//             <div className="flex gap-2 flex-wrap">
//               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">Último: 2023</span>
//               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">Bi: 2022/23</span>
//             </div>
//           </div>
//         </div>
        
//         {/* PRIMEIRA LIGA (CINZA) */}
//          <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-gray-400 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 animate-slide-up animation-delay-300">
//           <div className="relative z-10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-gray-100 rounded-lg text-gray-600">
//                 <Trophy size={32} />
//               </div>
//               <span className="text-3xl font-bold text-gray-400">1x</span>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Primeira Liga</h3>
//             <p className="text-gray-500 text-sm mb-4">Torneio nacional entre grandes clubes.</p>
//             <div className="flex gap-2 flex-wrap">
//               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">2016</span>
//             </div>
//           </div>
//         </div>

//         {/* RIO-SÃO PAULO (CINZA) */}
//          <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-gray-400 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 animate-slide-up animation-delay-300">
//           <div className="relative z-10">
//             <div className="flex justify-between items-start mb-4">
//               <div className="p-3 bg-gray-100 rounded-lg text-gray-600">
//                 <Trophy size={32} />
//               </div>
//               <span className="text-3xl font-bold text-gray-400">1x</span>
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Torneio Rio-São Paulo</h3>
//             <p className="text-gray-500 text-sm mb-4">Clássico torneio entre os maiores clubes do país.</p>
//             <div className="flex gap-2 flex-wrap">
//               <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">1957</span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }
// //-----------------------------------------------------------------------CODIGO 1-------------------------------------------------------------------------
// //--------------------------------------------------------------------------------------------------------------------------------------------------------
// //-----------------------------------------------------------------------CODIGO 2-------------------------------------------------------------------------
// import { Layout } from '@/app/layout';
// import { Trofeus } from '@/components/Trofeus';

// const Trofeus = () => {
//   return (
//     <Layout>
//       <Trofeus />
//     </Layout>
//   );
// };

// export default Trofeus;
