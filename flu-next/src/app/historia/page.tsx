import Image from "next/image";

export default function Historia() {
  return (
    <main className="flex-1 container mx-auto p-6 space-y-12 text-white pb-20">
      
      {/* TÍTULO PRINCIPAL */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-flu-dourado mb-4">
          Nossa Trajetória
        </h1>
        <p className="text-xl text-gray-300">Desde 1902 construindo a história</p>
      </div>

      {/* SEÇÃO 1: 1902 (Texto Esquerda / Foto Direita) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl text-flu-dourado font-bold mb-4">1902: A Fundação</h2>
          <p className="text-gray-200 leading-relaxed text-lg">
            Filho de pai inglês, <strong>Oscar Cox</strong> trouxe da Europa não apenas a paixão pelo esporte, mas a visão de criar algo eterno. 
            Em 21 de julho de 1902, ele liderou a reunião histórica na Rua Marquês de Abrantes que fundou o Fluminense, 
            introduzindo o futebol de forma organizada no Rio de Janeiro. O pioneirismo está no nosso DNA.
          </p>
        </div>
        <div className="flex justify-center">
             {/* Ajuste o nome da imagem conforme o que você salvou na pasta public/images */}
            <img 
              src="/images/Oscar_Cox.jpg" 
              alt="Oscar Cox" 
              className="rounded-lg shadow-xl border-4 border-flu-dourado max-w-sm w-full"
            />
        </div>
      </section>

      {/* LINHA SEPARADORA */}
      <hr className="border-flu-dourado mx-auto w-1/2" />

      {/* SEÇÃO 2: MÁQUINA TRICOLOR (Foto Esquerda / Texto Direita) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* No Mobile a foto fica em cima por causa da ordem natural, no PC fica na esquerda */}
        <div className="flex justify-center order-first md:order-first">
            <img 
              src="/images/maquina_tricolor.jpeg" 
              alt="A Máquina Tricolor" 
              className="rounded-lg shadow-xl border-4 border-flu-dourado max-w-sm w-full"
            />
        </div>
        <div>
          <h2 className="text-3xl text-flu-dourado font-bold mb-4">A Máquina Tricolor</h2>
          <p className="text-gray-200 leading-relaxed text-lg">
            Nos anos 70, o Fluminense montou um dos maiores esquadrões da história do futebol mundial. 
            Liderados pelo ídolo <strong>Rivelino</strong>, a 'Máquina' encantou o Brasil com um futebol ofensivo e envolvente, 
            conquistando o Bicampeonato Carioca de 1975/76 e deixando saudade em quem ama o bom futebol.
          </p>
        </div>
      </section>

      {/* LINHA SEPARADORA */}
      <hr className="border-flu-dourado mx-auto w-1/2" />

      {/* SEÇÃO 3: GLÓRIA ETERNA (Texto Esquerda / Foto Direita) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl text-flu-dourado font-bold mb-4">2023: A Glória Eterna</h2>
          <p className="text-gray-200 leading-relaxed text-lg">
            O dia 4 de novembro de 2023 ficará marcado para sempre. Em um Maracanã pulsante, o Fluminense superou o Boca Juniors 
            com gols de <strong>Cano</strong> e <strong>John Kennedy</strong>. O grito que estava preso na garganta finalmente ecoou: 
            Campeão da América. O destino foi cumprido.
          </p>
        </div>
        <div className="flex justify-center">
            <img 
              src="/images/cano_libertadores.jpg" 
              alt="Cano Campeão" 
              className="rounded-lg shadow-xl border-4 border-flu-dourado max-w-sm w-full"
            />
        </div>
      </section>

    </main>
  );
}