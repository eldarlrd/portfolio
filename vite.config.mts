import { defineConfig } from 'vite';
// @ts-expect-error: missing type declaration
import riot from 'rollup-plugin-riot';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vite.dev/config
export default defineConfig({
  base: '/portfolio/',
  plugins: [riot(), ViteYaml()],
  resolve: { alias: { '@': '/src' } }
});
