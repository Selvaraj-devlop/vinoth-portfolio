import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: '1',
    role: 'UX/UI Designer (Internship)',
    company: 'Carrezza Global Solutions · Perundurai, Tamil Nadu',
    duration: 'Apr 2026 – Jun 2026',
    points: [
      'Designed CRM dashboards, lead management, and sales tracking modules end-to-end',
      'Delivered Turf Vendor Management platform: onboarding, subscriptions, booking flows, admin dashboard',
      'Shipped Star Bags e-commerce customer and admin panels (products, orders, coupons, payments)'
    ]
  },
  {
    id: '2',
    role: 'UI/UX Intern (Remote)',
    company: 'Cognify Technologies · Nagpur, Maharashtra',
    duration: 'Nov 2025 – Dec 2025',
    points: [
      'Built reusable Figma component libraries: buttons, cards, icons, navigation',
      'Created color systems, typography scales, and landing page layouts',
      'Strengthened core UX principles: consistency, accessibility, user-centered design'
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute right-[10%] top-1/2 w-24 h-24 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Experience</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg"
          >
            Professional journey so far
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto relative pl-4 md:pl-0">
          {/* Vertical Glowing Line */}
          <div className="absolute left-[20px] md:left-[100px] top-4 bottom-4 w-[2px] bg-primary/20 shadow-[0_0_10px_rgba(0,242,254,0.3)] rounded-full" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-start">
                
                {/* Glowing Dot */}
                <div className="absolute left-[13px] md:left-[93px] w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(0,242,254,0.8)] z-10 mt-6" />
                
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="ml-10 md:ml-[160px] w-full"
                >
                  <div className="bg-surface/50 border border-border/40 p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors">
                    <span className="inline-block mb-3 text-sm font-bold text-primary tracking-wide">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-base text-text-muted mb-6">{exp.company}</h4>
                    
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start text-text-muted/90 text-sm md:text-base leading-relaxed">
                          {/* Cyan Arrow Icon */}
                          <svg className="w-4 h-4 text-primary mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
