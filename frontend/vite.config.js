import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Legacy from '@vitejs/plugin-legacy';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000',  // Asegúrate de que este es el puerto donde se está ejecutando tu servidor Django
    },
  },
})
