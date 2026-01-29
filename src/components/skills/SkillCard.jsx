import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, color }) => {
  const [animatedProficiency, setAnimatedProficiency] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProficiency(skill.proficiency);
    }, 500);
    return () => clearTimeout(timer);
  }, [skill.proficiency]);

  const getProficiencyLevel = (proficiency) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getLevelColor = (proficiency) => {
    if (proficiency >= 90) return 'text-green-600';
    if (proficiency >= 80) return 'text-blue-600';
    if (proficiency >= 70) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <motion.div
      className="card p-6 group hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
          {skill.name}
        </h3>
        <span className={`text-sm font-medium ${getLevelColor(skill.proficiency)}`}>
          {getProficiencyLevel(skill.proficiency)}
        </span>
      </div>

      {/* Circular Progress */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
          {/* Background Circle */}
          <circle
            cx="40"
            cy="40"
            r="32"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          
          {/* Progress Circle */}
          <motion.circle
            cx="40"
            cy="40"
            r="32"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: animatedProficiency / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="drop-shadow-sm"
            style={{
              strokeDasharray: "201.06 201.06", // 2 * PI * 32
            }}
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-lg font-bold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {animatedProficiency}%
          </motion.span>
        </div>
      </div>

      {/* Progress Bar Alternative (Hidden) */}
      <div className="hidden">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Proficiency</span>
          <span className="text-sm font-medium text-gray-900">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full bg-gradient-to-r ${color}`}
            initial={{ width: 0 }}
            animate={{ width: `${animatedProficiency}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
