import imageUrlBuilder from '@sanity/image-url';
import { client } from '../lib/sanity';

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

/**
 * Get optimized image URL from Sanity
 * @param {Object} source - Sanity image object
 * @param {Number} width - Desired width in pixels
 * @param {Number} quality - Image quality (1-100)
 * @returns {String} Optimized image URL
 */
export function getOptimizedImageUrl(source, width = 800, quality = 85) {
  if (!source) return '';
  
  // If it's already a URL string, return as-is
  if (typeof source === 'string') return source;
  
  return builder
    .image(source)
    .width(width)
    .quality(quality)
    .auto('format') // Automatically serve WebP when supported
    .fit('max')
    .url();
}

/**
 * Get responsive srcSet for different screen sizes
 * @param {Object} source - Sanity image object
 * @param {Array} widths - Array of widths [400, 800, 1200]
 * @param {Number} quality - Image quality (1-100)
 * @returns {String} srcSet string
 */
export function getResponsiveSrcSet(source, widths = [400, 800, 1200], quality = 85) {
  if (!source) return '';
  
  // If it's already a URL string, return empty (can't generate srcSet)
  if (typeof source === 'string') return '';
  
  return widths
    .map(width => {
      const url = builder
        .image(source)
        .width(width)
        .quality(quality)
        .auto('format')
        .fit('max')
        .url();
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Get thumbnail URL (small, optimized)
 * @param {Object} source - Sanity image object
 * @param {Number} size - Thumbnail size (square)
 * @returns {String} Thumbnail URL
 */
export function getThumbnailUrl(source, size = 100) {
  if (!source) return '';
  
  // If it's already a URL string, return as-is
  if (typeof source === 'string') return source;
  
  return builder
    .image(source)
    .width(size)
    .height(size)
    .quality(80)
    .auto('format')
    .fit('crop')
    .url();
}
