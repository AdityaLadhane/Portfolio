import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import * as placeholderData from '../data/placeholderData';

/**
 * Generic hook for fetching data from Sanity with fallback support
 * @param {string} query - GROQ query string
 * @param {string} fallbackKey - Key in placeholderData to use as fallback
 * @returns {Object} { data, loading, error }
 */
export function useSanityData(query, fallbackKey) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await client.fetch(query);
        setData(result);
        setError(null);
      } catch (err) {
        console.error(`Error fetching data from Sanity:`, err);
        setError(err);
        // Fallback to placeholder data
        if (fallbackKey && placeholderData[fallbackKey]) {
          setData(placeholderData[fallbackKey]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, fallbackKey]);

  return { data, loading, error };
}

/**
 * Hook for fetching personal info (singleton)
 */
export function usePersonalInfo() {
  const query = `*[_type == "personalInfo"][0]{
    _id,
    name,
    title,
    bio,
    age,
    education,
    avatar,
    email,
    phone,
    location,
    socialMedia,
    story,
    achievements,
    coreValues,
    currentFocus,
    futureDreams
  }`;
  
  return useSanityData(query, 'personalInfo');
}

/**
 * Hook for fetching all projects
 */
export function useProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    description,
    category,
    image,
    technologies,
    features,
    challenges,
    outcomes,
    links
  }`;
  
  return useSanityData(query, 'projects');
}

/**
 * Hook for fetching featured projects
 */
export function useFeaturedProjects() {
  const query = `*[_type == "project" && featured == true] | order(_createdAt desc)[0...3]{
    _id,
    title,
    description,
    category,
    image,
    technologies,
    featured
  }`;
  
  return useSanityData(query, 'projects');
}

/**
 * Hook for fetching all blog posts (excluding drafts)
 */
export function useBlogPosts() {
  const query = `*[_type == "blogPost" && isDraft != true] | order(publishDate desc){
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    publishDate,
    author,
    category,
    tags,
    seo
  }`;
  
  return useSanityData(query, 'blogPosts');
}

/**
 * Hook for fetching recent blog posts
 */
export function useRecentBlogPosts() {
  const query = `*[_type == "blogPost" && isDraft != true] | order(publishDate desc)[0...3]{
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishDate,
    category
  }`;
  
  return useSanityData(query, 'blogPosts');
}

/**
 * Hook for fetching a single blog post by slug
 */
export function useBlogPost(slug) {
  const query = `*[_type == "blogPost" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    publishDate,
    author,
    category,
    tags,
    seo
  }`;
  
  return useSanityData(query, null);
}

/**
 * Hook for fetching skill categories
 */
export function useSkills() {
  const query = `*[_type == "skillCategory"] | order(_createdAt asc){
    _id,
    key,
    name,
    icon,
    color,
    description,
    skills[]{
      name,
      level,
      experience
    }
  }`;
  
  return useSanityData(query, 'skillsData');
}

/**
 * Hook for fetching tools
 */
export function useTools() {
  const query = `*[_type == "tool"] | order(order asc){
    _id,
    name,
    category,
    icon,
    proficiency,
    yearsOfExperience,
    description,
    order
  }`;
  
  return useSanityData(query, 'toolsData');
}

/**
 * Hook for fetching testimonials
 */
export function useTestimonials() {
  const query = `*[_type == "testimonial"] | order(order asc){
    _id,
    name,
    role,
    company,
    content,
    avatar,
    rating,
    order
  }`;
  
  return useSanityData(query, 'testimonials');
}
