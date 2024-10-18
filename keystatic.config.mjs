// @ts-check
import { config, fields, singleton } from "@keystatic/core";

export default config({
    storage: {
        kind: 'github',
        repo: {
            owner: 'radenpioneer',
            name: 'astro-keystatic-example'
        }
    },

    singletons: {
        site: singleton({
            label: 'Site',
            path: 'src/data/site/site',
            format: 'json',
            schema: {
                title: fields.text({ label: 'Title', validation: { length: { max: 64 } } }),
                description: fields.text({ label: 'Description', validation: { length: { max: 160 } } })
            }
        })
    }
})