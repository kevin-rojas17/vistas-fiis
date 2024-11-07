import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vistas-fiis/', // Agrega aquí el nombre del repositorio
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
