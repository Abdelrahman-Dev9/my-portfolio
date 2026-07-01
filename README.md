# Abdelrahman Mahmoud — Portfolio

Personal portfolio site for Abdelrahman Mahmoud Elnagar, React Native & Full-Stack Developer. Showcases 15+ cross-platform mobile and web projects with live video demos, categorized filtering, and a clean dark-theme UI.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Testing | [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) |
| Runtime | [Bun](https://bun.sh/) |

## Getting Started

### Prerequisites
- Bun v1.0+
- Node.js 18+

### Installation
```bash
git clone https://github.com/Abdelrahman-Dev9/portfolio
cd portfolio
bun install
bun run dev
# → http://localhost:3000
```

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router (layout, page, globals)
├── components/
│   ├── Navbar.tsx          # Fixed nav with active-section tracking
│   ├── sections/           # One file per page section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/                 # Shared, reusable UI components
│       ├── Icons.tsx        # All SVG icons in one place
│       ├── ProjectCard.tsx
│       ├── SectionTitle.tsx
│       └── VideoModal.tsx
├── constants/
│   └── colors.ts           # Single color palette for JS and CSS
├── data/                   # Static content — edit here to update portfolio
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── lib/
│   └── videoUtils.ts       # YouTube and Google Drive URL helpers
├── public/
│   ├── avatar.jpg          # Profile photo
│   └── resume.pdf          # CV (downloadable from Hero section)
└── __tests__/              # Vitest test suite (33 tests)
    ├── setup.tsx
    ├── lib/videoUtils.test.ts
    ├── data/projects.test.ts
    └── components/
        ├── VideoModal.test.tsx
        └── ProjectCard.test.tsx
```

## Available Scripts

| Script | Description |
|---|---|
| `bun run dev` | Start dev server at localhost:3000 |
| `bun run build` | Production build |
| `bun run start` | Serve production build |
| `bun run lint` | Run ESLint |
| `bun run test` | Run tests in watch mode |
| `bun run test:run` | Run tests once |
| `bun run test:coverage` | Run tests with coverage report |

## Sections

| # | Section | Description |
|---|---|---|
| 01 | About | Bio, stats, profile photo |
| 02 | Skills | Categorized tech chips with hover effects |
| 03 | Projects | Filterable grid (Mobile / Web / Backend) with video demos |
| 04 | Experience | Freelance timeline |
| 05 | Education | University degree and coursework |
| 06 | Contact | Email copy button, GitHub, LinkedIn links |

## Updating Content

All content lives in `data/` — no component changes needed for most updates:

- **Add a project** → `data/projects.ts`
- **Update skills** → `data/skills.ts`
- **Update experience** → `data/experience.ts`
- **Change colors** → `constants/colors.ts` and `app/globals.css`
- **Replace resume** → drop a new `resume.pdf` into `public/`
- **Replace photo** → drop a new `avatar.jpg` into `public/`

## Adding Video Demos

1. Upload to Google Drive, set sharing to "Anyone with the link"
2. Copy the file ID from `drive.google.com/file/d/FILE_ID/view`
3. Update `data/projects.ts`:

```ts
demoVideo: 'https://drive.google.com/file/d/FILE_ID/view',
thumbnail: 'https://drive.google.com/thumbnail?id=FILE_ID&sz=w1280',
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers a deploy automatically.
