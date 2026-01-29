import React, { useState, useMemo } from 'react';
import { Camera, MapPin, Calendar, Settings, X, ChevronLeft, ChevronRight, Download, Heart, Share2, Eye, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { galleryPhotos, galleryCategories } from '../data/placeholderData';

const Gallery = () => {
  const { elementRef: heroRef, isIntersecting: heroVisible } = useIntersectionObserver();
  const { elementRef: galleryRef, isIntersecting: galleryVisible } = useIntersectionObserver();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState({});

  // Memoized filtered photos
  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryPhotos;
    }
    return galleryPhotos.filter(photo => photo.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate actual counts dynamically
  const categoryCountsMap = useMemo(() => {
    const counts = { all: galleryPhotos.length };
    galleryPhotos.forEach(photo => {
      counts[photo.category] = (counts[photo.category] || 0) + 1;
    });
    return counts;
  }, []);

  const openLightbox = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    setCurrentPhotoIndex(0);
  };

  const navigatePhoto = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentPhotoIndex + 1) % filteredPhotos.length
      : (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    
    setCurrentPhotoIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const handleImageLoad = (photoId) => {
    setIsLoading(prev => ({ ...prev, [photoId]: false }));
  };

  const handleImageLoadStart = (photoId) => {
    setIsLoading(prev => ({ ...prev, [photoId]: true }));
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'people': return 'from-blue-500 to-cyan-500';
      case 'nature': return 'from-green-500 to-emerald-500';
      case 'urban': return 'from-purple-500 to-pink-500';
      case 'events': return 'from-orange-500 to-red-500';
      case 'academic': return 'from-indigo-500 to-blue-500';
      case 'architecture': return 'from-gray-500 to-slate-500';
      case 'lifestyle': return 'from-yellow-500 to-orange-500';
      default: return 'from-white to-gray-200';
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Stunning Hero Section */}
      <section ref={heroRef} className="section-padding liquid-bg relative overflow-hidden">
        {/* Enhanced Camera-themed floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full backdrop-blur-sm ${
                i % 6 === 0 ? 'bg-blue-400/20 border border-blue-400/30' :
                i % 6 === 1 ? 'bg-purple-400/20 border border-purple-400/30' :
                i % 6 === 2 ? 'bg-green-400/20 border border-green-400/30' :
                i % 6 === 3 ? 'bg-orange-400/20 border border-orange-400/30' :
                i % 6 === 4 ? 'bg-pink-400/20 border border-pink-400/30' :
                'bg-white/10'
              }`}
              style={{
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                x: [0, 60, 0],
                opacity: [0.1, 0.8, 0.1],
                scale: [1, 1.8, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 40 + 30,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            >
              {i % 8 === 0 && (
                <div className="w-full h-full flex items-center justify-center">
                  <Camera className="w-1/2 h-1/2 text-white/70" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center">
                <Camera className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              My <span className="gradient-text">Gallery</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              Life documented through my lens - authentic moments, genuine emotions, and the beauty I find in everyday experiences
            </motion.p>

            <motion.p
              className="text-lg text-white/60 mb-12 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              "Photography is about capturing souls, not just faces"
            </motion.p>

            {/* Enhanced Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="text-center glassmorphism px-6 py-4 rounded-2xl">
                <div className="text-3xl font-bold text-purple-400">{galleryPhotos.length}+</div>
                <div className="text-white/60 text-sm">Photos Captured</div>
              </div>
              <div className="text-center glassmorphism px-6 py-4 rounded-2xl">
                <div className="text-3xl font-bold text-green-400">{Object.keys(categoryCountsMap).length - 1}</div>
                <div className="text-white/60 text-sm">Categories</div>
              </div>
              <div className="text-center glassmorphism px-6 py-4 rounded-2xl">
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-white/60 text-sm">Candid Moments</div>
              </div>
              <div className="text-center glassmorphism px-6 py-4 rounded-2xl">
                <div className="text-3xl font-bold text-orange-400">2+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="section-padding bg-dark-950/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={galleryVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Visual <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each photograph tells a story, captures an emotion, preserves a memory. Explore the moments I've been privileged to witness and document.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={galleryVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {galleryCategories.map((category, index) => {
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
                  animate={galleryVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(category.id)} ${
                    selectedCategory === category.id ? 'scale-110' : ''
                  } transition-transform duration-300`}>
                    <Filter className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-xs opacity-70">{actualCount} photos</div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Photo Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={`photo-${photo.id}-${selectedCategory}`}
                  layoutId={`photo-${photo.id}`}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.03,
                    layout: { duration: 0.3 }
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => openLightbox(photo, index)}
                >
                  {/* Loading State */}
                  {isLoading[photo.id] && (
                    <div className="absolute inset-0 bg-white/10 animate-pulse rounded-2xl" />
                  )}

                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onLoadStart={() => handleImageLoadStart(photo.id)}
                    onLoad={() => handleImageLoad(photo.id)}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {photo.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{photo.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{photo.date}</span>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 line-clamp-2">
                        {photo.description}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(photo.category)} rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {photo.category}
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 glassmorphism-strong rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Photos Message */}
          {filteredPhotos.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Camera className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No photos in this category yet</h3>
              <p className="text-white/60">Check back soon for more captures!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* FIXED: Photo-First Lightbox Modal with Separate Info Panel */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Main Modal Container - Flex Layout */}
            <motion.div
              className="relative w-full h-full max-w-[98vw] max-h-[98vh] flex flex-col lg:flex-row bg-black/20 backdrop-blur-sm rounded-3xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-20 p-3 glassmorphism-strong rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    onClick={() => navigatePhoto('prev')}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 glassmorphism-strong rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  
                  <button
                    onClick={() => navigatePhoto('next')}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 glassmorphism-strong rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              {/* Image Container - Takes Maximum Space, No Overlays */}
              <div className="flex-1 flex items-center justify-center p-6 lg:p-8 min-h-0">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl shadow-2xl"
                />
              </div>

              {/* Separate Info Panel - No Overlay on Image */}
              <div className="w-full lg:w-96 lg:flex-shrink-0 glassmorphism-strong border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="p-6 h-full overflow-y-auto custom-scrollbar">
                  {/* Photo Title and Description */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                      {selectedPhoto.title}
                    </h2>
                    <p className="text-white/80 leading-relaxed text-base">
                      {selectedPhoto.description}
                    </p>
                  </div>

                  {/* Photo Metadata */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3 text-white/70">
                      <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span>{selectedPhoto.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/70">
                      <Calendar className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{selectedPhoto.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/70">
                      <Camera className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>{selectedPhoto.camera}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/70">
                      <Settings className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span>{selectedPhoto.settings}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className={`inline-flex px-4 py-2 bg-gradient-to-r ${getCategoryColor(selectedPhoto.category)} rounded-full text-sm font-medium text-white capitalize`}>
                      {selectedPhoto.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <motion.button
                      className="flex items-center space-x-2 px-4 py-3 glassmorphism rounded-2xl hover:bg-white/20 transition-colors text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart className="w-5 h-5" />
                      <span>Like</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center space-x-2 px-4 py-3 glassmorphism rounded-2xl hover:bg-white/20 transition-colors text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center space-x-2 px-4 py-3 glassmorphism rounded-2xl hover:bg-white/20 transition-colors text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-5 h-5" />
                      <span>Save</span>
                    </motion.button>
                  </div>

                  {/* Photo Counter */}
                  <div className="text-center text-white/60 text-sm bg-white/5 rounded-2xl py-3">
                    Photo {currentPhotoIndex + 1} of {filteredPhotos.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Gallery;
