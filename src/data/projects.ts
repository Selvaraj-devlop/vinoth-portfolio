import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'fintech-dashboard',
    title: 'Fintech Analytics Dashboard',
    category: 'UI/UX Design',
    shortDescription: 'A comprehensive dashboard for tracking personal finances and investments with real-time analytics.',
    fullDescription: 'This project involved completely redesigning the core user experience of a legacy financial app, bringing it to modern standards. The main challenge was displaying dense data sets cleanly on both desktop and mobile devices.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
    ],
    toolsUsed: ['Figma', 'Protopie', 'Adobe Illustrator'],
    role: 'Lead Product Designer',
    duration: '3 Months',
    result: 'Increased daily active users by 45% and reduced user onboarding time by 30%.',
    liveProjectLink: '#'
  },
  {
    id: '2',
    slug: 'healthcare-app',
    title: 'Telehealth Patient App',
    category: 'Mobile Design',
    shortDescription: 'An accessible mobile application connecting patients with healthcare professionals for virtual consultations.',
    fullDescription: 'Designed a highly accessible telehealth mobile app focusing on an elderly demographic, emphasizing high contrast, clear typography, and a simplified booking flow.',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000'
    ],
    toolsUsed: ['Figma', 'Framer', 'Whimsical'],
    role: 'UX Designer',
    duration: '4 Months',
    result: 'Successfully launched in 3 states with over 10,000 active patients in the first month.',
  },
  {
    id: '3',
    slug: 'ecommerce-redesign',
    title: 'Modern E-commerce Experience',
    category: 'Web Design',
    shortDescription: 'A complete overhaul of a boutique fashion retailer\'s online presence to improve conversion rates.',
    fullDescription: 'Redesigned the end-to-end shopping experience, from product discovery to checkout, focusing on high-quality visuals and frictionless payments.',
    coverImage: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1000'
    ],
    toolsUsed: ['Figma', 'Miro', 'After Effects'],
    role: 'UI/UX Designer',
    duration: '2 Months',
    result: 'Improved checkout conversion rate by 22% and average order value by 15%.',
    liveProjectLink: '#'
  }
];
