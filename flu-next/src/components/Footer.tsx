import { Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    // py-12: Adiciona espaço em cima e embaixo. A faixa vai descer.
    <footer className="bg-neutral-900 text-white mt-auto py-12">
      
      {/* Container para centralizar e limitar a largura da faixa e do conteúdo */}
      <div className="container mx-auto px-4">
        
        {/* FAIXA TRICOLOR (Agora dentro do container e com margem embaixo) */}
        <div className="tricolor-stripe mb-8 rounded-full" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              FLU<span className="text-flu-dourado">MINENSE</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Uma homenagem ao Tricolor
            </p>
          </div>

          {/* CENTRO: Citação Nelson Rodrigues (MUDANÇA AQUI) */}
          <div className="flex flex-col items-center text-center max-w-md mx-auto md:mx-0">
            <p className="text-gray-300 text-sm italic font-serif">
              "O Fluminense é o único time Tricolor do mundo, o resto são só times de três cores."
            </p>
            <span className="text-gray-500 text-xs uppercase tracking-wider mt-1 mb-2">
              - Nelson Rodrigues
            </span>
          </div>

          {/* Link Externo (Correção da cor azul com !) */}
          <a
            href="https://www.fluminense.com.br"
            target="_blank"
            rel="noopener noreferrer"
            // !text-gray-400 força a cor cinza. no-underline tira o sublinhado padrão.
            className="flex items-center gap-2 text-gray-400 hover:text-flu-dourado no-underline transition-colors text-sm font-medium"
          >
            <span>Site Oficial</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} - Site de fã. Não oficial.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Fluminense Football Club - Desde 1902
          </p>
        </div>
      </div>
    </footer>
  );
};