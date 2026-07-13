import { Project } from '../types';

import imgDreamClg from '../assets/images/dream clg.jpeg';
import imgCrm from '../assets/images/crm.webp';
import imgEcommerce from '../assets/images/e-commerce.webp';
import imgTurf from '../assets/images/turf.png';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'dream-college-application',
    title: 'Dream College Application',
    category: 'UI/UX Design',
    shortDescription: 'A UX solution aimed at improving education access for rural students, addressing real-world usability barriers.',
    fullDescription: 'Executed the complete design thinking process: user research, ideation, wireframing, high-fidelity prototyping, and usability testing to build a platform tailored for rural students.',
    coverImage: imgDreamClg,
    images: [],
    toolsUsed: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    role: 'Independent Project',
    duration: 'Nov 2025 – Feb 2026',
    result: 'Delivered a simple, accessible, and user-friendly platform tailored to the needs of rural student users in Coimbatore, India.',
    liveProjectLink: '#'
  },
  {
    id: '2',
    slug: 'crm-dashboard-design',
    title: 'CRM Dashboard Design',
    category: 'UI/UX Design',
    shortDescription: 'A comprehensive CRM dashboard for managing leads, sales, and vendor relationships.',
    fullDescription: 'Designed an end-to-end CRM dashboard focusing on lead management, sales tracking modules, and vendor subscriptions. Prioritized data visualization clarity, clear navigation, and quick actionable insights for administrators.',
    coverImage: imgCrm,
    images: [],
    toolsUsed: ['Figma', 'Prototyping', 'Wireframing'],
    role: 'UI/UX Designer',
    duration: '2 Months',
    result: 'Streamlined the vendor management process, improving administrative efficiency by 40%.',
  },
  {
    id: '4',
    slug: 'star-bag-leather-ecommerce',
    title: 'Star Bag Leather E‑Commerce',
    category: 'UI/UX Design',
    shortDescription: 'A boutique online store for premium leather bags featuring seamless shopping experience.',
    fullDescription: 'Designed and built a full‑stack e‑commerce platform for Star Bag, focusing on high‑resolution product visuals, custom configurator, and secure checkout integration.',
    coverImage: imgEcommerce,
    images: [],
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
    coverImage: imgTurf,
    images: [],
    toolsUsed: ['Figma', 'Protopie', 'Adobe Illustrator'],
    role: 'UI/UX Designer',
    duration: '2 Months',
    result: 'Onboarded 50+ active users within first month, 95% booking success rate.',
    liveProjectLink: '#'
  }
];
