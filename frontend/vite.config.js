import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Legacy from '@vitejs/plugin-legacy';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 80,
  },
})
