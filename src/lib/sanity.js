import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Fail-fast validation for required environment variables
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    'Missing required Sanity environment variables. Please ensure VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET are set in your .env file.'
  );
}

// Create Sanity client
export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // Use CDN for faster response times
  apiVersion: '2024-01-01', // Use current date for latest API features
});

// Image URL builder
const builder = imageUrlBuilder(client);

/**
 * Generate image URL from Sanity image asset
 * @param {Object} source - Sanity image object
 * @returns {Object} Image URL builder instance
 */
export function urlFor(source) {
  return builder.image(source);
}

/**
 * Get optimized image URL with dimensions
 * @param {Object} source - Sanity image object
 * @param {number} width - Desired width
 * @param {number} height - Desired height (optional)
 * @returns {string} Optimized image URL
 */
export function getImageUrl(source, width = 800, height = null) {
  if (!source) return null;
  
  let imageBuilder = urlFor(source).width(width).auto('format');
  
  if (height) {
    imageBuilder = imageBuilder.height(height);
  }
  
  return imageBuilder.url();
}
