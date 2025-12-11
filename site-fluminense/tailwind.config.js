/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: Diz ao Tailwind: "Olhe todos os arquivos .html e .js para saber quais classes usar"
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        flu:{
          grena: '#870A28',
          verde: '#00613C',
          branco: '#FFFFFF',
          dourado: '#D4AF37',
        }
      },
      fontFamily:{
        // Vamos usar fontes padrão por enquanto, depois importamos do Google
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

