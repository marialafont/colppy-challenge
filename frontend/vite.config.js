import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    strictPort: false,
    allowedHosts: [
      'frontend-production-75d4.up.railway.app',
      '.railway.app',
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          recharts: ['recharts'],
          'react-query': ['@tanstack/react-query'],
        },
      },
    },
  },
});
