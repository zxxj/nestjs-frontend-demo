import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  server: {
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
      },
    },
  },
});
