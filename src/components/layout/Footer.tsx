import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/10 bg-background">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-12 py-10 md:py-14 relative z-10">
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
              <a href="https://www.linkedin.com/in/vinothdesigner" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-text-muted hover:text-white transition-all duration-300 shadow-lg group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.behance.net/vinothp24" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 text-text-muted hover:text-white transition-all duration-300 shadow-lg group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.226-2.477-2.226-1.369 0-2.339.728-2.488 2.226zm-8.504-3h-7.536v-9h7.536c3.413 0 5.122 1.956 5.122 4.12 0 1.579-1.026 2.766-2.457 3.376 1.76.671 2.923 2.016 2.923 4.254 0 2.503-1.921 4.25-5.588 4.25h-7.536v-9zm0 2v-4.5h-4.5v4.5h4.5zm.372 4.5v-4.5h-4.872v4.5h4.872z"/></svg>
              </a>
              <a href="mailto:vinothdesigneruiux@gmail.com" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-text-muted hover:text-white transition-all duration-300 shadow-lg group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
                  <span className="group-hover:text-white transition-colors">Erode, Tamil Nadu</span>
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
