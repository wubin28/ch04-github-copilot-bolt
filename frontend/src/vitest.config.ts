import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    globals: true, // Enables the global APIs like expect
    deps: {
      inline: ['@testing-library/jest-dom']
    }
  },
});