import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

export const site = defineCollection({
  type: 'content_layer',
  loader: glob({ pattern: '**/*.json', base: 'src/data/site' }),
  schema: z.object({
    title: z.string().max(64),
    description: z.string().max(160)
  })
})
