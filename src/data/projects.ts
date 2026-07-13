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
    id: '4',
    slug: 'star-bag-leather-ecommerce',
      title: 'Star Bag Leather E‑Commerce',
      category: 'UI/UX Design',
      shortDescription: 'A boutique online store for premium leather bags featuring seamless shopping experience.',
      fullDescription: 'Designed and built a full‑stack e‑commerce platform for Star Bag, focusing on high‑resolution product visuals, custom configurator, and secure checkout integration.',
      coverImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000',
      images: [
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000'
      ],
      toolsUsed: ['Next.js', 'Tailwind CSS', 'Stripe', 'Sanity.io'],
      role: 'Full‑Stack Developer',
      duration: '3 Months',
      result: 'Achieved 30% increase in conversion rate and 25% higher average order value.',
      liveProjectLink: '#'
    },
    {
      id: '5',
      slug: 'turf-management-app',
      title: 'Turf Management App',
      category: 'Mobile App Design',
      shortDescription: 'A mobile app UI design for booking and managing sports turfs with real‑time availability.',
      fullDescription: 'Designed a seamless cross‑platform mobile application interface that allows users to discover, book, and pay for turf slots, alongside an intuitive admin dashboard for turf owners.',
      coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1000'
      ],
      toolsUsed: ['Figma', 'Protopie', 'Adobe Illustrator'],
      role: 'UI/UX Designer',
      duration: '2 Months',
      result: 'Onboarded 50+ active users within first month, 95% booking success rate.',
      liveProjectLink: '#'
    }
];
