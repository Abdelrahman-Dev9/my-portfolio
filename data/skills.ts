export interface SkillCategory {
  label: string;
  emoji: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Mobile Development',
    emoji: '📱',
    skills: ['React Native', 'Expo', 'NativeWind', 'React Navigation', 'Expo Router'],
  },
  {
    label: 'Web Development',
    emoji: '🌐',
    skills: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    label: 'Languages',
    emoji: '💻',
    skills: ['TypeScript', 'JavaScript (ES6+)'],
  },
  {
    label: 'State Management',
    emoji: '🔄',
    skills: ['Redux Toolkit', 'RTK Query', 'Context API'],
  },
  {
    label: 'Backend & APIs',
    emoji: '⚙️',
    skills: ['Node.js', 'Express.js', 'NestJS', 'RESTful API Design'],
  },
  {
    label: 'Database & ORM',
    emoji: '🗄️',
    skills: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Supabase'],
  },
  {
    label: 'Auth & Cloud',
    emoji: '☁️',
    skills: ['JWT', 'Clerk Auth', 'Vercel', 'Supabase'],
  },
  {
    label: 'Forms & Validation',
    emoji: '✅',
    skills: ['React Hook Form', 'Zod'],
  },
  {
    label: 'Developer Tools',
    emoji: '🛠️',
    skills: ['Git', 'GitHub', 'Bun', 'ESLint', 'Prettier'],
  },
];
