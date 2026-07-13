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
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.226-2.477-2.226-1.369 0-2.339.728-2.488 2.226zm-8.504-3h-7.536v-9h7.536c3.413 0 5.122 1.956 5.122 4.12 0 1.579-1.026 2.766-2.457 3.376 1.76.671 2.923 2.016 2.923 4.254 0 2.503-1.921 4.25-5.588 4.25h-7.536v-9zm0 2v-4.5h-4.5v4.5h4.5zm.372 4.5v-4.5h-4.872v4.5h4.872z"/>
  </svg>
);

export const ContactSection = () => {
  return (
    <section id="contact" className="py-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        
        <div className="text-center mb-10 md:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
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
                  <a href="https://www.linkedin.com/in/vinothdesigner" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:border-secondary/50 transition-all hover:-translate-y-1 shadow-lg group/social">
                    <LinkedinIcon className="w-5 h-5 text-white group-hover/social:text-secondary transition-colors" />
                  </a>
                  <a href="https://www.behance.net/vinothp24" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:border-secondary/50 transition-all hover:-translate-y-1 shadow-lg group/social">
                    <BehanceIcon className="w-5 h-5 text-white group-hover/social:text-secondary transition-colors" />
                  </a>
                  <a href="mailto:vinothuiuxdesigner@gmail.com" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:border-secondary/50 transition-all hover:-translate-y-1 shadow-lg group/social">
                    <Mail className="w-5 h-5 text-white group-hover/social:text-secondary transition-colors" />
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
                  className="relative group w-full inline-flex items-center justify-center px-7 py-2.5 text-sm font-bold tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary),0.6)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x" />
                  <div className="absolute inset-[2px] bg-black/40 rounded-full group-hover:bg-transparent transition-colors duration-300" />
                  <span className="relative z-10 text-white flex items-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
