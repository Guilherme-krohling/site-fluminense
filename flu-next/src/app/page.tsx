import Link from "next/link";
import Image from "next/image"; // O Next tem um componente de imagem otimizado

export default function Home() {
  return (
    <main className="flex-1 flex flex-col min-h-screen">
      
      {/* SEÇÃO HERO (FOTO DA TORCIDA) */}
      <section className="relative h-[500px] bg-flu-verde flex items-center justify-center">
        {/* No Next, imagens de fundo precisam de um jeito especial, mas vamos usar 
            o jeito simples (img tag) primeiro para não complicar, depois otimizamos */}
        <img 
          src="/images/torcida.jpg" // Certifique-se que copiou a foto com esse nome para a pasta public
          alt="Torcida do Fluminense" 
          className="absolute inset-0 opacity-30 w-full h-full object-cover"
        />
        
        <div className="text-center z-10 relative px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            A História
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
            Clube tantas vezes campeão
          </p>
          
          <Link 
            href="/historia" 
            className="bg-white text-flu-verde font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition shadow-lg"
          >
            Começar a jornada
          </Link>
        </div>
      </section>

      {/* SEÇÃO GRID DE NAVEGAÇÃO */}
      <section className="bg-flu-grena py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <Link href="/titulos">
                <div className="bg-gray-200 text-flu-grena shadow-lg rounded-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2">Títulos</h3>
                    <p className="text-flu-verde text-sm">Conheça nossas glórias</p>
                </div>
            </Link>

            {/* CARD 2 */}
            <Link href="/guerreiros">
                <div className="bg-gray-200 text-flu-grena shadow-lg rounded-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2">Guerreiros</h3>
                    <p className="text-flu-verde text-sm">Por que time de guerreiros?</p>
                </div>
            </Link>

            {/* CARD 3 */}
            <Link href="/historia">
                <div className="bg-gray-200 text-flu-grena shadow-lg rounded-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2">Trajetória</h3>
                    <p className="text-flu-verde text-sm">Conheça a história desde 1902</p>
                </div>
            </Link>

        </div>
      </section>
    </main>
  );
}