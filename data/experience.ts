export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 'freelance',
    role: 'React Native & Full-Stack Developer',
    company: 'Self-Employed',
    type: 'Freelance · Remote',
    period: '2023 – Present',
    bullets: [
      'Independently designed, developed, and shipped 15+ mobile and web applications across healthcare, e-commerce, fitness, and productivity domains using React Native (Expo), Next.js, and NestJS.',
      'Built and deployed full-stack applications with Express.js and NestJS backends connected to PostgreSQL databases via Prisma ORM, handling end-to-end development from API design to mobile UI.',
      'Integrated third-party services including Supabase, Clerk Auth, map SDKs, and push notification APIs across multiple production-grade projects.',
      'Applied agile development practices — iterative builds, component-driven architecture, and version control with Git/GitHub — consistently delivering clean, maintainable TypeScript codebases.',
      'Deployed and maintained live applications on Vercel, managing environment configuration, build pipelines, and production deployments for multiple projects simultaneously.',
    ],
  },
];
