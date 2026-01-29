import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { itemVariants } from '../../utils/animations';

const SkillCategory = ({ title, skills, color, delay = 0 }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            transition={{ delay: delay + index * 0.1 }}
          >
            <SkillCard skill={skill} color={color} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
