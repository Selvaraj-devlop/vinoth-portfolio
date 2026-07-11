import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-surface/50 border border-border/40 hover:border-primary/40 transition-colors duration-300 shadow-lg flex flex-col h-full"
    >
      <Link to={`/projects/${project.slug}`} className="flex flex-col h-full">
        {/* Image Top */}
        <div className="relative h-48 md:h-52 w-full overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={project.coverImage} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        
        {/* Content Bottom */}
        <div className="p-5 md:p-6 flex-grow flex flex-col">
          <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors mt-auto leading-tight">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};
