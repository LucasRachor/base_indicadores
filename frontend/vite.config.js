import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/indicadores', // Define a base do projeto
  server: {
    host: true,
    port: 5173, // Porta padrão do Vite
    hmr: {
      host: 'www.fieam.com.br', // Ou 'www.fieam.com.br' se necessário
      port: 443, // Se estiver usando HTTPS, caso contrário, pode remover essa linha
    },
  },
  build: {
    outDir: 'dist',
  },
  // 🔹 Adicionando um redirecionamento correto para React Router
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  preview: {
    port: 4173,
    strictPort: true,
    open: false,
  },
})
