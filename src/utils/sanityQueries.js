/**
 * GROQ queries for fetching data from Sanity CMS
 * Field names match the schema definitions exactly
 */

// Personal Info Query (Singleton)
export const personalInfoQuery = `*[_type == "personalInfo"][0]{
  _id,
  name,
  title,
  bio,
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

// Projects Queries
export const projectsQuery = `*[_type == "project"] | order(_createdAt desc){
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

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(_createdAt desc)[0...3]{
  _id,
  title,
  description,
  category,
  image,
  technologies,
  featured
}`;

// Blog Post Queries
export const blogPostsQuery = `*[_type == "blogPost" && isDraft != true] | order(publishDate desc){
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

export const recentBlogPostsQuery = `*[_type == "blogPost" && isDraft != true] | order(publishDate desc)[0...3]{
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishDate,
  category
}`;

export const blogPostBySlugQuery = (slug) => `*[_type == "blogPost" && slug.current == "${slug}"][0]{
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

// Skills Query
export const skillsQuery = `*[_type == "skillCategory"] | order(_createdAt asc){
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

// Tools Query
export const toolsQuery = `*[_type == "tool"] | order(order asc){
  _id,
  name,
  category,
  icon,
  proficiency,
  yearsOfExperience,
  description,
  order
}`;

// Testimonials Query
export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  _id,
  name,
  role,
  company,
  content,
  avatar,
  rating,
  order
}`;
