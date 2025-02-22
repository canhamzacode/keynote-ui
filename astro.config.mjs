// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'My Docs',
      social: {
          github: 'https://github.com/withastro/starlight',
      },
  }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});