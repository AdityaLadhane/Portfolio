import React, { useState, useMemo } from 'react';
import { Calendar, Clock, User, Tag, Search, TrendingUp, BookOpen, Eye, ArrowRight, X, Cpu, Camera, Video, Zap, Heart, MessageCircle, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useBlogPosts } from '../hooks/useSanityData';

const Blog = () => {
  const { elementRef: heroRef, isIntersecting: heroVisible } = useIntersectionObserver();
  const { elementRef: postsRef, isIntersecting: postsVisible } = useIntersectionObserver();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  // Fetch blog posts from Sanity
  const { data: blogPosts, loading } = useBlogPosts();

  // Show minimal loading state
  if (loading || !blogPosts) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Memoized filtered posts to prevent unnecessary re-renders
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all' && !searchTerm) {
      return blogPosts;
    }
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = !searchTerm || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm, blogPosts]);

  // Calculate actual counts dynamically
  const categoryCountsMap = useMemo(() => {
    const counts = { all: blogPosts.length };
    blogPosts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, [blogPosts]);

  // Generate blog categories dynamically from data
  const blogCategories = useMemo(() => {
    const categories = [{ id: 'all', name: 'All Posts', count: blogPosts.length }];
    const uniqueCategories = [...new Set(blogPosts.map(p => p.category))];
    
    uniqueCategories.forEach(cat => {
      categories.push({
        id: cat,
        name: cat.charAt(0).toUpperCase() + cat.slice(1),
        count: blogPosts.filter(p => p.category === cat).length
      });
    });
    
    return categories;
  }, [blogPosts]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'philosophy': return Heart;
      case 'photography': return Camera;
      case 'technology': return Cpu;
      case 'dreams': return Zap;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'philosophy': return 'from-blue-500 to-cyan-500';
      case 'photography': return 'from-purple-500 to-pink-500';
      case 'technology': return 'from-green-500 to-emerald-500';
      case 'dreams': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="section-padding liquid-bg relative overflow-hidden">
        {/* Tech-themed floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 80 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full backdrop-blur-sm ${
                i % 5 === 0 ? 'bg-blue-400/20 border border-blue-400/30' :
                i % 5 === 1 ? 'bg-purple-400/20 border border-purple-400/30' :
                i % 5 === 2 ? 'bg-green-400/20 border border-green-400/30' :
                i % 5 === 3 ? 'bg-orange-400/20 border border-orange-400/30' :
                'bg-white/10'
              }`}
              style={{
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, 50, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.5, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 35 + 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            >
              {i % 6 === 0 && (
                <div className="w-full h-full flex items-center justify-center">
                  {i % 5 === 0 && <BookOpen className="w-1/2 h-1/2 text-blue-400/60" />}
                  {i % 5 === 1 && <Camera className="w-1/2 h-1/2 text-purple-400/60" />}
                  {i % 5 === 2 && <Cpu className="w-1/2 h-1/2 text-green-400/60" />}
                  {i % 5 === 3 && <Heart className="w-1/2 h-1/2 text-orange-400/60" />}
                  {i % 5 === 4 && <Zap className="w-1/2 h-1/2 text-yellow-400/60" />}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              My <span className="gradient-text">Blog</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Insights, stories, and experiences from my journey as a tech enthusiast, future innovator, and automotive dreamer
            </motion.p>

            {/* Enhanced Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{blogPosts.length}</div>
                <div className="text-white/60 text-sm">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{blogPosts.filter(p => p.featured).length}</div>
                <div className="text-white/60 text-sm">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{Object.keys(categoryCountsMap).length - 1}</div>
                <div className="text-white/60 text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{blogPosts.reduce((sum, post) => sum + post.views, 0)}</div>
                <div className="text-white/60 text-sm">Total Views</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section ref={postsRef} className="section-padding bg-dark-950/50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={postsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Latest <span className="gradient-text">Thoughts</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Explore my thoughts on technology, creativity, innovation, and the future I'm building
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="flex flex-col lg:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={postsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 glassmorphism rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={postsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {blogCategories.map((category, index) => {
              const IconComponent = getCategoryIcon(category.id);
              const actualCount = categoryCountsMap[category.id] || 0;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-4 mx-2 mb-4 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-white/15 text-white shadow-glow scale-105'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={postsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(category.id)} ${
                    selectedCategory === category.id ? 'scale-110' : ''
                  } transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-xs opacity-70">{actualCount} posts</div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => {
                const IconComponent = getCategoryIcon(post.category);
                
                return (
                  <motion.div
                    key={`post-${post.id || post._id}-${selectedCategory}`}
                    layoutId={`post-card-${post.id || post._id}`}
                    className="glassmorphism-strong rounded-3xl overflow-hidden group hover:shadow-glow transition-all duration-500 cursor-pointer h-full flex flex-col"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      layout: { duration: 0.3 }
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {post.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                          Featured
                        </div>
                      )}

                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                        <IconComponent className="w-3 h-3" />
                        <span className="capitalize">{post.category}</span>
                      </div>

                      <div className="absolute bottom-4 left-4 flex items-center space-x-3 text-white/80 text-xs">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center space-x-2 mb-3 text-white/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{post.publishDate}</span>
                        <span>•</span>
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/80 text-sm mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/60">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-white/60 text-sm">Tap to read</span>
                        <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpen className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-white/60">Try adjusting your search or selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* MASSIVE Enhanced Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="relative glassmorphism-strong rounded-3xl w-full max-w-[90vw] lg:max-w-7xl max-h-[95vh] overflow-hidden flex flex-col"
              initial={{ scale: 0.7, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 100 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Modal Header */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 p-3 glassmorphism-strong rounded-full hover:bg-white/20 transition-colors z-10"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Header Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${getCategoryColor(selectedPost.category)}`}>
                      {React.createElement(getCategoryIcon(selectedPost.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-white/80">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedPost.publishDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{selectedPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{selectedPost.views} views</span>
                      </div>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {selectedPost.title}
                  </h1>

                  <div className="flex items-center space-x-2 mb-4">
                    <User className="w-5 h-5 text-white/70" />
                    <span className="text-white/90 font-medium">By {selectedPost.author}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white/90"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-8 lg:p-12 space-y-8">
                  {/* Article Content */}
                  {selectedPost.content ? (
                    <div className="space-y-12">
                      {Object.entries(selectedPost.content).map(([sectionKey, sectionContent], index) => (
                        <motion.div
                          key={sectionKey}
                          className="glassmorphism rounded-2xl p-8"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 capitalize">
                            {sectionKey.replace(/([A-Z])/g, ' $1').trim()}
                          </h2>
                          <div className="text-white/80 leading-relaxed text-lg whitespace-pre-line space-y-4">
                            {sectionContent.split('\n\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="mb-4">
                                {paragraph.trim()}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="glassmorphism rounded-2xl p-8">
                      <p className="text-white/80 leading-relaxed text-lg">
                        {selectedPost.excerpt}
                      </p>
                    </div>
                  )}

                  {/* Engagement Section */}
                  <motion.div
                    className="glassmorphism-strong rounded-2xl p-8 border-t border-white/10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Enjoyed this article?
                        </h3>
                        <p className="text-white/80">
                          Let's connect and discuss technology, innovation, or collaborate on exciting projects!
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <motion.button
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-colors font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Heart className="w-5 h-5" />
                          <span>Like</span>
                        </motion.button>
                        
                        <motion.button
                          className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-colors font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>Comment</span>
                        </motion.button>

                        <motion.button
                          className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-colors font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Share2 className="w-5 h-5" />
                          <span>Share</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact for Discussion */}
                  <motion.div
                    className="glassmorphism rounded-2xl p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Want to discuss this topic further?
                    </h3>
                    <p className="text-white/80 mb-6 text-lg">
                      I love connecting with fellow tech enthusiasts, innovators, and dreamers. Let's chat about ideas, projects, or the future we're building together.
                    </p>
                    <motion.a
                      href="/contact"
                      className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-colors font-medium text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Let's Connect</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Blog;
