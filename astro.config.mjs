import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), keystatic()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  vite: {
    define: {
      'process.env': process.env
    }
  },
  experimental: {
    contentLayer: true
  }
});