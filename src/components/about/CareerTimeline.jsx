import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import { careerTimeline } from '../../data/placeholderData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const CareerTimeline = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={elementRef} className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of my professional growth, key milestones, and the experiences 
            that shaped me into the developer I am today.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary-200"></div>

          {careerTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="card p-8">
                  {/* Year Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.year}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center text-primary-600 font-medium mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {item.company}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700 font-medium">
                      <Trophy className="w-4 h-4 mr-2 text-primary-500" />
                      Key Achievements
                    </div>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-2/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
