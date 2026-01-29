import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Calendar, Clock, Instagram, Github, Linkedin, Twitter, Zap, Camera, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { usePersonalInfo } from '../hooks/useSanityData';

const Contact = () => {
  const { elementRef: heroRef, isIntersecting: heroVisible } = useIntersectionObserver();
  const { elementRef: formRef, isIntersecting: formVisible } = useIntersectionObserver();
  const { elementRef: infoRef, isIntersecting: infoVisible } = useIntersectionObserver();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Fetch personal info from Sanity
  const { data: personalInfo, loading } = usePersonalInfo();

  // Show minimal loading state
  if (loading || !personalInfo) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      value: personalInfo.email,
      description: 'Best way to reach me for collaborations',
      action: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Me',
      value: personalInfo.phone,
      description: 'Available Mon-Fri, 9 AM - 6 PM IST',
      action: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      description: 'Available for local meetups and collaborations',
      action: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      name: 'GitHub', 
      url: personalInfo.socialMedia.github,
      color: 'hover:text-gray-300',
      description: 'Check out my projects and code'
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      url: personalInfo.socialMedia.linkedin,
      color: 'hover:text-blue-400',
      description: 'Connect professionally'
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      url: personalInfo.socialMedia.instagram,
      color: 'hover:text-pink-400',
      description: 'Follow my photography journey'
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      url: personalInfo.socialMedia.twitter,
      color: 'hover:text-blue-300',
      description: 'Tech thoughts and updates'
    }
  ];

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
                i % 5 === 0 ? 'bg-blue-400/20 border border-blue-400/30' :
                i % 5 === 1 ? 'bg-purple-400/20 border border-purple-400/30' :
                i % 5 === 2 ? 'bg-green-400/20 border border-green-400/30' :
                i % 5 === 3 ? 'bg-orange-400/20 border border-orange-400/30' :
                'bg-white/10'
              }`}
              style={{
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -70, 0],
                x: [0, 50, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.6, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 35 + 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            >
              {i % 6 === 0 && (
                <div className="w-full h-full flex items-center justify-center">
                  {i % 5 === 0 && <Mail className="w-1/2 h-1/2 text-blue-400/60" />}
                  {i % 5 === 1 && <Camera className="w-1/2 h-1/2 text-purple-400/60" />}
                  {i % 5 === 2 && <Cpu className="w-1/2 h-1/2 text-green-400/60" />}
                  {i % 5 === 3 && <Zap className="w-1/2 h-1/2 text-orange-400/60" />}
                  {i % 5 === 4 && <MessageSquare className="w-1/2 h-1/2 text-pink-400/60" />}
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
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              Ready to collaborate, discuss tech innovations, or share photography insights? I'd love to connect with fellow enthusiasts and innovators.
            </motion.p>

            <motion.p
              className="text-lg text-white/60 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Whether it's about electronics projects, photography collaborations, or discussing the future of automotive innovation - let's start a conversation!
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="text-center glassmorphism px-6 py-4 rounded-2xl">
                <div className="text-2xl font-bold text-blue-400">24h</div>
                <div className="text-white/60 text-sm">Response Time</div>
              </div>
              <div className="text-center glassmorphism px-6 py-4 rounded-2xl">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-white/60 text-sm">Reply Rate</div>
              </div>
              <div className="text-center glassmorphism px-6 py-4 rounded-2xl">
                <div className="text-2xl font-bold text-purple-400">Open</div>
                <div className="text-white/60 text-sm">To Collaborate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section ref={infoRef} className="section-padding bg-dark-950/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={infoVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact <span className="gradient-text">Information</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Multiple ways to reach me - choose what works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              
              return (
                <motion.a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="glassmorphism-strong rounded-3xl p-8 text-center group hover:shadow-glow transition-all duration-500 block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={infoVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} p-4 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {method.title}
                  </h3>
                  
                  <p className="text-white/90 font-medium mb-3">
                    {method.value}
                  </p>
                  
                  <p className="text-white/70 text-sm">
                    {method.description}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Social Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={infoVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Follow My Journey</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={infoVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <div className="glassmorphism-strong w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20">
                      <IconComponent className={`w-8 h-8 text-white/80 transition-colors duration-300 ${social.color}`} />
                    </div>
                    <p className="text-white/60 text-sm mt-2 group-hover:text-white transition-colors">
                      {social.name}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Contact Form Section */}
      <section ref={formRef} className="section-padding liquid-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={formVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Send Me a <span className="gradient-text">Message</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Have a project idea, want to collaborate, or just want to say hello? Drop me a message and I'll get back to you soon!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glassmorphism-strong rounded-3xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={formVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-3">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 glassmorphism rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 glassmorphism rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-3">
                    Subject *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 glassmorphism rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-3">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 glassmorphism rounded-2xl text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-2xl transition-all duration-300 font-medium text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Success/Error Message */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      className={`text-center p-4 rounded-2xl ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/20 border border-green-400/30 text-green-300' 
                          : 'bg-red-500/20 border border-red-400/30 text-red-300'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {submitStatus === 'success' 
                        ? "Thank you! Your message has been sent successfully. I'll get back to you soon!" 
                        : "Oops! Something went wrong. Please try again."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-dark-950/50">
        <div className="container-max">
          <motion.div
            className="glassmorphism-strong rounded-3xl p-8 lg:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={formVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing Together?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need help with electronics projects, want to discuss photography, or collaborate on innovative ideas - I'm just an email away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-2xl transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Email Me Directly</span>
              </motion.a>
              <motion.a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Me</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
