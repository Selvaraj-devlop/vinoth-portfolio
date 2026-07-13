import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, User, Wrench } from 'lucide-react';
import { projects } from '../data/projects';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';

export const ProjectDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-text-muted mb-8">The case study you are looking for does not exist.</p>
          <Button as={Link} to="/#projects">Return to Portfolio</Button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Full Bleed Immersive Hero Section */}
        <div className="relative w-full h-[50vh] min-h-[400px] flex items-end">
          <div className="absolute inset-0 z-0">
            <img 
              src={project.coverImage} 
              alt={project.title} 
              className="w-full h-full object-cover" 
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 w-full pb-16">
            <div className="container mx-auto px-6 md:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/#projects" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6 backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10 text-sm font-medium uppercase tracking-widest">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                </Link>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-wider uppercase rounded-full border border-primary/30">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
                  {project.shortDescription}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 pb-16">
          {/* Glassmorphic Metadata Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative -mt-8 z-20 mb-12"
          >
            <div className="glass p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl border border-white/10">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-sm text-text-muted uppercase tracking-wider font-semibold">
                  <User className="w-4 h-4" /> Role
                </span>
                <span className="text-lg text-white font-medium">{project.role}</span>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-sm text-text-muted uppercase tracking-wider font-semibold">
                  <Calendar className="w-4 h-4" /> Duration
                </span>
                <span className="text-lg text-white font-medium">{project.duration}</span>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-sm text-text-muted uppercase tracking-wider font-semibold">
                  <Wrench className="w-4 h-4" /> Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.toolsUsed.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/90 border border-white/10 backdrop-blur-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {(project.liveProjectLink || project.caseStudyLink) && (
                <div className="mt-4 md:mt-0 w-full md:w-auto">
                  <Button 
                    as="a" 
                    href={project.liveProjectLink || project.caseStudyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/25"
                  >
                    View Live <ExternalLink size={16} />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="max-w-4xl mx-auto space-y-10 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                Overview
              </h2>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light">
                {project.fullDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-12 h-1 bg-secondary rounded-full"></span>
                The Result
              </h2>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light">
                {project.result}
              </p>
            </motion.div>
          </div>

          {/* Process & Gallery */}
          {project.images && project.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Gallery</span>
                </h2>
                <p className="text-text-muted text-lg">Visual highlights from the design process</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-2xl overflow-hidden shadow-xl border border-white/10 group ${
                      index === 2 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="relative aspect-video w-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <img 
                        src={image} 
                        alt={`${project.title} gallery ${index + 1}`} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};
