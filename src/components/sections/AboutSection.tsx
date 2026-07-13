import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Lightbulb, Layout, Layers, CheckCircle2, ArrowRight, Users2 } from 'lucide-react';

const ProcessNode = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center gap-1 md:gap-2 group/node shrink-0">
    <div className="p-1.5 md:p-4 rounded-lg md:rounded-2xl bg-white/5 border border-white/10 text-white/70 group-hover/node:bg-primary/20 group-hover/node:text-primary group-hover/node:border-primary/50 transition-all duration-300 shadow-lg">
      {icon}
    </div>
    <span className="text-[7px] md:text-xs font-medium text-text-muted group-hover/node:text-white transition-colors uppercase tracking-tighter md:tracking-wider">{label}</span>
  </div>
);

export const AboutSection = () => {
  return (
    <section id="about" className="py-10 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg font-medium tracking-[0.2em] uppercase text-[11px]"
          >
            Get to know me better
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* 1. Intro (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 rounded-[2rem] p-6 md:p-10 relative overflow-hidden group hover:border-primary/50 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
             {/* Hover gradient background slide */}
             <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none z-0" />
             
             {/* Inner glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] group-hover:bg-primary/40 transition-colors duration-500 z-0" />
             <h3 className="text-lg md:text-2xl font-bold uppercase tracking-[0.2em] text-white/90 mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">Hello, I'm Vinoth</h3>
             <h4 className="text-primary font-bold tracking-widest uppercase mb-3 md:mb-4 text-[10px] md:text-sm relative z-10">UI/UX Designer • Product Designer • Problem Solver</h4>
             <p className="text-text-muted text-xs md:text-base leading-relaxed relative z-10 font-light">
               I am a dedicated designer with hands-on internship experience across multiple organizations, delivering real-time, user-centered solutions for web and mobile platforms. 
               From <span className="text-white font-medium">CRM dashboards</span> and vendor management systems to <span className="text-white font-medium">e-commerce experiences</span>, I specialize in the complete end-to-end design thinking process.
             </p>
          </motion.div>

          {/* 2. Location (1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-secondary/50 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-center"
          >
             {/* Hover gradient background slide */}
             <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none z-0" />
             <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative mb-3 md:mb-6 z-10">
               <MapPin className="w-8 h-8 md:w-10 md:h-10 text-secondary relative z-10 group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-secondary/50 blur-xl animate-pulse" />
             </div>
             
             <h3 className="text-base md:text-xl font-light uppercase tracking-[0.2em] text-white/90 mb-1 md:mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">Location</h3>
             <p className="text-[10px] md:text-sm text-text-muted font-light relative z-10">Erode, Tamil Nadu</p>
          </motion.div>

          {/* 3. Experience (1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-primary/50 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-center"
          >
             {/* Hover gradient background slide */}
             <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none z-0" />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(var(--color-primary),0.5)] relative z-10">
               3
             </div>
             <h3 className="text-sm md:text-lg font-light uppercase tracking-[0.2em] text-white/90 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">Organizations</h3>
             <p className="text-[9px] md:text-xs text-text-muted mt-1 md:mt-2 font-light relative z-10">Internship Experience</p>
          </motion.div>

          {/* 4. Process (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 rounded-[2rem] p-6 md:p-10 relative overflow-hidden group hover:border-white/30 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
             {/* Hover gradient background slide */}
             <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none z-0" />
             <h3 className="text-base md:text-xl font-bold uppercase tracking-[0.2em] text-white/90 mb-4 md:mb-8 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">Design Thinking Process</h3>
             
             <div className="flex items-start md:items-center justify-between gap-1 md:gap-4 relative z-10 w-full">
                <ProcessNode icon={<Search className="w-3 h-3 md:w-6 md:h-6" />} label="Research" />
                <ArrowRight className="text-text-muted/30 w-3 h-3 md:w-4 md:h-4 shrink-0 mt-2 md:mt-0" />
                <ProcessNode icon={<Lightbulb className="w-3 h-3 md:w-6 md:h-6" />} label="Ideation" />
                <ArrowRight className="text-text-muted/30 w-3 h-3 md:w-4 md:h-4 shrink-0 mt-2 md:mt-0" />
                <ProcessNode icon={<Layout className="w-3 h-3 md:w-6 md:h-6" />} label="Wireframes" />
                <ArrowRight className="text-text-muted/30 w-3 h-3 md:w-4 md:h-4 shrink-0 mt-2 md:mt-0" />
                <ProcessNode icon={<Layers className="w-3 h-3 md:w-6 md:h-6" />} label="Prototyping" />
                <ArrowRight className="text-text-muted/30 w-3 h-3 md:w-4 md:h-4 shrink-0 mt-2 md:mt-0" />
                <ProcessNode icon={<CheckCircle2 className="w-3 h-3 md:w-6 md:h-6" />} label="Testing" />
             </div>
          </motion.div>

          {/* 5. Teamwork (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 rounded-[2rem] p-6 md:p-10 relative overflow-hidden group hover:border-secondary/50 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-4 md:gap-12"
          >
             {/* Background sweep */}
             <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-0" />
             
             <div className="p-4 md:p-6 bg-white/5 border border-t-white/20 border-l-white/20 border-b-transparent border-r-transparent rounded-full text-secondary group-hover:bg-secondary group-hover:text-black transition-colors duration-500 shadow-[0_0_20px_rgba(var(--color-secondary),0.2)] group-hover:shadow-[0_0_30px_rgba(var(--color-secondary),0.6)] z-10 shrink-0">
               <Users2 className="w-8 h-8 md:w-12 md:h-12" />
             </div>
             
             <div className="text-center md:text-left relative z-10">
               <h3 className="text-lg md:text-2xl font-bold uppercase tracking-[0.2em] text-white/90 mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">Cross-Functional Collaboration</h3>
               <p className="text-text-muted text-xs md:text-base max-w-4xl leading-relaxed font-light">
                 I enjoy collaborating closely with developers and cross-functional teams to ensure designs are successfully implemented. I am skilled at delivering clean, accessible, and highly functional interfaces even under tight deadlines.
               </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
