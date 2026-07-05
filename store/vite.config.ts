import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@local/components': path.resolve(__dirname, '../component-library-package/src')
    }
  },
  server: {
    port: 5173
  }
});
