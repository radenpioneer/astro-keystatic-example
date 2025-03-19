// @ts-check

import { config, singleton, fields } from '@keystatic/core'

export default config({
  storage: import.meta.env.DEV
    ? {
        kind: 'local'
      }
    : {
        kind: 'github',
        repo: 'radenpioneer/astro-keystatic-example'
      },

  singletons: {
    site: singleton({
      label: 'Site Settings',
      path: 'src/content/site/site',
      format: 'json',
      schema: {
        title: fields.text({
          label: 'Site Title',
          validation: {
            isRequired: true,
            length: {
              max: 160
            }
          }
        }),
        description: fields.text({
          label: 'Site Description',
          multiline: true,
          validation: {
            isRequired: true,
            length: {
              max: 160
            }
          }
        }),
        favicon: fields.image({
          label: 'Site Favicon',
          directory: 'public',
          publicPath: '',
          validation: {
            isRequired: true
          }
        })
      }
    })
  }
})
