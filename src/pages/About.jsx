import React, { useState } from 'react';
import { Calendar, MapPin, Award, Heart, Search, Wrench, Rocket, Cpu, Camera, Video, Zap, Car, Code, Coffee, Users, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { usePersonalInfo } from '../hooks/useSanityData';

const About = () => {
  const { elementRef: heroRef, isIntersecting: heroVisible } = useIntersectionObserver();
  const { elementRef: storyRef, isIntersecting: storyVisible } = useIntersectionObserver();
  const { elementRef: statsRef, isIntersecting: statsVisible } = useIntersectionObserver();
  const { elementRef: valuesRef, isIntersecting: valuesVisible } = useIntersectionObserver();
  const { elementRef: dreamsRef, isIntersecting: dreamsVisible } = useIntersectionObserver();

  const [activeTab, setActiveTab] = useState('journey');

  // Fetch personal info from Sanity
  const { data: personalInfo, loading } = usePersonalInfo();

  const iconComponents = {
    Cpu, Camera, Video, Zap, Search, Wrench, Rocket, Car
  };

  // Show minimal loading state
  if (loading || !personalInfo) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const tabContent = {
    journey: {
      title: 'The Curious Journey',
      content: personalInfo.story?.journey || ''
    },
    education: {
      title: 'Learning & Building',
      content: personalInfo.story?.education || ''
    },
    philosophy: {
      title: 'Dreams & Philosophy',
      content: personalInfo.story?.philosophy || ''
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
              className={`absolute rounded-full blur-sm ${
                i % 3 === 0 ? 'bg-blue-400/20 border border-blue-400/30' :
                i % 3 === 1 ? 'bg-purple-400/20 border border-purple-400/30' :
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
                x: [0, 25, 0],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            >
              {i % 4 === 0 && (
                <div className="w-full h-full flex items-center justify-center">
                  {i % 3 === 0 && <Cpu className="w-1/2 h-1/2 text-blue-400/60" />}
                  {i % 3 === 1 && <Camera className="w-1/2 h-1/2 text-purple-400/60" />}
                  {i % 3 === 2 && <Car className="w-1/2 h-1/2 text-green-400/60" />}
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
              About <span className="gradient-text">Me</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>{personalInfo.age} years old</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-green-400" />
                <span>{personalInfo.education}</span>
              </div>
            </motion.div>

            {/* Current Focus Pills */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {personalInfo.currentFocus && personalInfo.currentFocus.slice(0, 3).map((focus, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 glassmorphism rounded-full text-sm text-white/80"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  {focus}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Story Section */}
      <section ref={storyRef} className="section-padding bg-dark-950/50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={storyVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="gradient-text">Story</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From curiosity to creation - the journey that shaped who I am today
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            className="flex flex-wrap justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={storyVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {Object.keys(tabContent).map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 mx-2 mb-4 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-white/15 text-white shadow-glow'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={storyVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {tabContent[tab].title}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            className="glassmorphism-strong rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto"
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              {tabContent[activeTab].title}
            </h3>
            <div className="text-white/80 leading-relaxed text-lg">
              {tabContent[activeTab].content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Animated Stats Section */}
      <section ref={statsRef} className="section-padding liquid-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Journey in <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Milestones that mark my growth and passion for innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalInfo.achievements && personalInfo.achievements.map((achievement, index) => {
              const IconComponent = iconComponents[achievement.icon];
              return (
                <motion.div
                  key={achievement.label}
                  className="glassmorphism-strong rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-15 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <motion.div
                      className="text-3xl lg:text-4xl font-bold text-white mb-2"
                      initial={{ scale: 0 }}
                      animate={statsVisible ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      {achievement.value}
                    </motion.div>
                    <p className="text-white/70 font-medium mb-2">{achievement.label}</p>
                    <p className="text-white/50 text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section ref={valuesRef} className="section-padding bg-dark-950/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide my curiosity, creation, and dreams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {personalInfo.coreValues && personalInfo.coreValues.map((value, index) => {
              const IconComponent = iconComponents[value.icon];
              return (
                <motion.div
                  key={value.title}
                  className="glassmorphism-strong rounded-3xl p-8 group hover:shadow-glow transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-5 group-hover:opacity-15 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} p-4 mb-6 group-hover:rotate-12 transition-transform duration-300`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </motion.div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FIXED: Future Dreams Section with its own intersection observer */}
      <section ref={dreamsRef} className="section-padding liquid-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={dreamsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Future <span className="gradient-text">Dreams</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The aspirations that drive my innovation and dedication
            </p>
          </motion.div>

          <motion.div
            className="glassmorphism-strong rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={dreamsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalInfo.futureDreams && personalInfo.futureDreams.map((dream, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={dreamsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0"></div>
                  <p className="text-white/80">{dream}</p>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={dreamsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-white/80 mb-6 text-lg">
                Interested in collaborating on innovative projects or discussing the future of technology?
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Create Together</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
