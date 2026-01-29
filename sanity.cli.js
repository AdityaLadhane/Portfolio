import { defineCliConfig } from 'sanity/cli'

// Fail-fast validation for required environment variables
if (!process.env.SANITY_STUDIO_PROJECT_ID) {
  throw new Error('Missing required environment variable: SANITY_STUDIO_PROJECT_ID')
}

if (!process.env.SANITY_STUDIO_DATASET) {
  throw new Error('Missing required environment variable: SANITY_STUDIO_DATASET')
}

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET
  }
})
