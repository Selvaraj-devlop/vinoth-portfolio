import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    id: '1',
    role: 'UX/UI Designer (Internship)',
    company: 'Carrezza Global Solutions',
    duration: 'Apr 2026 – Jun 2026',
    location: 'Perundurai, Tamil Nadu',
    points: [
      'Designed CRM dashboards, lead management, and sales tracking modules end-to-end',
      'Delivered Turf Vendor Management platform: onboarding, subscriptions, booking flows, admin dashboard',
      'Shipped Star Bags e-commerce customer and admin panels (products, orders, coupons, payments)'
    ]
  },
  {
    id: '2',
    role: 'UI/UX Intern (Remote)',
    company: 'Cognify Technologies',
    duration: 'Nov 2025 – Dec 2025',
    location: 'Nagpur, Maharashtra',
    points: [
      'Built reusable Figma component libraries: buttons, cards, icons, navigation',
      'Created color systems, typography scales, and landing page layouts',
      'Strengthened core UX principles: consistency, accessibility, user-centered design'
    ]
  },
  {
    id: '3',
    role: 'UI/UX Intern (Remote)',
    company: 'CodSoft',
    duration: 'Oct 2025 – Nov 2025',
    location: 'Kolkata, West Bengal, India',
    points: [
      'Designed a complete mobile signup flow, email template, restaurant menu, and e-commerce UI based on client requirements',
      'Applied auto-layout, components, wireframing, and high-fidelity prototyping to improve practical Figma skills',
      'Created clean, user-friendly layouts with clear navigation, visual hierarchy, and responsive structure',
      'Maintained a GitHub repository documenting all tasks and produced demo videos showcasing the design process'
    ]
  }
];

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="experience" className="py-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        
        <div className="text-center mb-10 md:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xs md:text-sm font-medium tracking-[0.3em] uppercase"
          >
            Professional Journey
          </motion.p>
        </div>
        
        <div ref={containerRef} className="relative pl-4 md:pl-0 mx-auto max-w-4xl">
          
          {/* The Track (Background Line) */}
          <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-white/10 rounded-full" />
          
          {/* The Glowing Animated Fill Line */}
          <motion.div 
            className="absolute left-[23px] top-4 bottom-4 w-[4px] bg-gradient-to-b from-primary via-secondary to-primary rounded-full shadow-[0_0_20px_rgba(255,75,43,0.8)] origin-top z-10"
            style={{ scaleY: scrollYProgress }}
          />
          
          <div className="space-y-8 md:space-y-12 py-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex flex-col items-start pl-16">
                
                {/* Glowing Node on the Track */}
                <div className="absolute left-[13px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(255,75,43,0.8)] z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>

                {/* Content Card (3D Glassmorphism) */}
                <motion.div 
                  initial={{ opacity: 0, x: 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="w-full group"
                >
                  <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 border rounded-[2rem] p-6 md:p-8 hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden">
                    
                    {/* Background Sweep on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-primary/10 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Header row (Icon + Duration) */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                        <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-primary transition-colors" />
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-normal text-primary">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-light text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-sm md:text-base font-normal text-text-muted mb-6">
                      {exp.company}
                    </h4>
                    
                    <ul className="space-y-3 mb-6">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start text-text-muted/80 text-sm leading-relaxed group-hover:text-text-muted transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 mr-3 shrink-0 group-hover:bg-primary transition-colors" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Location */}
                    <div className="flex items-center gap-2 text-text-muted/60 text-xs font-normal pt-4 border-t border-white/5">
                      <MapPin className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                      <span>{exp.location}</span>
                    </div>

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
