import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';

export const ProjectDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-text-muted mb-8">The case study you are looking for does not exist.</p>
          <Button as={Link} to="/#projects">Return to Projects</Button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link to="/#projects" className="inline-flex items-center text-text-muted hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-main mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-text-muted max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden mb-16 shadow-2xl border border-border/50"
          >
            <img src={project.coverImage} alt={project.title} className="w-full h-auto object-cover" />
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-2 space-y-8 text-text-muted leading-relaxed text-lg">
              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">Overview</h2>
                <p>{project.fullDescription}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">The Result</h2>
                <p>{project.result}</p>
              </div>
            </div>

            <div className="space-y-8 glass p-8 rounded-3xl h-fit">
              <div>
                <h3 className="text-sm font-semibold text-text-main uppercase tracking-wider mb-2">Role</h3>
                <p className="text-text-muted">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-main uppercase tracking-wider mb-2">Duration</h3>
                <p className="text-text-muted">{project.duration}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-main uppercase tracking-wider mb-2">Tools Used</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.toolsUsed.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-surface rounded-full text-sm text-text-muted border border-border/50">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {(project.liveProjectLink || project.caseStudyLink) && (
                <div className="pt-6 border-t border-border">
                  <Button 
                    as="a" 
                    href={project.liveProjectLink || project.caseStudyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full gap-2"
                  >
                    View Live Project <ExternalLink size={18} />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Additional Images */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-text-main mb-8">Process & Gallery</h2>
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden shadow-xl border border-border/50"
                >
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto object-cover" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};
