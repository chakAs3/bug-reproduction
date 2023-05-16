/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'tp-ui',
      fileName: (format) => `tp-ui.${format}.js`
    }
  },
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});