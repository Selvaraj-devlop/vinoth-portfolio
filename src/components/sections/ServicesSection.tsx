import React from 'react';
import { motion } from 'framer-motion';
import { Palette, LayoutTemplate, Search, PenTool, Layers, MonitorPlay } from 'lucide-react';

const services = [
  {
    title: 'UX Audit',
    description: 'UX audit to enhance accessibility,\nvisual consistency, mobile responsiveness,\nand overall performance, ensuring a smoother user experience.',
    icon: Palette,
    color: 'primary'
  },
  {
    title: 'UI Design',
    description: 'Creating structured, highly scalable, and visually stunning interfaces that perfectly balance aesthetics with raw functionality.',
    icon: LayoutTemplate,
    color: 'secondary'
  },
  {
    title: 'UX Research',
    description: 'Deep-diving into user behavior, conducting interviews, and translating complex insights into practical, data-driven design decisions.',
    icon: Search,
    color: 'primary'
  },
  {
    title: 'Wireframing',
    description: 'Drafting low to high-fidelity wireframes that rapidly map out the user journey and validate core concepts early in development.',
    icon: PenTool,
    color: 'secondary'
  },
  {
    title: 'Design Systems',
    description: 'Building deeply consistent, reusable component libraries and design tokens for scalable, long-term product development.',
    icon: Layers,
    color: 'primary'
  },
  {
    title: 'Prototyping',
    description: 'Developing highly interactive, animated prototypes that bring static ideas to life and facilitate seamless usability testing.',
    icon: MonitorPlay,
    color: 'secondary'
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xs md:text-sm font-medium tracking-[0.2em] uppercase"
          >
            Expertise I bring to your projects
          </motion.p>
        </div>

        {/* Standard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Tailwind doesn't parse dynamic class names well, so we use a simple map
            const glowClass = service.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/30' : 'bg-secondary/10 group-hover:bg-secondary/30';
            const textClass = service.color === 'primary' ? 'text-primary' : 'text-secondary';
            const bgClass = service.color === 'primary' ? 'group-hover:bg-primary/20' : 'group-hover:bg-secondary/20';
            const borderClass = service.color === 'primary' ? 'hover:border-primary/50' : 'hover:border-secondary/50';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col h-full ${borderClass}`}
              >
                {/* Hover gradient background slide */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none z-0" />
                
                {/* Inner ambient glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] transition-colors duration-500 z-0 ${glowClass}`} />
                
                <div className="mb-8 relative z-10">
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300 shadow-lg inline-flex ${textClass} ${bgClass}`}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-light uppercase tracking-[0.1em] text-white/90 mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed text-lg font-light whitespace-pre-line relative z-10">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
};
