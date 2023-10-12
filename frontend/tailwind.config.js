// Importa el tipo Config de tailwindcss
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Especifica los archivos donde Tailwind debe buscar clases
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Busca en todos los archivos JavaScript y TypeScript dentro de la carpeta src
    "./index.html", // También busca en el archivo index.html si existe
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}