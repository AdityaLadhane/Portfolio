import React, { useState } from 'react';
import { Code, Camera, Cpu, TrendingUp, Zap, Award, Clock, Star, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useSkills, useTools } from '../hooks/useSanityData';

const Skills = () => {
  const { elementRef: heroRef, isIntersecting: heroVisible } = useIntersectionObserver();
  const { elementRef: skillsRef, isIntersecting: skillsVisible } = useIntersectionObserver();
  const { elementRef: toolsRef, isIntersecting: toolsVisible } = useIntersectionObserver();

  const [activeCategory, setActiveCategory] = useState('electronics');

  // Fetch skills and tools from Sanity
  const { data: skillsData, loading: skillsLoading } = useSkills();
  const { data: toolsData, loading: toolsLoading } = useTools();

  const iconComponents = {
    Code, Camera, Cpu, TrendingUp, Zap
  };

  // Show minimal loading state
  if (skillsLoading || toolsLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Handle empty or null data from Sanity
  if (!skillsData || Object.keys(skillsData).length === 0) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto p-8">
          <Code className="w-16 h-16 text-white/30 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Skills Data Not Available</h2>
          <p className="text-white/70 mb-6">
            Skills information is being updated. Please check back soon or contact me directly to learn about my technical expertise.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-colors font-medium"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    );
  }

  if (!toolsData || toolsData.length === 0) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto p-8">
          <Cpu className="w-16 h-16 text-white/30 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Tools Data Not Available</h2>
          <p className="text-white/70 mb-6">
            Tools information is being updated. Please check back soon.
          </p>
          <a
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-colors font-medium"
          >
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    );
  }

  const categoryKeys = Object.keys(skillsData);

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
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 30, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 25 + 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            >
              {i % 5 === 0 && (
                <div className="w-full h-full flex items-center justify-center">
                  {i % 4 === 0 && <Cpu className="w-1/2 h-1/2 text-blue-400/60" />}
                  {i % 4 === 1 && <Camera className="w-1/2 h-1/2 text-purple-400/60" />}
                  {i % 4 === 2 && <Code className="w-1/2 h-1/2 text-green-400/60" />}
                  {i % 4 === 3 && <TrendingUp className="w-1/2 h-1/2 text-orange-400/60" />}
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
              My <span className="gradient-text">Skills</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              From electronics and microcontrollers to photography and business innovation - the technologies and tools I use to build amazing experiences
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">4+</div>
                <div className="text-white/60 text-sm">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24+</div>
                <div className="text-white/60 text-sm">Core Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">12+</div>
                <div className="text-white/60 text-sm">Daily Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">21+</div>
                <div className="text-white/60 text-sm">Years Learning</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section ref={skillsRef} className="section-padding bg-dark-950/50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Explore my proficiency across different domains - from hardware to software, creativity to business
            </p>
          </motion.div>

          {/* Category Navigation */}
          <motion.div
            className="flex flex-wrap justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categoryKeys.map((key, index) => {
              const category = skillsData[key];
              const IconComponent = iconComponents[category.icon];
              // Skip if icon component not found
              if (!IconComponent) return null;
              
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-3 px-6 py-4 mx-2 mb-4 rounded-2xl font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-white/15 text-white shadow-glow scale-105'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:scale-102'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} ${
                    activeCategory === key ? 'scale-110' : ''
                  } transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{category.title}</div>
                    <div className="text-xs opacity-70">{category.skills.length} skills</div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="glassmorphism-strong rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {(() => {
                const category = skillsData[activeCategory];
                const IconComponent = iconComponents[category.icon];
                // Skip if icon component not found
                if (!IconComponent) return null;
                
                return (
                  <>
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mr-6`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                          {category.title}
                        </h3>
                        <p className="text-white/70">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills && category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="space-y-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-white font-semibold text-lg">{skill.name}</span>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-white/60 text-sm flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {skill.years}
                                </span>
                                <span className="text-white/60 text-sm flex items-center">
                                  <Star className="w-3 h-3 mr-1" />
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                            <motion.div
                              className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-2 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                              whileHover={{ rotate: 10 }}
                            >
                              <Award className="w-full h-full text-white" />
                            </motion.div>
                          </div>

                          <div className="relative">
                            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                              />
                            </div>
                          </div>

                          <p className="text-white/70 text-sm italic">
                            {skill.experience}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section ref={toolsRef} className="section-padding liquid-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={toolsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Daily <span className="gradient-text">Toolkit</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The tools and technologies that power my innovation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {toolsData && toolsData.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="glassmorphism-strong rounded-2xl p-6 text-center group hover:scale-105 hover:shadow-glow transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={toolsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {tool.icon}
                </motion.div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors text-sm">
                  {tool.name}
                </h3>
                <div className="space-y-1">
                  <p className="text-white/60 text-xs">{tool.category}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-green-400">{tool.proficiency}</span>
                    <span className="text-blue-400">{tool.usage}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={toolsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="glassmorphism-strong rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-white/80 mb-6">
                Whether it's electronics, photography, or innovative business solutions - let's bring your ideas to life!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/projects"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>See My Projects</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/contact"
                  className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Collaborate</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
