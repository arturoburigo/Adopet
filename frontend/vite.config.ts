import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Garante que o base path esteja configurado corretamente
  build: {
    outDir: 'dist', 
  },
  server: {
    port: 3000, // Porta opcional para ambiente local
    open: true, // Abrir automaticamente no navegador
  },
  preview: {
    port: 5000, // Porta do comando "vite preview"
  },
});