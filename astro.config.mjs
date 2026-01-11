// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://conecta-con-nacho.vercel.app', // URL de Vercel
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  devToolbar: {
    enabled: false
  }
});
