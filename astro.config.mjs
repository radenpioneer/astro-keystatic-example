import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [react(), keystatic()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  experimental: {
    contentLayer: true
  }
});