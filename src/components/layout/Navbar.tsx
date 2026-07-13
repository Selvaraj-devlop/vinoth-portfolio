import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Home, User, Wrench, Layers, FolderOpen, Briefcase, Award, GraduationCap, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Services', href: '#services', icon: Layers },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Certificates', href: '#certificates', icon: Award },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) return;
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ease-out left-1/2 -translate-x-1/2 w-[95%] max-w-7xl ${
          isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } ${
          isScrolled 
            ? 'top-4 bg-surface/80 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/50 py-2 rounded-3xl' 
            : 'top-6 bg-surface/40 backdrop-blur-md border border-border/30 py-2.5 rounded-2xl'
        }`}
      >
        <div className="px-5 md:px-6 flex items-center justify-between">
          
          {/* Unique Animated Logo */}
          <Link to="/" className="flex items-center gap-3 relative z-50 group">
            <div className="relative flex items-center justify-center p-1">
              {/* Glowing Background Blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-md opacity-40 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              
              {/* Inner Logo Box */}
              <div className="relative flex items-baseline bg-[#0a0a0a] px-4 py-1.5 rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors backdrop-blur-md overflow-hidden">
                {/* Moving glare inside the box */}
                <motion.div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[30deg]"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                />
                
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary font-black text-xl tracking-tighter relative z-10 group-hover:scale-110 transition-transform duration-300">
                  V
                </span>
                <div className="flex font-light tracking-[0.3em] text-white/90 text-xs ml-1.5 relative z-10">
                  {['I', 'N', 'O', 'T', 'H'].map((letter, i) => (
                    <motion.span
                      key={i}
                      className="inline-block group-hover:text-white group-hover:font-medium transition-all duration-300"
                      whileHover={{ y: -2, color: "var(--color-primary)" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1 bg-background/50 p-1.5 rounded-full border border-border/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return isHomePage ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 relative ${
                    isActive ? 'text-white' : 'text-text-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div layoutId="navbar-bg" className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30" />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  className="text-xs font-medium px-3 py-1.5 rounded-full text-text-muted hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>
          
          <div className="hidden xl:flex items-center gap-4">
            <a 
              href="/Vinoth P.pdf" 
              download="Vinoth P.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group inline-flex items-center justify-center px-6 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center relative z-50">
            <button
              className="relative p-2.5 rounded-full bg-white/5 text-white border border-border/50 hover:bg-white/10 transition-colors overflow-hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — Glassmorphic Slide-in Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Slide-in panel from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 z-40 h-full w-[80%] max-w-sm bg-surface/90 backdrop-blur-2xl border-l border-white/10 shadow-[-20px_0_60px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Decorative glow */}
              <div className="absolute top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-20 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-[60px] pointer-events-none" />

              {/* Header area */}
              <div className="pt-8 px-8 pb-4 border-b border-white/5 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Navigation</p>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-primary/40 transition-all"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3, ease: 'easeOut' }}
                    >
                      {isHomePage ? (
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-left transition-all duration-300 group ${
                            isActive
                              ? 'bg-gradient-to-r from-primary/15 to-secondary/10 border border-primary/30 text-white'
                              : 'text-white/70 hover:bg-white/5 hover:text-white border border-transparent'
                          }`}
                        >
                          <link.icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-white/30 group-hover:text-primary/60'} transition-colors`} />
                          <span className="text-sm font-semibold tracking-wide">{link.name}</span>
                          {isActive && (
                            <ArrowRight className="w-3.5 h-3.5 text-primary ml-auto" />
                          )}
                        </button>
                      ) : (
                        <Link
                          to={`/${link.href}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-left text-white/70 hover:bg-white/5 hover:text-white border border-transparent transition-all duration-300 group"
                        >
                          <link.icon className="w-4 h-4 text-white/30 group-hover:text-primary/60 transition-colors" />
                          <span className="text-sm font-semibold tracking-wide">{link.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              {/* Resume button at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-6 pb-8 pt-4 border-t border-white/5"
              >
                <a 
                  href="/Vinoth P.pdf" 
                  download="Vinoth P.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative group w-full inline-flex items-center justify-center px-7 py-2.5 text-sm font-bold tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(var(--color-primary),0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x" />
                  <div className="absolute inset-[2px] bg-black/40 rounded-full group-hover:bg-transparent transition-colors duration-300" />
                  <span className="relative z-10 text-white flex items-center gap-2">
                    Download Resume
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

