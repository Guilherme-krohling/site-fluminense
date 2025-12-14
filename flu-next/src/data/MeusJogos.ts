export const meusJogosData = [
    {
    id: 1,
    data: "09/07/2022",
    adversario: "Ceará",
    campeonato: "Brasileirão",
    estadio: "Maracanã",
    placar: "2 x 1",
    resultado: "Vitoria",
    midias: "/images/",
    texto: "A despedida do Fred. O estádio estava lindo, mosaico incrível. Foi emocionante. To procurando outras fotos.",
  },
  {
    id: 2,
    data: "16/05/2023",
    adversario: "varmengo",
    campeonato: "Copa do Brasil - Jogo de ida",
    estadio: "Maracanã",
    placar: "0 x 0",
    resultado: "Empate", // Opções: "Vitoria", "Empate", "Derrota"
    midias: "/images/",
    texto: "Jogo amarrado e muito nervoso. Time do mal jogou fazendo faltas e o juiz não puniu com 1 amarelo se quer.",
  },
  {
    id: 3,
    data: "04/11/2023",
    adversario: "Boca Juniors",
    campeonato: "Libertadores - Final",
    estadio: "Maracanã",
    placar: "2 x 1",
    resultado: "Vitoria", // Opções: "Vitoria", "Empate", "Derrota"
    midias: "/images/",
    texto: "O dia mais feliz da minha vida. Infelizmente não consegui ingresso mas fiz questao de estar no Rio de Janeiro no eterno dia 4 de novembro de 2023",
  },
  {
    id: 4,
    data: "29/11/2023",
    adversario: "Santos",
    campeonato: "brasileirão",
    estadio: "Vila Belmiro",
    placar: "3 x 0",
    resultado: "Vitoria", // Opções: "Vitoria", "Empate", "Derrota"
    midias: "/images/",
    texto: "Foi um dia engraçado, a torcida imaginando que o flu iria entregar para rebaixar o basco mas foi um completo amasso do tricolor. 3 a zero jogando o fino. Nesse dia encontrei o vilella super gente boa.",
  },
  {
    id: 5,
    data: "10/01/2024",
    adversario: "O sol, estava muito quente",
    campeonato: "Nenhum - visita",
    estadio: "Maracanã",
    placar: "-",
    resultado: "-", // Opções: "Vitoria", "Empate", "Derrota"
    midias: "/images/",
    texto: "PENSAR NO TEXTO",
  },
  {
    id: 6,
    data: "10/01/2024",
    adversario: "O sol, estava muito quente",
    campeonato: "Nenhum - visita",
    estadio: "Laranjeiras",
    placar: "-",
    resultado: "-", // Opções: "Vitoria", "Empate", "Derrota"
    midias: [
      "/images/laranjeiras_1.png", // Foto
      "/images/laranjeiras_2.png" // testar video
    ],
    texto: "PENSAR NO TEXTO",
  },
  {
    id: 7,
    data: "29/02/2024",
    adversario: "LDU",
    campeonato: "Recopa Sul-Americana - Final",
    estadio: "Maracanã",
    placar: "2 x 0",
    resultado: "Vitoria", // Opções: "Vitoria", "Empate", "Derrota"
    midias: "/images/",
    texto: "PENSAR NO TEXTO",
  },
// No seu src/data/MeusJogos.ts, mude o nome do campo de foto (singular) para midias (plural), pois aceita os dois:

// TypeScript

// // src/data/MeusJogos.ts
// {
//   id: 6,
//   adversario: "Boca Juniors",
//   // ...
//   midias: [
//     "/jogos/final-liberta.jpg", // Foto
//     "/jogos/john-kennedy-gol.mp4" // Vídeo (Salve na pasta public/jogos)
//   ],
//   texto: "..."
// }
];

