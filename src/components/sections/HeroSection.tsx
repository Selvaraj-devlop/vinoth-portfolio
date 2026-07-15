import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { TypeAnimation } from 'react-type-animation';
import { Grid, Layout, Palette, MousePointer2, PenTool } from 'lucide-react';
import profileImage from '../../assets/images/Vinoth P.png';

const FigmaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
  </svg>
);

const translatedNames = [
  <>I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x inline-block">Vinoth</span></>, // English
  <>நான் <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x inline-block">வினோத்</span></>, // Tamil
  <>ഞാൻ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x inline-block">വിനോദ്</span></>, // Malayalam
  <>నేను <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x inline-block">వినోద్</span></>, // Telugu
  <>ನಾನು <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x inline-block">ವಿನೋದ್</span></>, // Kannada
  <>我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x inline-block">维诺特</span></>, // Chinese
  <>私は<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x inline-block">ヴィノス</span>です</>, // Japanese
];

export const HeroSection = () => {
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % translatedNames.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden perspective-[2000px]">

      {/* Massive Background Text */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] z-0 select-none">
        <h1 className="text-[22vw] md:text-[14rem] font-black tracking-tighter whitespace-nowrap">VINOTH</h1>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mt-10 lg:mt-0">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-3/5 text-center lg:text-left mt-8 lg:mt-0">
          
          {/* Static Greeting Badge */}
          <div className="inline-block px-5 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 shadow-[0_0_15px_rgba(var(--color-primary),0.15)] backdrop-blur-sm">
            <p className="text-primary font-bold tracking-widest text-xs md:text-sm uppercase">
              Welcome to my portfolio
            </p>
          </div>
          
          <div className="h-16 md:h-20 lg:h-24 mb-2 flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={nameIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1]"
              >
                {translatedNames[nameIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-xl md:text-3xl font-bold text-white/90 mb-6 h-10 flex items-center justify-center lg:justify-start gap-3"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary filter drop-shadow-[0_0_8px_rgba(var(--color-secondary),0.5)]">
              <TypeAnimation
                sequence={[
                  'UI/UX Designer', 2000,
                  'Web & Mobile Designer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            UI/UX Designer with internship experience across four organizations, delivering real-time, user-centered design solutions for web and mobile platforms. Skilled in Figma, wireframing, prototyping, and the end-to-end design thinking process.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-5"
          >
            {/* Unique "View Projects" Button */}
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group w-full sm:w-auto inline-flex items-center justify-center px-7 py-2.5 text-sm font-bold tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary),0.6)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x" />
              <div className="absolute inset-[2px] bg-black/40 rounded-full group-hover:bg-transparent transition-colors duration-300" />
              <span className="relative z-10 text-white flex items-center gap-2">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>

            {/* Unique "Contact Me" Button */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group w-full sm:w-auto inline-flex items-center justify-center px-7 py-2.5 text-sm font-bold tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-md"
            >
              {/* Spinning gradient border */}
              <div className="absolute inset-[-100%] z-0 bg-[conic-gradient(from_0deg,transparent_0_120deg,var(--color-primary)_180deg,transparent_240deg_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[spin_3s_linear_infinite]" />
              <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-full z-10" />
              
              {/* Static border (hidden on hover) */}
              <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-transparent transition-colors duration-300 z-20 pointer-events-none" />
              
              <span className="relative z-20 text-text-muted group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                Contact Me
              </span>
            </button>
          </motion.div>
        </div>

          {/* Right Side: Holographic Card Style */}
          <div className="lg:w-2/5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, rotateY: 30, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
            className="relative w-64 h-64 md:w-80 md:h-[450px] group transition-all duration-500"
          >
            {/* Unique Designer Floating Wireframes */}
            <motion.div 
              className="absolute inset-0 z-0 rounded-full md:rounded-[2rem] border-[3px] border-primary/40 shadow-[0_0_15px_rgba(var(--color-primary),0.3)]"
              animate={{ 
                rotate: [0, 6, -4, 0],
                scale: [1, 1.08, 1.03, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute inset-0 z-0 rounded-full md:rounded-[2rem] border-[3px] border-secondary/40 shadow-[0_0_15px_rgba(var(--color-secondary),0.3)]"
              animate={{ 
                rotate: [0, -8, 5, 0],
                scale: [1, 1.04, 1.09, 1],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            {/* Inner Content Wrapper */}
            <div className="relative w-full h-full bg-[#050505] rounded-full md:rounded-[2rem] overflow-hidden z-10 border border-white/10 shadow-2xl">
              
              {/* Inner Glare / Hologram effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
              
              <motion.div 
                className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] z-20 pointer-events-none"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Profile Image - Grayscale to Color on hover */}
              <img 
                src={profileImage} 
                alt="Vinoth P" 
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-10 relative"
              />
              
              {/* Tech badges attached to the card - hidden on mobile to fit the circle shape */}
              <div className="hidden md:flex absolute bottom-4 left-4 right-4 justify-between z-30">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                  <FigmaIcon className="w-4 h-4 text-primary" />
                  <span className="text-white text-xs font-semibold">Figma</span>
                </div>
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                  <Grid className="w-4 h-4 text-secondary" />
                  <span className="text-white text-xs font-semibold">UI/UX</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* External Floating Elements (Designer Logos Around Image) */}
          <motion.div 
            className="absolute -top-4 -right-6 lg:-right-12 bg-[#0a0a0a]/80 p-3 rounded-2xl border border-secondary/30 shadow-[0_0_20px_rgba(var(--color-secondary),0.2)] backdrop-blur-md z-30"
            animate={{ y: [-10, 10, -10], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Layout className="w-6 h-6 text-secondary" />
          </motion.div>

          <motion.div 
            className="absolute top-1/4 -left-8 lg:-left-16 bg-[#0a0a0a]/80 p-3 rounded-2xl border border-primary/30 shadow-[0_0_20px_rgba(var(--color-primary),0.2)] backdrop-blur-md z-30"
            animate={{ y: [15, -15, 15], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <Palette className="w-6 h-6 text-primary" />
          </motion.div>

          <motion.div 
            className="absolute bottom-1/4 -right-10 lg:-right-14 bg-[#0a0a0a]/80 p-3 rounded-2xl border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.2)] backdrop-blur-md z-30"
            animate={{ y: [-12, 12, -12], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          >
            <MousePointer2 className="w-6 h-6 text-orange-400" />
          </motion.div>

          <motion.div 
            className="absolute -bottom-6 -left-4 lg:-left-8 bg-[#0a0a0a]/80 p-3 rounded-2xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-md z-30"
            animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          >
            <PenTool className="w-6 h-6 text-blue-400" />
          </motion.div>
        </div>
      </div>

    </section>
  );
};
