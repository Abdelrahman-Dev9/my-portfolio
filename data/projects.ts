export type ProjectCategory = 'mobile' | 'web' | 'backend';

// Default demo shown in the modal for any project where demoVideo is null.
// Replace this with your own YouTube URL when you're ready.
export const DEFAULT_DEMO_VIDEO = 'https://www.youtube.com/watch?v=MwS62kTABcQ';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  demoVideo: string | null;
  thumbnail: string | null;
}

export const projects: Project[] = [
  // ── Mobile ────────────────────────────────────────────────────────────────
  {
    id: 'shop',
    name: 'Shop',
    tagline: 'Full-Stack E-Commerce Mobile App',
    description:
      'Cross-platform e-commerce app for iOS and Android with product catalog, shopping cart, authentication, order management, and user profiles.',
    category: 'mobile',
    techStack: ['Expo', 'React Native', 'TypeScript', 'Express.js', 'PostgreSQL', 'Prisma ORM'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/full-stack-e-commerce-app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'gym',
    name: 'GYM',
    tagline: 'Full-Stack Fitness Tracking App',
    description:
      'Full-stack fitness tracking app built as a monorepo with Bun, delivering cross-platform iOS and Android support from a single shared codebase.',
    category: 'mobile',
    techStack: ['Expo', 'React Native', 'TypeScript', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'Bun'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/full-stack-expo-gymm-app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'healr',
    name: 'Healr',
    tagline: 'Healthcare Mobile App',
    description:
      'Healthcare platform with an AI-powered symptom chatbot, doctor search, appointment booking, push notification reminders, and an interactive clinic map.',
    category: 'mobile',
    techStack: ['Expo', 'React Native', 'TypeScript', 'Maps SDK', 'Push Notifications'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/expo-healr-app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'uber-clone',
    name: 'Uber Clone',
    tagline: 'Ride-Hailing App',
    description:
      'Full-featured ride-hailing app with live driver tracking, real-time route visualization via map SDK, fare estimation, and seamless iOS/Android navigation.',
    category: 'mobile',
    techStack: ['Expo', 'React Native', 'TypeScript', 'Maps SDK'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/expo-uber-app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'food',
    name: 'Food',
    tagline: 'Food Delivery App',
    description:
      'Cross-platform food delivery app with real-time search, cart management, and profile editing — consistent UI across both iOS and Android.',
    category: 'mobile',
    techStack: ['Expo', 'React Native', 'TypeScript', 'NativeWind'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/expo-food-delivery',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'todo-app',
    name: 'Todo App',
    tagline: 'Supabase-Connected Mobile App',
    description:
      'Real-time task management app connected to Supabase with dark/light theme support and NativeWind styling, demonstrating live database integration.',
    category: 'mobile',
    techStack: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'NativeWind'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/expo-todo-app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'boarding-pass',
    name: 'Boarding Pass',
    tagline: 'Flight Pass Manager',
    description:
      'Boarding pass management app with a production-quality UI displaying passenger info, flight number, gate, seat, and departure time.',
    category: 'mobile',
    techStack: ['Expo', 'React Native', 'TypeScript'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/Emirates-Boarding-Pass-App',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'sanay3y',
    name: 'Sanay3y',
    tagline: 'Local Services Marketplace',
    description:
      'Marketplace connecting users with verified service providers (electricians, plumbers, painters) with integrated booking, real-time messaging, and reviews.',
    category: 'mobile',
    techStack: ['Expo', 'React Native', 'TypeScript', 'NativeWind'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/nestjs-sanay3y-app',
    demoVideo: null,
    thumbnail: null,
  },

  // ── Web ───────────────────────────────────────────────────────────────────
  {
    id: 'bookified',
    name: 'Bookified',
    tagline: 'AI-Powered Book Chat App',
    description:
      'Full-stack AI web app where users upload PDFs and hold voice-enabled conversations with their books, integrating AI API, Clerk Auth, and Supabase.',
    category: 'web',
    techStack: ['Next.js 14', 'TypeScript', 'Clerk Auth', 'Supabase', 'shadcn/ui'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/NextJs-Bookified-FullStack-app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'furniro',
    name: 'Furniro',
    tagline: 'Furniture E-Commerce Web App',
    description:
      'Furniture e-commerce web app with product browsing, filtering, and fully responsive design across all screen sizes. Live on Vercel.',
    category: 'web',
    techStack: ['Next.js', 'TypeScript', 'shadcn/ui', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/Furniro',
    liveUrl: 'https://furniroapp.vercel.app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'shoply',
    name: 'Shoply',
    tagline: 'React E-Commerce Frontend',
    description:
      'Feature-rich e-commerce frontend with product browsing, cart, wishlist, and an admin dashboard — deployed on Vercel.',
    category: 'web',
    techStack: ['React', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/react-shoply-app',
    liveUrl: 'https://react-shoply-app.vercel.app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'fashion-app',
    name: 'FashionApp',
    tagline: 'React Fashion Store',
    description:
      'Responsive fashion e-commerce app with component-driven architecture and clean UI design patterns.',
    category: 'web',
    techStack: ['React', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/FashionApp',
    demoVideo: null,
    thumbnail: null,
  },

  // ── Backend ───────────────────────────────────────────────────────────────
  {
    id: 'healr-backend',
    name: 'Healr Backend',
    tagline: 'NestJS REST API',
    description:
      'Production-ready NestJS REST API for the Healr platform using modular service/controller architecture with Prisma ORM and PostgreSQL. Live on Vercel.',
    category: 'backend',
    techStack: ['NestJS', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Vercel'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/nestjs-healr-app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'nestjs-auth',
    name: 'NestJS Auth System',
    tagline: 'JWT Authentication API',
    description:
      'Secure authentication API with JWT-based registration, login, and protected route guards using NestJS modular architecture.',
    category: 'backend',
    techStack: ['NestJS', 'TypeScript', 'Prisma ORM', 'JWT'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/nestjs-auth-app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'express-apis',
    name: 'Express REST APIs',
    tagline: 'Books, Notes & Todo APIs',
    description:
      'Three independent RESTful API backends with full CRUD operations, demonstrating consistent REST design patterns and TypeScript type safety.',
    category: 'backend',
    techStack: ['Express.js', 'TypeScript'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/book-library-app',
    demoVideo: null,
    thumbnail: null,
  },
  {
    id: 'sanay3y-backend',
    name: 'Sanay3y Backend',
    tagline: 'NestJS Marketplace API',
    description:
      'RESTful backend marketplace with JWT auth, bcrypt password hashing, transactional email via Nodemailer, and automated tests with Jest and Supertest. Live on Vercel.',
    category: 'backend',
    techStack: ['NestJS', 'TypeScript', 'Prisma ORM', 'JWT', 'Nodemailer', 'Jest'],
    githubUrl: 'https://github.com/Abdelrahman-Dev9/nestjs-sanay3y-app',
    demoVideo: null,
    thumbnail: null,
  },
];
