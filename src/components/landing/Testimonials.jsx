import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTestimonials } from '../../hooks/useSanityData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Testimonials = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();
  
  // Fetch testimonials from Sanity
  const { data: testimonials, loading } = useTestimonials();

  // Show minimal loading state within the section
  if (loading || !testimonials) {
    return (
      <section ref={elementRef} className="py-20 liquid-bg relative overflow-hidden">
        <div className="w-full flex items-center justify-center min-h-[400px]">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </section>
    );
  }

  // Triple testimonials for ultra-smooth loop
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section ref={elementRef} className="py-20 liquid-bg relative overflow-hidden">
      {/* Full width container for edge-to-edge */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues have to say
          </p>
        </motion.div>

        {/* Seamless scrolling testimonials - Edge to Edge */}
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex space-x-6"
            animate={{ 
              x: [0, -(testimonials.length * 400)]
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            style={{ width: `${tripleTestimonials.length * 400}px` }}
          >
            {tripleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id || testimonial._id}-${Math.floor(index / testimonials.length)}-${index}`}
                className="flex-shrink-0 w-80 sm:w-96"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: (index % testimonials.length) * 0.05 }}
              >
                <div className="glassmorphism-strong p-6 sm:p-8 h-full rounded-3xl hover:shadow-glow transition-all duration-500 relative group mx-3">
                  {/* Quote icon */}
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-white/30 group-hover:text-white/50 transition-colors" />
                  
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Quote */}
                    <blockquote className="text-white/90 leading-relaxed text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <motion.img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div>
                        <h4 className="text-white font-semibold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="gradient-text text-sm font-medium">
                          {testimonial.position}
                        </p>
                        <p className="text-white/50 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
