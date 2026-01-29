import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Camera, Cpu, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePersonalInfo } from '../../hooks/useSanityData';

const Hero = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [isDesignationHovered, setIsDesignationHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Fetch personal info from Sanity
  const { data: personalInfo, loading } = usePersonalInfo();

  const fullName = personalInfo?.name || '';

  // Typewriter effect
  useEffect(() => {
    if (!fullName) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [fullName]);

  // Enhanced particles with tech-themed elements
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 5,
    type: i % 4 === 0 ? 'tech' : 'normal' // 25% tech-themed particles
  }));

  // Show minimal loading state within the section
  if (loading || !personalInfo) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 liquid-bg"></div>
        <div className="relative z-10 text-white text-xl">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Liquid Background */}
      <div className="absolute inset-0 liquid-bg"></div>
      
      {/* Enhanced Floating Particles with Tech Elements */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full backdrop-blur-sm ${
              particle.type === 'tech' 
                ? 'bg-blue-400/20 border border-blue-400/30' 
                : 'bg-white/10'
            }`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: particle.type === 'tech' ? [0, 360] : 0,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          >
            {particle.type === 'tech' && (
              <div className="w-full h-full flex items-center justify-center">
                {particle.id % 3 === 0 && <Zap className="w-1/2 h-1/2 text-blue-400/60" />}
                {particle.id % 3 === 1 && <Cpu className="w-1/2 h-1/2 text-green-400/60" />}
                {particle.id % 3 === 2 && <Camera className="w-1/2 h-1/2 text-purple-400/60" />}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full">
        {/* Enhanced Profile Image with Tech Ring */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative cursor-pointer"
            onHoverStart={() => setIsImageHovered(true)}
            onHoverEnd={() => setIsImageHovered(false)}
            whileHover={{ scale: 2.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Enhanced background with automotive colors */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-silver to-blue-600 blur-2xl opacity-60"
              animate={{ 
                scale: isImageHovered ? 2.5 : 1.2,
                opacity: isImageHovered ? 0.8 : 0.6 
              }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Tech-inspired rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              animate={{ 
                rotate: 360,
                scale: isImageHovered ? 1.4 : 1.1
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.6 }
              }}
            />
            
            <motion.img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white/30 shadow-glass-lg backdrop-blur-sm"
              animate={{
                borderColor: isImageHovered ? 'rgba(59,130,246,0.8)' : 'rgba(255,255,255,0.3)'
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Tech badge indicator */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
              animate={{ 
                scale: isImageHovered ? 1.2 : 1,
                rotate: isImageHovered ? 180 : 0
              }}
              transition={{ duration: 0.6 }}
            >
              <Cpu className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Name with Tech Glow */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          onHoverStart={() => setIsNameHovered(true)}
          onHoverEnd={() => setIsNameHovered(false)}
        >
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white mb-4 leading-none cursor-pointer"
            animate={{
              scale: isNameHovered ? 1.02 : 1,
              textShadow: isNameHovered 
                ? '0 0 40px rgba(59,130,246,0.8), 0 0 80px rgba(59,130,246,0.4)' 
                : '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(59,130,246,0.3)'
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className="glow-text inline-block">
              {displayedText}
              <motion.span
                className="inline-block w-1 h-full bg-blue-400 ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ 
                  duration: 1, 
                  repeat: isTypingComplete ? Infinity : 0,
                  ease: "easeInOut" 
                }}
              />
            </span>
          </motion.h1>
        </motion.div>

        {/* Designation with v2.2 Font & Format (Reverted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          onHoverStart={() => setIsDesignationHovered(true)}
          onHoverEnd={() => setIsDesignationHovered(false)}
        >
          <motion.p 
            className="text-lg lg:text-xl xl:text-2xl text-white/60 font-light tracking-wide glassmorphism px-6 py-3 rounded-full inline-block cursor-pointer"
            animate={{
              scale: isDesignationHovered ? 1.05 : 1,
              color: isDesignationHovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.6)',
              backgroundColor: isDesignationHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)'
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {personalInfo.title}
          </motion.p>
        </motion.div>

        {/* Age and Education Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-6"
        >
          <p className="text-lg text-white/60 font-light">
            {personalInfo.age} years old • {personalInfo.education}
          </p>
          <p className="text-lg text-white/60 font-light">
            {personalInfo.location}
          </p>
          
        </motion.div>
      </div>

      {/* Enhanced Scroll Down Arrow - Simple Version */}
<motion.div
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3, duration: 1 }}
>
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="flex justify-center cursor-pointer group"
    onClick={() => {
      document.getElementById('intro-section')?.scrollIntoView({
        behavior: 'smooth'
      });
    }}
  >
    <ChevronDown className="w-8 h-8 text-white/70 group-hover:text-blue-400 transition-colors" />
  </motion.div>
</motion.div>


      {/* Enhanced Floating Code Elements */}
      <motion.div
        className="absolute top-24 left-8 sm:left-16 text-white/20 font-mono text-lg hidden sm:block"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {"<maker>"}
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 right-8 sm:right-16 text-white/20 font-mono text-lg hidden sm:block"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {"</innovator>"}
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-12 sm:right-24 text-white/15 font-mono text-base hidden lg:block"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {"{curiosity}"}
      </motion.div>

      {/* New automotive-themed element */}
      <motion.div
        className="absolute top-2/3 left-12 sm:left-24 text-white/15 font-mono text-base hidden lg:block"
        animate={{ 
          x: [0, 10, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {"🏎️ dreams"}
      </motion.div>
    </section>
  );
};

export default Hero;
