// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/sngrcreative': 'https://sngrcreative.pages.dev'
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [react(), keystatic()]
})
