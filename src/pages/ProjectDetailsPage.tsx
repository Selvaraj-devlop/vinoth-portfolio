import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Wrench, CheckCircle2, Zap, Layout } from 'lucide-react';
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

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">

        {/* Top Bar with Back Link */}
        <div className="pt-24 pb-4 container mx-auto px-6 md:px-12">
          <Link to="/#projects" className="inline-flex items-center text-white/70 hover:text-white transition-all hover:-translate-x-1 backdrop-blur-xl bg-white/5 px-5 py-2.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>
        </div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 md:px-12 text-center mb-10"
        >
          <p className="text-primary text-[11px] font-bold uppercase tracking-[0.35em] mb-4">Project Showcase</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto font-light">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="container mx-auto px-6 md:px-12 mb-16"
        >
          <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={project.coverImage} 
              alt={project.title} 
              className="w-full h-auto object-cover" 
            />
          </div>
        </motion.div>

        {/* Content: Sidebar + Main */}
        <div className="container mx-auto px-6 md:px-12 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* LEFT SIDEBAR — Project Information */}
            <motion.aside {...fadeUp} className="lg:w-[280px] shrink-0">
              <div className="lg:sticky lg:top-28">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-primary rounded-full"></span>
                  Project Information
                </h3>

                <div className="space-y-5 mb-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-semibold mb-1">Duration</p>
                    <p className="text-white text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-primary" /> {project.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-semibold mb-1">My Role</p>
                    <p className="text-white text-sm font-medium flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-primary" /> {project.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-semibold mb-1">Tools Used</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.toolsUsed.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-[11px] text-white/80 border border-white/10">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Features Checklist */}
                {project.keyFeatures && (
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-semibold mb-3">Key Features</p>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.aside>

            {/* RIGHT MAIN CONTENT */}
            <div className="flex-1 min-w-0 space-y-14">

              {/* Project Overview */}
              <motion.section {...fadeUp}>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-text-muted text-base leading-relaxed">
                  {project.fullDescription}
                </p>
              </motion.section>

              {/* The Problem */}
              {project.problem && (
                <motion.section {...fadeUp}>
                  <div className="border-l-[3px] border-primary pl-6 py-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">The Problem</h2>
                    <p className="text-text-muted text-base leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </motion.section>
              )}

              {/* The Solution */}
              {project.solution && (
                <motion.section {...fadeUp}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Solution</h2>
                  <p className="text-text-muted text-base leading-relaxed">
                    {project.solution}
                  </p>
                </motion.section>
              )}

              {/* Deliverables & Components */}
              {project.deliverables && project.deliverables.length > 0 && (
                <motion.section {...fadeUp}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Deliverables & Components</h2>
                  <div className="space-y-4">
                    {project.deliverables.map((item, i) => (
                      <div 
                        key={i}
                        className={`border-l-[3px] ${item.color === 'primary' ? 'border-primary' : 'border-secondary'} bg-white/[0.02] rounded-r-xl pl-6 pr-6 py-5`}
                      >
                        <h3 className={`text-base font-bold mb-1.5 ${item.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                          {item.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Interactive Interfaces / Screen Modules */}
              {project.screenModules && project.screenModules.length > 0 && (
                <motion.section {...fadeUp}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Interactive Interfaces</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {project.screenModules.map((mod, i) => (
                      <div 
                        key={i}
                        className={`p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-colors ${
                          i === project.screenModules!.length - 1 && project.screenModules!.length % 2 !== 0 ? 'md:col-span-2 md:max-w-[50%]' : ''
                        }`}
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-2">{mod.label}</p>
                        <h3 className="text-white font-bold text-base mb-2">{mod.title}</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{mod.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}


              {/* The Result */}
              <motion.section {...fadeUp}>
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <Layout className="w-6 h-6 text-secondary" />
                    The Result
                  </h2>
                  <p className="text-text-muted text-base leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </motion.section>

            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};
