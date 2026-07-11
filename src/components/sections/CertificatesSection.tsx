import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    id: '1',
    title: 'UI/UX Design Internship',
    organization: 'CARREZZA GLOBAL SOLUTIONS',
    description: 'Successfully completed UI/UX Design internship contributing to real product design projects across CRM and vendor management platforms.',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=600' // Placeholder image
  },
  {
    id: '2',
    title: 'UI/UX Design Internship',
    organization: 'CODSOFT',
    description: 'Successfully completed 4 weeks of virtual internship on real-world UI/UX Design.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=600' // Placeholder image
  }
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">Certificates</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg"
          >
            Professional certifications & achievements
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface/50 border border-border/40 rounded-2xl overflow-hidden hover:border-primary/40 transition-colors shadow-lg"
            >
              {/* Top Half: Image */}
              <div className="w-full h-64 overflow-hidden bg-white flex items-center justify-center p-2">
                 <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-t-xl opacity-90 hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Bottom Half: Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-4 text-primary">
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                  </div>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">{cert.organization}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{cert.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
