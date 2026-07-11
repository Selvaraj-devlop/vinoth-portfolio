import { Skill, Experience } from '../types';

export const skills: Skill[] = [
  { id: '1', name: 'Figma', category: 'Tools' },
  { id: '2', name: 'Adobe XD', category: 'Tools' },
  { id: '3', name: 'User Research', category: 'Research' },
  { id: '4', name: 'Wireframing', category: 'Design' },
  { id: '5', name: 'Prototyping', category: 'Prototyping' },
  { id: '6', name: 'Design Systems', category: 'Design' },
  { id: '7', name: 'Usability Testing', category: 'Research' },
  { id: '8', name: 'Interaction Design', category: 'Design' },
  { id: '9', name: 'Framer', category: 'Tools' },
  { id: '10', name: 'Webflow', category: 'Tools' }
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior UI/UX Designer',
    company: 'Tech Innovators Inc.',
    duration: '2021 - Present',
    description: 'Leading the design system team, managing end-to-end product design for enterprise SaaS applications, and mentoring junior designers.'
  },
  {
    id: '2',
    role: 'UI/UX Designer',
    company: 'Creative Agency',
    duration: '2019 - 2021',
    description: 'Designed responsive web applications and mobile apps for various international clients in healthcare, fintech, and e-commerce sectors.'
  },
  {
    id: '3',
    role: 'Junior Graphic/Web Designer',
    company: 'StartUp Solutions',
    duration: '2017 - 2019',
    description: 'Created marketing materials, landing pages, and assisted in user interface designs for early-stage startup products.'
  }
];
