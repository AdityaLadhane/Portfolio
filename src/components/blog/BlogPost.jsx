import React from 'react';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from '../common/Modal';

const BlogPost = ({ post, isOpen, onClose }) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-4xl"
    >
      <div className="relative">
        {/* Featured Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Header Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="p-8 text-white w-full">
              <div className="flex items-center space-x-4 text-sm mb-4">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 hover:bg-white/30 transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </button>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8">
          <article className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </div>
            
            {/* Render markdown content as HTML */}
            <div 
              className="prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br />').replace(/``````/g, '<pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto"><code>$2</code></pre>').replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>').replace(/#{3}\s(.+)/g, '<h3 class="text-xl font-bold mt-8 mb-4 text-gray-900">$1</h3>').replace(/#{2}\s(.+)/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h2>').replace(/#{1}\s(.+)/g, '<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">$1</h1>')
              }} 
            />
          </article>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={onClose}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BlogPost;
