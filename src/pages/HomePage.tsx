import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { CertificatesSection } from '../components/sections/CertificatesSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ContactSection } from '../components/sections/ContactSection';
import { PageTransition } from '../components/layout/PageTransition';

export const HomePage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col w-full min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <EducationSection />
        <ContactSection />
      </div>
    </PageTransition>
  );
};
