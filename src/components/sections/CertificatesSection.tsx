import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';

// Import real images from assets
import imgCgsExp from '../../assets/images/CGS_EXP_CET.png';
import imgCgsIntern from '../../assets/images/CGS_INTERN_CET.png';
import imgCodsoft from '../../assets/images/CODSOFT_INTERN_CET.jpeg';
import imgCognilyz from '../../assets/images/COGNILYZ_INTERN_CET.jpeg';

const certificates = [
  {
    id: '1',
    title: 'Experience Certificate',
    organization: 'CARREZZA GLOBAL SOLUTIONS',
    image: imgCgsExp,
    color: 'from-primary/20 to-primary/0'
  },
  {
    id: '2',
    title: 'UI/UX Design Internship',
    organization: 'CARREZZA GLOBAL SOLUTIONS',
    image: imgCgsIntern,
    color: 'from-secondary/20 to-secondary/0'
  },
  {
    id: '3',
    title: 'UI/UX Design Internship',
    organization: 'CODSOFT',
    image: imgCodsoft,
    color: 'from-primary/20 to-secondary/20'
  },
  {
    id: '4',
    title: 'UI/UX Design Internship',
    organization: 'COGNILYZ',
    image: imgCognilyz,
    color: 'from-secondary/20 to-primary/20'
  }
];

const CertificateCard = ({ cert, index, onClick }: { cert: any, index: number, onClick: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Calculate 3D rotation based on mouse position
  // The perspective makes it look like a physical card tilting
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="relative z-10"
      onClick={onClick}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden group border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] cursor-pointer"
      >
        {/* Ambient background glow inside frame */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay`} />

        {/* Certificate Image */}
        <img 
          src={cert.image} 
          alt={cert.title} 
          className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-0" 
        />
        
        {/* Subtle overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

        {/* Hover Reveal Details Panel */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 z-20">
          <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <Award className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary drop-shadow-md truncate">
              {cert.organization}
            </span>
          </div>
          <div className="flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <h3 className="text-sm md:text-base font-medium text-white leading-tight drop-shadow-md pr-2">
              {cert.title}
            </h3>
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0 shadow-lg">
              <ExternalLink className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <>
      <section id="certificates" className="py-10 relative overflow-hidden">
        {/* Background ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
          <div className="text-center mb-10 md:mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certificates</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-text-muted text-xs md:text-sm font-medium tracking-[0.3em] uppercase"
            >
              Professional milestones
            </motion.p>
          </div>

          {/* 3D Certificate Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {certificates.map((cert, index) => (
              <CertificateCard 
                key={cert.id} 
                cert={cert} 
                index={index} 
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-surface border border-white/10 flex flex-col"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-4 md:p-6 pb-0 flex flex-col shrink-0">
                <h3 className="text-xl md:text-2xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-primary text-sm font-medium tracking-wider uppercase mt-1">{selectedCert.organization}</p>
              </div>
              <div className="p-4 md:p-6 flex-1 min-h-0 flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
