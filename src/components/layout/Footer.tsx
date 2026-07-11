import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-background">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-2">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black tracking-tighter text-white mb-6 group cursor-default"
            >
              VINO<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all duration-500">TH.</span>
            </motion.h3>
            <p className="text-text-muted max-w-sm mb-8 font-light leading-relaxed">
              A passionate UI/UX Designer dedicated to creating elegant, user-centric digital experiences that solve real problems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-text-muted hover:text-white transition-all duration-300 shadow-lg group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 text-text-muted hover:text-white transition-all duration-300 shadow-lg group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-text-muted hover:text-white transition-all duration-300 shadow-lg group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white tracking-widest uppercase text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase()}`} className="text-text-muted hover:text-primary transition-colors text-sm font-light flex items-center group">
                    <span className="w-0 h-px bg-primary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white tracking-widest uppercase text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-text-muted text-sm font-light">
              <li>
                <a href="mailto:vinothdesigneruiux@gmail.com" className="flex items-center group hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <Mail size={14} className="text-white group-hover:text-primary" />
                  </div>
                  vinothdesigneruiux@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-center text-text-muted/70 cursor-default group">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-colors">
                    <MapPin size={14} className="text-white group-hover:text-secondary transition-colors" />
                  </div>
                  <span className="group-hover:text-white transition-colors">Chennai, India</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted/50 font-light tracking-wide">
          <p>&copy; {currentYear} Vinoth UI/UX Designer. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
