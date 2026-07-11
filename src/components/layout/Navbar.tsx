import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
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
              className="p-2.5 rounded-full bg-white/5 text-white border border-border/50 hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, type: 'tween' }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24 px-8 space-y-6"
          >
            {navLinks.map((link) => (
              isHomePage ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xl font-semibold text-white hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-semibold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href="/Vinoth P.pdf" 
              download="Vinoth P.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group inline-flex items-center justify-center px-6 py-2 mt-8 text-sm w-fit rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
