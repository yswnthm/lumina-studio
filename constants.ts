import { PortfolioItem, ServiceItem, TestimonialItem } from './types';

export const CATEGORIES = ['All', 'Weddings', 'Portraits', 'Commercial', 'Editorial'];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'Udaipur Royal Wedding', category: 'Weddings', imageUrl: 'https://picsum.photos/800/600?random=1' },
  { id: 2, title: 'Mumbai Corporate Headshots', category: 'Portraits', imageUrl: 'https://picsum.photos/800/600?random=2' },
  { id: 3, title: 'Bangalore Tech Park', category: 'Commercial', imageUrl: 'https://picsum.photos/800/600?random=3' },
  { id: 4, title: 'Goa Beach Elopement', category: 'Weddings', imageUrl: 'https://picsum.photos/800/600?random=4' },
  { id: 5, title: 'Lakme Fashion Week', category: 'Editorial', imageUrl: 'https://picsum.photos/800/600?random=5' },
  { id: 6, title: 'Delhi Family Session', category: 'Portraits', imageUrl: 'https://picsum.photos/800/600?random=6' },
  { id: 7, title: 'Jaipur Product Launch', category: 'Commercial', imageUrl: 'https://picsum.photos/800/600?random=7' },
  { id: 8, title: 'Kerala Studio Series', category: 'Portraits', imageUrl: 'https://picsum.photos/800/600?random=8' },
  { id: 9, title: 'Ayurveda Lifestyle Brand', category: 'Commercial', imageUrl: 'https://picsum.photos/800/600?random=9' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Full-day coverage capturing authentic Indian traditions and timeless portraits.'
  },
  {
    id: 2,
    title: 'Portrait Sessions',
    description: 'Professional headshots, family portraits, and creative studio sessions.'
  },
  {
    id: 3,
    title: 'Commercial & Brand',
    description: 'Visual storytelling for brands, startups, and architectural projects.'
  },
  {
    id: 4,
    title: 'Editorial',
    description: 'High-end fashion and lifestyle photography for publications.'
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    text: "Lumina Studio captured our wedding day with such elegance. The photos feel timeless and authentic, capturing every ritual beautifully.",
    author: "Priya & Rahul",
    role: "Wedding Clients"
  },
  {
    id: 2,
    text: "Professional, efficient, and incredibly talented. They understood our brand vision immediately and delivered exceptional results for our startup.",
    author: "Vikram Malhotra",
    role: "Founder, TechFlow India"
  },
  {
    id: 3,
    text: "I've never felt so comfortable in front of a camera. The team has a calming presence that really shows in the final portraits.",
    author: "Ananya Iyer",
    role: "Portrait Client"
  }
];