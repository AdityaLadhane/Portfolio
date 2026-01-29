import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, ArrowRight, Zap, Camera, Cpu, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePersonalInfo } from '../../hooks/useSanityData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const IntroSection = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  // Fetch personal info from Sanity
  const { data: personalInfo, loading } = usePersonalInfo();

  // Show minimal loading state within the section
  if (loading || !personalInfo) {
    return (
      <section 
        id="intro-section"
        ref={elementRef} 
        className="section-padding bg-dark-950/50 relative overflow-hidden"
      >
        <div className="container-max relative z-10 flex items-center justify-center min-h-[400px]">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </section>
    );
  }

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: personalInfo.socialMedia.linkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Instagram, 
      href: personalInfo.socialMedia.instagram, 
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
  ];

  const interests = [
    { icon: Cpu, label: 'Electronics', color: 'text-blue-400' },
    { icon: Camera, label: 'Photography', color: 'text-purple-400' },
    { icon: Wrench, label: 'Building', color: 'text-green-400' },
    { icon: Zap, label: 'Innovation', color: 'text-yellow-400' }
  ];

  return (
    <section 
      id="intro-section"
      ref={elementRef} 
      className="section-padding bg-dark-950/50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Say Hello + Social Icons */}
          <motion.div 
            className="lg:col-span-3 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Say Hello
              </h3>
              <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass rounded-lg transition-all duration-200 group ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-all duration-200" />
                  </motion.a>
                ))}
              </div>
              
              {/* Interest Icons */}
              <div className="flex justify-center lg:justify-start space-x-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    className={`p-2 glassmorphism rounded-lg ${interest.color}`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <interest.icon className="w-4 h-4" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Intro Paragraph */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                I'm the kind of person who sees a new gadget and immediately wonders 
                <span className="gradient-text font-semibold"> "How can I open this and figure out how it works?"</span> 
                From building microcontroller projects to capturing life's candid moments through photography, 
                I explore the world through curiosity and creativity.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Currently pursuing my final year in <span className="text-blue-400 font-semibold">Electronics & Telecommunication</span>, 
                while dreaming of revolutionizing the automotive industry with my own supercar manufacturing brand. 
                I believe in building from scratch rather than modifying existing solutions.
              </p>

              <div className="glassmorphism rounded-2xl p-6 inline-block">
                <p className="text-blue-300 font-medium mb-2">Current Focus:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {personalInfo.currentFocus.slice(0, 3).map((focus, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Button */}
          <motion.div 
            className="lg:col-span-3 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/contact"
              className="btn-primary inline-flex items-center group"
            >
              Let's Create
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
