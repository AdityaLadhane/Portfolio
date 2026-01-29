import React, { useState, useMemo } from 'react';
import { Calendar, Clock, User, Tag, Search, TrendingUp, BookOpen, Eye, ArrowRight, X, Cpu, Camera, Video, Zap, ChevronDown, ExternalLink, Settings, Info, List, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useProjects } from '../hooks/useSanityData';

const Projects = () => {
  const { elementRef: heroRef, isIntersecting: heroVisible } = useIntersectionObserver();
  const { elementRef: projectsRef, isIntersecting: projectsVisible } = useIntersectionObserver();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Fetch projects from Sanity
  const { data: projects, loading } = useProjects();

  // Show minimal loading state
  if (loading || !projects) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Memoized filtered projects to prevent unnecessary re-renders
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  // Calculate actual counts dynamically
  const categoryCountsMap = useMemo(() => {
    const counts = { all: projects.length };
    projects.forEach(project => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });
    return counts;
  }, [projects]);

  // Generate project categories dynamically from data
  const projectCategories = useMemo(() => {
    const categories = [{ id: 'all', name: 'All Projects', count: projects.length }];
    const uniqueCategories = [...new Set(projects.map(p => p.category))];
    
    uniqueCategories.forEach(cat => {
      categories.push({
        id: cat,
        name: cat.charAt(0).toUpperCase() + cat.slice(1),
        count: projects.filter(p => p.category === cat).length
      });
    });
    
    return categories;
  }, [projects]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'electronics': return Cpu;
      case 'photography': return Camera;
      case 'video': return Video;
      default: return Zap;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'electronics': return 'from-blue-500 to-cyan-500';
      case 'photography': return 'from-purple-500 to-pink-500';
      case 'video': return 'from-green-500 to-emerald-500';
      default: return 'from-orange-500 to-red-500';
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="section-padding liquid-bg relative overflow-hidden">
        {/* Tech-themed floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full backdrop-blur-sm ${
                i % 4 === 0 ? 'bg-blue-400/20 border border-blue-400/30' :
                i % 4 === 1 ? 'bg-purple-400/20 border border-purple-400/30' :
                i % 4 === 2 ? 'bg-green-400/20 border border-green-400/30' :
                'bg-white/10'
              }`}
              style={{
                width: `${Math.random() * 10 + 4}px`,
                height: `${Math.random() * 10 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, 40, 0],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.4, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            >
              {i % 5 === 0 && (
                <div className="w-full h-full flex items-center justify-center">
                  {i % 4 === 0 && <Cpu className="w-1/2 h-1/2 text-blue-400/60" />}
                  {i % 4 === 1 && <Camera className="w-1/2 h-1/2 text-purple-400/60" />}
                  {i % 4 === 2 && <Video className="w-1/2 h-1/2 text-green-400/60" />}
                  {i % 4 === 3 && <Settings className="w-1/2 h-1/2 text-orange-400/60" />}
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
              My <span className="gradient-text">Projects</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              From electronics and IoT systems to creative documentation - explore my journey of building, creating, and innovating
            </motion.p>

            {/* Enhanced Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{projects.length}</div>
                <div className="text-white/60 text-sm">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{projects.filter(p => p.status === 'completed').length}</div>
                <div className="text-white/60 text-sm">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{projects.filter(p => p.featured).length}</div>
                <div className="text-white/60 text-sm">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{categoryCountsMap.electronics || 0}</div>
                <div className="text-white/60 text-sm">Electronics</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section-padding bg-dark-950/50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Explore my portfolio of electronics projects, creative documentation, and innovative solutions
            </p>
          </motion.div>

          {/* Fixed Category Filter with Correct Counts */}
          <motion.div
            className="flex flex-wrap justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {projectCategories.map((category, index) => {
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
                  animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(category.id)} ${
                    selectedCategory === category.id ? 'scale-110' : ''
                  } transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-xs opacity-70">{actualCount} projects</div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Fixed Projects Grid with Proper Layout Animation */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const IconComponent = getCategoryIcon(project.category);
                
                return (
                  <motion.div
                    key={`project-${project.id || project._id}-${selectedCategory}`}
                    layoutId={`project-card-${project.id || project._id}`}
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
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                          Featured
                        </div>
                      )}

                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                        <IconComponent className="w-3 h-3" />
                        <span className="capitalize">{project.category}</span>
                      </div>

                      <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white ${
                        project.status === 'completed' ? 'bg-green-500/80' : 
                        project.status === 'ongoing' ? 'bg-blue-500/80' : 
                        'bg-orange-500/80'
                      }`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      
                      {/* Show project overview on card */}
                      <p className="text-white/80 text-sm mb-4 line-clamp-4 flex-1">
                        {project.details?.overview || project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies && project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/60">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-white/60 text-sm">Tap to explore</span>
                        <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                          <span>Learn More</span>
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
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpen className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-white/60">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Larger Project Modal with ALL Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative glassmorphism-strong rounded-3xl w-full max-w-7xl max-h-[95vh] overflow-hidden flex flex-col"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${getCategoryColor(selectedProject.category)}`}>
                    {React.createElement(getCategoryIcon(selectedProject.category), { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 capitalize">
                        {selectedProject.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                        selectedProject.status === 'completed' ? 'bg-green-500/80' : 
                        selectedProject.status === 'ongoing' ? 'bg-blue-500/80' : 
                        'bg-orange-500/80'
                      }`}>
                        {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-3 glassmorphism rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Scrollable Content with ALL Details */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-6 space-y-8">
                  {/* Project Image */}
                  <div className="mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Settings className="w-5 h-5 mr-2 text-blue-400" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies && selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-2xl text-white/90 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ALL Project Details in Scrollable Sections */}
                  {selectedProject.details && (
                    <div className="space-y-8">
                      {/* Project Overview */}
                      {selectedProject.details.overview && (
                        <div className="glassmorphism rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Info className="w-5 h-5 mr-2 text-green-400" />
                            Project Overview
                          </h3>
                          <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line">
                            {selectedProject.details.overview}
                          </p>
                        </div>
                      )}

                      {/* Components */}
                      {selectedProject.details.components && (
                        <div className="glassmorphism rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <List className="w-5 h-5 mr-2 text-blue-400" />
                            Components & Hardware
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {selectedProject.details.components && selectedProject.details.components.map((component, index) => (
                              <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                                <span className="text-white/80">{component}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Build Process */}
                      {selectedProject.details.buildProcess && (
                        <div className="glassmorphism rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Settings className="w-5 h-5 mr-2 text-purple-400" />
                            Build Process & Implementation
                          </h3>
                          <div className="text-white/80 leading-relaxed whitespace-pre-line">
                            {selectedProject.details.buildProcess}
                          </div>
                        </div>
                      )}

                      {/* Challenges & Solutions */}
                      {selectedProject.details.challenges && (
                        <div className="glassmorphism rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-orange-400" />
                            Challenges & Solutions
                          </h3>
                          <div className="text-white/80 leading-relaxed whitespace-pre-line">
                            {selectedProject.details.challenges}
                          </div>
                        </div>
                      )}

                      {/* Results & Impact */}
                      {selectedProject.details.results && (
                        <div className="glassmorphism rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                            Results & Impact
                          </h3>
                          <div className="text-white/80 leading-relaxed whitespace-pre-line">
                            {selectedProject.details.results}
                          </div>
                        </div>
                      )}

                      {/* Future Improvements */}
                      {selectedProject.details.futureImprovements && (
                        <div className="glassmorphism rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <ArrowRight className="w-5 h-5 mr-2 text-blue-400" />
                            Future Improvements
                          </h3>
                          <div className="text-white/80 leading-relaxed whitespace-pre-line">
                            {selectedProject.details.futureImprovements}
                          </div>
                        </div>
                      )}

                      {/* Technical Specifications */}
                      {selectedProject.details.technicalSpecs && (
                        <div className="glassmorphism rounded-2xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <BarChart3 className="w-5 h-5 mr-2 text-cyan-400" />
                            Technical Specifications
                          </h3>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <tbody>
                                {selectedProject.details.technicalSpecs && Object.entries(selectedProject.details.technicalSpecs).map(([key, value], index) => (
                                  <tr key={index} className={index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}>
                                    <td className="px-4 py-3 font-semibold text-white/90 border border-white/10 rounded-l-lg">
                                      {key}
                                    </td>
                                    <td className="px-4 py-3 text-white/80 border border-white/10 rounded-r-lg">
                                      {value}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Additional Details (for other project types) */}
                      {Object.entries(selectedProject.details).map(([key, value]) => {
                        // Skip already displayed sections
                        if (['overview', 'components', 'buildProcess', 'challenges', 'results', 'futureImprovements', 'technicalSpecs'].includes(key)) {
                          return null;
                        }

                        return (
                          <div key={key} className="glassmorphism rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            
                            {Array.isArray(value) ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {value.map((item, index) => (
                                  <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                                    <span className="text-white/80">{item}</span>
                                  </div>
                                ))}
                              </div>
                            ) : typeof value === 'object' ? (
                              <div className="space-y-3">
                                {Object.entries(value).map(([subKey, subValue], index) => (
                                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                                    <span className="text-white/70 font-medium">{subKey}:</span>
                                    <span className="text-white">{subValue}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-white/80 leading-relaxed whitespace-pre-line">
                                {value}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Contact for Collaboration */}
                  <div className="glassmorphism rounded-2xl p-6 border-t border-white/10 mt-8">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-3">
                        Interested in this project?
                      </h3>
                      <p className="text-white/80 mb-6">
                        Let's discuss how we can collaborate or if you'd like to know more about the technical details.
                      </p>
                      <motion.a
                        href="/contact"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Let's Connect</span>
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
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

export default Projects;
