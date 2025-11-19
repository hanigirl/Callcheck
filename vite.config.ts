import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@design-system': path.resolve(__dirname, './design-system'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Allow importing CSS files
      },
    },
  },
  server: {
    port: 5173,
    fs: {
      // Allow serving files from parent directories
      allow: ['..'],
    },
  },
  build: {
    outDir: 'dist/renderer',
    emptyOutDir: true,
  },
});

