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
    role: 'Product Designer',
    duration: 'Nov 2025 – Feb 2026',
    result: 'Delivered a simple, accessible, and user-friendly platform tailored to the needs of rural student users in Coimbatore, India.',
    problem: 'Rural students in India face significant barriers accessing higher education information — poor internet connectivity, lack of digital literacy, and no centralized platform for discovering colleges matching their eligibility and preferences.',
    solution: 'A lightweight, mobile-first application that aggregates college data, provides personalized recommendations based on student profiles, and works reliably on low-bandwidth connections with offline-first capabilities.',
    deliverables: [
      { title: 'Student Onboarding Flow', description: 'Simple multi-step registration capturing academic details, location, and preferences with minimal friction.', color: 'primary' },
      { title: 'College Discovery Engine', description: 'Filterable, searchable directory of colleges with eligibility matching and location-based sorting.', color: 'secondary' },
      { title: 'Application Tracker', description: 'Dashboard for students to track application status, deadlines, and required documents.', color: 'primary' }
    ],
    keyFeatures: ['Research-driven', 'Accessibility-first', 'Wireframing', 'Usability Testing', 'Prototyping'],
    screenModules: [
      { label: 'SCREEN MODULE 1', title: 'College Explorer', description: 'Browse and filter colleges by location, course, fees, and eligibility with map integration.' },
      { label: 'SCREEN MODULE 2', title: 'Student Dashboard', description: 'Personalized home screen showing recommended colleges, deadlines, and application progress.' },
      { label: 'SCREEN MODULE 3', title: 'Application Flow', description: 'Step-by-step guided application submission with document upload and status tracking.' }
    ],
    impact: 'User testing with 15 rural students showed 90% task completion rate. The simplified navigation reduced onboarding time by 60% compared to existing platforms.',
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
    duration: '2 weeks',
    result: 'Streamlined the vendor management process, improving administrative efficiency by 40%.',
    problem: 'The existing CRM system used spreadsheets and disconnected tools for lead tracking, resulting in data silos, missed follow-ups, and poor visibility into the sales pipeline.',
    solution: 'A unified CRM dashboard with real-time analytics, automated lead scoring, drag-and-drop pipeline management, and integrated communication tools for seamless team collaboration.',
    deliverables: [
      { title: 'Lead Management Panel', description: 'Visual pipeline with drag-and-drop cards, lead scoring, and automated assignment rules.', color: 'primary' },
      { title: 'Sales Analytics Dashboard', description: 'Interactive charts showing revenue trends, conversion rates, and team performance metrics.', color: 'secondary' },
      { title: 'Vendor Subscription Module', description: 'Subscription management with billing history, plan upgrades, and automated renewal notifications.', color: 'primary' }
    ],
    keyFeatures: ['Data Visualization', 'Component Library', 'Wireframing', 'Iteration', 'Testing'],
    screenModules: [
      { label: 'SCREEN MODULE 1', title: 'Pipeline View', description: 'Kanban-style board showing leads across different stages with quick-action buttons.' },
      { label: 'SCREEN MODULE 2', title: 'Analytics Overview', description: 'Real-time dashboard with KPIs, revenue charts, and conversion funnel visualization.' },
      { label: 'SCREEN MODULE 3', title: 'Contact Management', description: 'Searchable contact directory with activity timelines and communication history.' }
    ],
    impact: 'Reduced lead response time by 35% and improved sales team productivity through centralized data access and automated workflows.'
  },
  {
    id: '3',
    slug: 'star-bag-leather-ecommerce',
    title: 'Star Bag Leather E‑Commerce',
    category: 'UI/UX Design',
    shortDescription: 'A boutique online store for premium leather bags featuring seamless shopping experience.',
    fullDescription: 'Designed and built a full‑stack e‑commerce platform for Star Bag, focusing on high‑resolution product visuals, custom configurator, and secure checkout integration.',
    coverImage: imgEcommerce,
    images: [],
    toolsUsed: ['Figma', 'Protopie', 'Adobe Illustrator'],
    role: 'UI/UX Designer',
    duration: '1 Month',
    result: 'Achieved 30% increase in conversion rate and 25% higher average order value.',
    problem: 'Star Bag\'s existing website had poor product presentation, a confusing multi-step checkout, and no mobile optimization — leading to high cart abandonment rates.',
    solution: 'A visually rich e-commerce experience with immersive product galleries, one-page checkout, and a fully responsive design that showcases the premium quality of leather products.',
    deliverables: [
      { title: 'Product Catalog', description: 'High-resolution image galleries with zoom, 360° views, and detailed material descriptions.', color: 'secondary' },
      { title: 'Customer Dashboard', description: 'Order tracking, wishlist management, and personalized product recommendations.', color: 'primary' },
      { title: 'Admin Panel', description: 'Inventory management, order processing, coupon creation, and sales reporting.', color: 'secondary' }
    ],
    keyFeatures: ['Visual Design', 'Responsive Layout', 'Prototyping', 'User Testing', 'Branding'],
    screenModules: [
      { label: 'SCREEN MODULE 1', title: 'Product Detail Page', description: 'Immersive product view with image carousel, size selector, and add-to-cart flow.' },
      { label: 'SCREEN MODULE 2', title: 'Checkout Flow', description: 'Streamlined one-page checkout with address, payment, and order confirmation.' },
      { label: 'SCREEN MODULE 3', title: 'Order Management', description: 'Admin dashboard for processing orders, managing inventory, and generating reports.' }
    ],
    impact: 'Cart abandonment decreased by 40% after implementing the streamlined checkout. Mobile sales increased by 55% with the responsive redesign.',
    liveProjectLink: '#'
  },
  {
    id: '4',
    slug: 'turf-management-app',
    title: 'Turf Vendor Management App',
    category: 'Mobile App Design',
    shortDescription: 'Operational systems, admin dashboard, and vendor screens for sports turf booking.',
    fullDescription: 'A full-scale B2B vendor management app paired with a Super Admin Dashboard, enabling sports turf vendors to coordinate booking slots, process payments, analyze charts, and configure reservation variables in real time.',
    coverImage: imgTurf,
    images: [],
    toolsUsed: ['Figma', 'Cloud App', 'Layablo', 'Google Slides', 'Layaldo'],
    role: 'Product Designer',
    duration: '2 months',
    result: 'Onboarded 50+ active users within first month, 95% booking success rate.',
    problem: 'Turf operators struggle with slot overlaps, uncoordinated phone reservation inputs, manual payment validation, and a lack of visual data regarding booking distributions and sales peaks.',
    solution: 'An integrated slot-booking scheduler database coupled with interactive visual analytics grids. Venues can configure calendar availability, receive automated mobile slot bookings, and track analytics on responsive dashboard cards.',
    deliverables: [
      { title: 'Vendor Mobile App', description: 'Allows on-the-field coordinators to track schedules, approve manual entries, and scan booking receipts.', color: 'primary' },
      { title: 'Super Admin Dashboard', description: 'Gives management complete authority to edit pricing indexes, configure regional settings, and review client feedback.', color: 'secondary' },
      { title: 'Client Reservation Portal', description: 'Sleek client portal for players to query fields, verify open hours, check discounts, and book slot durations.', color: 'primary' }
    ],
    keyFeatures: ['Research-driven', 'Component Scalability', 'Wireframing', 'Iteration', 'Testing'],
    screenModules: [
      { label: 'SCREEN MODULE 1', title: 'Interactive Calendar Grid', description: 'Multi-view calendar layout showing occupied slots, pending slots, and open slots with simple hover details.' },
      { label: 'SCREEN MODULE 2', title: 'Admin Analytics Sheet', description: 'Charts displaying peak hour traffic, monthly income margins, and slot demand indexes per neighborhood.' },
      { label: 'SCREEN MODULE 3', title: 'Mobile Vendor Flow', description: 'Compact screens for managing or rerouting client walkin/call cancellations or manual slot overrides.' }
    ],
    impact: 'B2B workflows require extreme modularity. Simplifying booking grids into standard drag-to-reserve timelines eliminated training friction for turf operators.',
    liveProjectLink: '#'
  }
];
