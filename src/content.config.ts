import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro:schema'

export const collections = {
  site: defineCollection({
    loader: glob({ pattern: '**/*.json', base: 'src/content/site' }),
    schema: z.object({
      title: z.string().max(160),
      description: z.string().max(160),
      favicon: z.string()
    })
  })
}
