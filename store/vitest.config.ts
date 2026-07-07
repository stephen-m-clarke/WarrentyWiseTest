import { defineConfig } from 'vitest/config';
import { localComponentsAlias } from '../config/aliases';

export default defineConfig({
  resolve: {
    alias: localComponentsAlias,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./../config/vitest.setup.js'],
  },
});
