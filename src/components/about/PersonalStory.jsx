import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/placeholderData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const PersonalStory = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={elementRef} className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform -rotate-6"></div>
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="relative w-full max-w-md mx-auto h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                {personalInfo.title}
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                I'm a passionate full-stack developer with over 6 years of experience creating 
                digital solutions that make a difference. My journey in web development started 
                during college when I built my first website and fell in love with the process 
                of turning ideas into interactive experiences.
              </p>
              
              <p>
                Throughout my career, I've had the privilege of working with startups and 
                established companies, helping them build scalable web applications and 
                user-centric digital products. I specialize in modern JavaScript frameworks, 
                particularly React and Node.js, and I'm passionate about writing clean, 
                maintainable code.
              </p>
              
              <p>
                What drives me is the opportunity to solve complex problems and create 
                solutions that improve people's lives. Whether it's optimizing performance, 
                implementing new features, or mentoring junior developers, I approach every 
                challenge with curiosity and dedication.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing my knowledge through blog posts and 
                speaking at tech meetups. I believe in continuous learning and staying 
                updated with the latest industry trends.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 mt-12"
            >
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">6+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;
