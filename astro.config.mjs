import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://electrician-demo.vercel.app',
  compressHTML: true,
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
