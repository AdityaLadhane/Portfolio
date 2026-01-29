import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePersonalInfo } from '../../hooks/useSanityData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ContactCTA = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  // Fetch personal info from Sanity
  const { data: personalInfo, loading } = usePersonalInfo();

  // Show minimal loading state within the section
  if (loading || !personalInfo) {
    return (
      <section ref={elementRef} className="section-padding bg-dark-950 relative overflow-hidden">
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

  return (
    <section ref={elementRef} className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Catchy Heading - Left Aligned */}
          <motion.div 
            className="lg:col-span-12 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              Let's Create
              <br />
              <span className="gradient-text">Something Amazing</span>
            </h2>
          </motion.div>

          {/* Say Hello + Social Icons */}
          <motion.div 
            className="lg:col-span-3 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Say Hello
              </h3>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass rounded-xl transition-all duration-200 group ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-all duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <p className="text-xl leading-relaxed text-gray-300 mb-8">
                Ready to bring your vision to life? Whether you have a groundbreaking idea, 
                need technical consultation, or want to collaborate on an exciting project, 
                I'm here to help turn your dreams into digital reality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 glass rounded-lg">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="p-4 glass rounded-lg">
                  <div className="text-3xl font-bold gradient-text">6+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="p-4 glass rounded-lg">
                  <div className="text-3xl font-bold gradient-text">24h</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Drop Message Button */}
          <motion.div 
            className="lg:col-span-3 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/contact"
              className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
            >
              <Send className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
              Drop a Message
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
