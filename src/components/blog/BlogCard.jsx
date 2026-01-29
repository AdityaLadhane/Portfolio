import React from 'react';
import { Calendar, Clock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { getOptimizedImageUrl, getResponsiveSrcSet } from '../../utils/imageHelpers';

const BlogCard = ({ post, onClick }) => {
  return (
    <motion.article
      className="card group cursor-pointer overflow-hidden"
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Featured Image */}
      <div className="relative overflow-hidden">
        <img
          src={getOptimizedImageUrl(post.featuredImage, 600, 80)}
          srcSet={getResponsiveSrcSet(post.featuredImage, [400, 600, 800], 80)}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={post.title}
          loading="lazy"
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Tags */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
            {post.tags[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-gray-600 line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* Additional Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(1).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
