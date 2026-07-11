import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Palette, Sparkles, Target } from 'lucide-react';

const skillCategories = [
  {
    id: "ux",
    label: "UX/UI Expertise",
    icon: <PenTool className="w-6 h-6 md:w-8 md:h-8" />,
    colorClasses: { border: "hover:border-primary/50", glow: "bg-primary/10 group-hover:bg-primary/30", iconBg: "group-hover:bg-primary/20", iconText: "text-primary" },
    skills: [
      "Product Design", "UX Strategy", "User Research", "Usability Testing", 
      "A/B Testing", "Information Architecture", "User Flows", "Journey Mapping", 
      "Wireframing", "Prototyping", "WCAG Accessibility", "Responsive Design", 
      "Design Systems", "Auto Layout", "Color Theory", "Agile Workflows"
    ]
  },
  {
    id: "tools",
    label: "Design Tools",
    icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
    colorClasses: { border: "hover:border-secondary/50", glow: "bg-secondary/10 group-hover:bg-secondary/30", iconBg: "group-hover:bg-secondary/20", iconText: "text-secondary" },
    skills: [
      "Figma", "Adobe XD", "Adobe Photoshop", "Framer", "Pixso", "Miro", 
      "Balsamiq", "Canva", "Marvel"
    ]
  },
  {
    id: "ai",
    label: "AI & Modern Workflow",
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
    colorClasses: { border: "hover:border-primary/50", glow: "bg-primary/10 group-hover:bg-primary/30", iconBg: "group-hover:bg-primary/20", iconText: "text-primary" },
    skills: [
      "UX Pilot", "Figma Make", "Figma Component AI", "UX Magic", "Maze", 
      "Google Stitch", "Uizard", "UI Plugins", "Jira", "ChatGPT"
    ]
  },
  {
    id: "core",
    label: "Core Strengths",
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    colorClasses: { border: "hover:border-secondary/50", glow: "bg-secondary/10 group-hover:bg-secondary/30", iconBg: "group-hover:bg-secondary/20", iconText: "text-secondary" },
    skills: [
      "Problem Solving", "Design Thinking", "Team Collaboration", "Cross-Functional Comms", 
      "Time Management", "Deadline-Driven", "Adaptability", "Continuous Learning"
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-xs md:text-lg font-medium tracking-[0.2em] uppercase"
          >
            Tools and expertise I bring to the table
          </motion.p>
        </div>

        {/* Categorized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col ${category.colorClasses.border}`}
            >
              {/* Hover gradient background slide */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none z-0" />
              
              {/* Inner ambient glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 blur-[60px] transition-colors duration-500 z-0 ${category.colorClasses.glow}`} />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300 shadow-lg ${category.colorClasses.iconText} ${category.colorClasses.iconBg}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] text-white/90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  {category.label}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 md:px-4 md:py-2 text-[8px] md:text-[10px] font-medium text-text-muted bg-white/5 border border-white/10 rounded-lg backdrop-blur-md group-hover:border-white/20 transition-all duration-300 hover:!text-white hover:!bg-white/10 hover:!border-white/40 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
