import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium UI Kit Bundle',
    description: 'Complete collection of modern UI components and templates for web and mobile applications. Includes 500+ components in Figma and code.',
    price: 89.99,
    category: 'UI Kits',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    downloadUrl: '/downloads/ui-kit-bundle.zip',
    fileSize: '245 MB',
    rating: 4.9,
    reviews: 342,
    tags: ['UI', 'Design', 'Components', 'Figma'],
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'React Developer Masterclass',
    description: 'Comprehensive video course covering advanced React patterns, hooks, performance optimization, and real-world project development.',
    price: 149.99,
    category: 'Courses',
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg',
    downloadUrl: '/downloads/react-masterclass.zip',
    fileSize: '4.2 GB',
    rating: 4.8,
    reviews: 1243,
    tags: ['React', 'JavaScript', 'Development', 'Programming'],
    createdAt: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    title: 'Professional Logo Templates',
    description: 'Collection of 100 professional logo templates in vector format. Perfect for startups, agencies, and personal branding projects.',
    price: 39.99,
    category: 'Graphics',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    downloadUrl: '/downloads/logo-templates.zip',
    fileSize: '156 MB',
    rating: 4.7,
    reviews: 876,
    tags: ['Logo', 'Branding', 'Vector', 'Design'],
    createdAt: '2024-01-08T09:15:00Z'
  },
  {
    id: '4',
    title: 'E-commerce Website Template',
    description: 'Modern, responsive e-commerce template built with React and Tailwind CSS. Includes product pages, cart, checkout, and admin panel.',
    price: 199.99,
    category: 'Templates',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    downloadUrl: '/downloads/ecommerce-template.zip',
    fileSize: '89 MB',
    rating: 4.9,
    reviews: 567,
    tags: ['Template', 'E-commerce', 'React', 'Responsive'],
    createdAt: '2024-01-05T16:45:00Z'
  },
  {
    id: '5',
    title: 'Mobile App Design System',
    description: 'Complete design system for mobile applications including color palettes, typography, icons, and component library for iOS and Android.',
    price: 79.99,
    category: 'UI Kits',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    downloadUrl: '/downloads/mobile-design-system.zip',
    fileSize: '178 MB',
    rating: 4.8,
    reviews: 654,
    tags: ['Mobile', 'Design System', 'iOS', 'Android'],
    createdAt: '2024-01-03T11:20:00Z'
  },
  {
    id: '6',
    title: 'Photography Lightroom Presets',
    description: 'Professional collection of 50 Lightroom presets for portrait, landscape, and street photography. Instant photo enhancement.',
    price: 29.99,
    category: 'Photography',
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
    downloadUrl: '/downloads/lightroom-presets.zip',
    fileSize: '45 MB',
    rating: 4.6,
    reviews: 1089,
    tags: ['Photography', 'Lightroom', 'Presets', 'Editing'],
    createdAt: '2024-01-01T08:00:00Z'
  },
  {
    id: '7',
    title: 'JavaScript Algorithms Course',
    description: 'Master data structures and algorithms with JavaScript. Includes video tutorials, code examples, and practice problems.',
    price: 119.99,
    category: 'Courses',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    downloadUrl: '/downloads/js-algorithms-course.zip',
    fileSize: '2.8 GB',
    rating: 4.9,
    reviews: 892,
    tags: ['JavaScript', 'Algorithms', 'Programming', 'Computer Science'],
    createdAt: '2023-12-28T13:10:00Z'
  },
  {
    id: '8',
    title: 'Social Media Graphics Pack',
    description: 'Ready-to-use social media templates for Instagram, Facebook, Twitter, and LinkedIn. Includes stories, posts, and cover designs.',
    price: 49.99,
    category: 'Graphics',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
    downloadUrl: '/downloads/social-media-pack.zip',
    fileSize: '203 MB',
    rating: 4.5,
    reviews: 743,
    tags: ['Social Media', 'Templates', 'Instagram', 'Marketing'],
    createdAt: '2023-12-25T15:30:00Z'
  }
];

export const categories = [
  'All',
  'UI Kits',
  'Courses',
  'Graphics',
  'Templates',
  'Photography'
];