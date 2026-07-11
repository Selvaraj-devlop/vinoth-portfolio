import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    id: '1',
    degree: 'Advanced UI/UX Design (Certificate)',
    institution: 'De Mentee Academy',
    duration: 'Jun 2025 – Feb 2026',
    location: 'Coimbatore, Tamil Nadu'
  },
  {
    id: '2',
    degree: "Bachelor's Degree in Computer Science",
    institution: 'Shree Venkateshwara Arts and Science Co-education College',
    duration: 'Aug 2022 – May 2025',
    location: 'Erode, Tamil Nadu'
  },
  {
    id: '3',
    degree: 'Higher Secondary Education (12th HSC)',
    institution: 'Government Higher Secondary School',
    duration: 'Jun 2021 – May 2022',
    location: 'Erode, Tamil Nadu'
  },
  {
    id: '4',
    degree: 'Secondary Education (10th SSLC)',
    institution: 'Government Higher Secondary School',
    duration: 'Jun 2019 – May 2020',
    location: 'Erode, Tamil Nadu'
  }
];

export const EducationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Education</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xs md:text-sm font-medium tracking-[0.3em] uppercase"
          >
            Academic Background
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
            {education.map((edu, index) => {
              
              return (
                <div key={edu.id} className="relative flex flex-col items-start pl-16">
                  
                  {/* Glowing Node on the Track */}
                  <div className="absolute left-[13px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-4 border-secondary shadow-[0_0_15px_rgba(124,58,237,0.8)] z-20 flex items-center justify-center">
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
                    <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 border rounded-[2rem] p-6 md:p-8 hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden">
                      
                      {/* Background Sweep on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-secondary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                      {/* Header row (Icon + Duration) */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-colors">
                          <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-secondary transition-colors" />
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-normal text-secondary">
                          {edu.duration}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-base md:text-lg font-normal text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors">
                        {edu.degree}
                      </h3>
                      
                      <h4 className="text-sm font-normal text-text-muted mb-4">
                        {edu.institution}
                      </h4>
                      
                      {/* Location */}
                      <div className="flex items-center gap-2 text-text-muted/60 text-xs font-normal">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
