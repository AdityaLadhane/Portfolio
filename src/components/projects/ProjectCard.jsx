import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { getOptimizedImageUrl, getResponsiveSrcSet } from '../../utils/imageHelpers';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="card group cursor-pointer overflow-hidden"
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={getOptimizedImageUrl(project.thumbnail, 600, 80)}
          srcSet={getResponsiveSrcSet(project.thumbnail, [400, 600, 800], 80)}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
          >
            <Github className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
