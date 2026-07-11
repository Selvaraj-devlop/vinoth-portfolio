import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const steps = [
  {
    title: '1. Discover & Research',
    description: 'Understanding the problem space, user needs, and business goals through qualitative and quantitative research.',
  },
  {
    title: '2. Define & Strategy',
    description: 'Synthesizing research into actionable insights, user personas, and defining the core product strategy.',
  },
  {
    title: '3. Ideate & Design',
    description: 'Exploring solutions through wireframes, user flows, and high-fidelity interactive prototypes.',
  },
  {
    title: '4. Test & Iterate',
    description: 'Validating designs with real users, gathering feedback, and refining the experience before handoff.',
  }
];

export const DesignProcessSection = () => {
  return (
    <section id="process" className="py-16 bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Design Process" 
          subtitle="A structured yet flexible approach to solving complex design problems."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-8xl font-black text-primary">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-4 relative z-10">{step.title}</h3>
              <p className="text-text-muted relative z-10 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
