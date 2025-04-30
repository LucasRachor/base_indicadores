import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/indicadores',
  server: {
    host: true,
    port: 5173,
    hmr: {
      host: 'www.fieam.com.br',
      port: 443,
    },
    proxy: {
      '/api': {
        target: 'http://10.6.63.30:3010',
        changeOrigin: true,
        secure: false, // desativa validação SSL (já que o destino é HTTP)
        rewrite: (path) => path.replace(/^\/api/, '') // remove /api do caminho se necessário
      }
    }
  },
  build: {
    outDir: 'dist',
  },
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
