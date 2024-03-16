import { defineConfig } from 'vite';
import riot from 'rollup-plugin-riot';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config
export default defineConfig({
  base: '/portfolio/',
  plugins: [riot(), ViteYaml()],
  resolve: {
    alias: { '@': '/src' }
  }
});