import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
);

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 14s-1 0-1-1 1-4 4-4 4 2 4 4v2H6s0 3 4 3c3 0 4-2 4-2"></path><line x1="7" y1="10" x2="13" y2="10"></line></svg>
);

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xs md:text-sm font-medium tracking-[0.3em] uppercase"
          >
            Let's build something amazing
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative items-stretch">

          {/* LEFT SIDE: Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            {/* Ambient glows behind details */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[80px] group-hover:bg-secondary/20 transition-colors duration-700 pointer-events-none z-0" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-light text-white mb-2">Contact Information</h3>
                <p className="text-text-muted leading-relaxed font-light text-sm md:text-base">
                  Feel free to reach out to me for any project inquiries, collaborations, or just to say hello.
                </p>
              </div>

              <div className="space-y-4 flex-grow">
                {/* Email */}
                <a href="mailto:vinothdesigneruiux@gmail.com" className="flex items-start gap-5 hover:-translate-y-1 transition-transform group/link">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/link:bg-primary/20 transition-colors shadow-lg mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Email</p>
                    <p className="text-white text-base md:text-lg font-medium group-hover/link:text-primary transition-colors break-all">vinothdesigneruiux@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+919360584304" className="flex items-start gap-5 hover:-translate-y-1 transition-transform group/link">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/link:bg-secondary/20 transition-colors shadow-lg mt-1">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Phone</p>
                    <p className="text-white text-base md:text-lg font-medium group-hover/link:text-secondary transition-colors">+91 9360584304</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Address</p>
                    <p className="text-white text-base md:text-lg font-medium">Erode, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <p className="text-xs text-text-muted uppercase tracking-widest mb-4">Follow Me</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:border-secondary/50 transition-all hover:-translate-y-1 shadow-lg group/social">
                    <LinkedinIcon className="w-5 h-5 text-white group-hover/social:text-secondary transition-colors" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:border-secondary/50 transition-all hover:-translate-y-1 shadow-lg group/social">
                    <DribbbleIcon className="w-5 h-5 text-white group-hover/social:text-secondary transition-colors" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:border-secondary/50 transition-all hover:-translate-y-1 shadow-lg group/social">
                    <BehanceIcon className="w-5 h-5 text-white group-hover/social:text-secondary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:border-primary/30 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col h-full"
          >
            {/* Ambient glows behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none z-0" />
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-light text-white mb-8">Send me a message</h3>
              
              <form className="space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-text-muted mb-2 uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Your name" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-text-muted mb-2 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="your@email.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-text-muted mb-2 uppercase tracking-widest">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Tell me about your project..." 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white font-bold tracking-wide hover:bg-primary hover:border-primary/50 transition-all duration-300 shadow-lg group/btn mt-8"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
