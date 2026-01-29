import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

// Fail-fast validation for required environment variables
if (!process.env.SANITY_STUDIO_PROJECT_ID) {
  throw new Error('Missing required environment variable: SANITY_STUDIO_PROJECT_ID')
}

if (!process.env.SANITY_STUDIO_DATASET) {
  throw new Error('Missing required environment variable: SANITY_STUDIO_DATASET')
}

export default defineConfig({
  name: 'default',
  title: 'Portfolio CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
