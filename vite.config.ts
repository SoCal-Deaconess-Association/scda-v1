import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'SoCal Deaconess Association & Friends',
    short_name: 'SCDA App',
    theme_color: '#4c867c',
    icons: [
      {
        src: 'scda-logo-small.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/scda-logo.png', // <== don't remove slash, for testing
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'scda-logo.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
};

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), VitePWA(pwaOptions)],
  base: '/',
  resolve: {
    alias: {
      '@api': '/src/api',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@slices': '/src/slices',
      '@models': '/src/models',
    },
  },
  assetsInclude: ['**/*.zip'],
});
