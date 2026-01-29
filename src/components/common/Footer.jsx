import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-0.5"
        >
          <p className="text-white/40 text-xs font-light">
            © {currentYear} Aditya Ladhane
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 text-xs font-light"
          >
            Handcrafted with passion and precision
          </motion.p>
        </motion.div>
        
        {/* India in bottom right corner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-2 right-4 sm:right-8"
        >
          <p className="text-white/30 text-xs font-light gradient-text">
            India
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
