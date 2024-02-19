import { defineConfig } from 'vite';
import riot from 'rollup-plugin-riot';

// https://vitejs.dev/config
export default defineConfig({
  base: '/portfolio/',
  plugins: [riot()],
  resolve: {
    alias: { '@': '/src' }
  }
});