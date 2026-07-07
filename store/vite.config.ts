import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { localComponentsAlias } from '../config/aliases';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: localComponentsAlias,
  },
  server: {
    port: 5173
  }
});
