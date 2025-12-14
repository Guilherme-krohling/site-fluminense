import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer"; // 1. Importar
import BackgroundMusic from "@/components/BackgroundMusica";

export const metadata: Metadata = {
  title: "Meu Fluminense",
  description: "Projeto de Fã",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* min-h-screen e flex-col garantem que o footer vá pro final se a página for curta */}
      <body className="antialiased bg-flu-grena min-h-screen flex flex-col">
        
        <Header />
        
        {children}

        {/* MUSICA DE FUNDO */}
        <BackgroundMusic />

        <Footer /> {/*O Footer entra aqui, no final de tudo */}
      
      </body>
    </html>
  );
}