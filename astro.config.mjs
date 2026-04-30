import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://electrician-demo.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
