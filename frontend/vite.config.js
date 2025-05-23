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
      port: 443
    },
    proxy: {
      '/api': {
        target: 'http://10.6.63.30:3010',
        //10.6.63.30 Localhost //http://10.6.6.38 Servidor
        changeOrigin: true,
        secure: false
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
