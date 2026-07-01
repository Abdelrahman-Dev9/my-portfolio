import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProjectCard from '@/components/ui/ProjectCard'
import { Project } from '@/data/projects'

const project: Project = {
  id: 'shop',
  name: 'Shop',
  tagline: 'Full-Stack E-Commerce Mobile App',
  description: 'Cross-platform e-commerce app for iOS and Android.',
  category: 'mobile',
  techStack: ['Expo', 'React Native', 'TypeScript'],
  githubUrl: 'https://github.com/Abdelrahman-Dev9/full-stack-e-commerce-app',
  demoVideo: 'https://drive.google.com/file/d/10f-nCUS6BLPxO8wBPOpOe5RLjCqYeM3k/view',
  thumbnail: 'https://drive.google.com/thumbnail?id=10f-nCUS6BLPxO8wBPOpOe5RLjCqYeM3k&sz=w1280',
}

const projectWithLive: Project = {
  ...project,
  id: 'furniro',
  name: 'Furniro',
  liveUrl: 'https://furniroapp.vercel.app',
}

const projectNoThumb: Project = {
  ...project,
  id: 'todo-app',
  name: 'Todo App',
  thumbnail: null,
  demoVideo: null,
}

describe('ProjectCard', () => {
  it('renders project name', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText('Shop')).toBeInTheDocument()
  })

  it('renders project description', () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText(project.description)).toBeInTheDocument()
  })

  it('renders all tech stack tags', () => {
    render(<ProjectCard project={project} />)
    for (const tech of project.techStack) {
      expect(screen.getByText(tech)).toBeInTheDocument()
    }
  })

  it('renders the GitHub link', () => {
    render(<ProjectCard project={project} />)
    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', project.githubUrl)
  })

  it('renders Live link when liveUrl is provided', () => {
    render(<ProjectCard project={projectWithLive} />)
    const link = screen.getByRole('link', { name: /live/i })
    expect(link).toHaveAttribute('href', projectWithLive.liveUrl)
  })

  it('does not render Live link when liveUrl is absent', () => {
    render(<ProjectCard project={project} />)
    expect(screen.queryByRole('link', { name: /live/i })).toBeNull()
  })

  it('renders thumbnail img when thumbnail is provided', () => {
    render(<ProjectCard project={project} />)
    const img = screen.getByRole('img', { name: project.name })
    expect(img).toHaveAttribute('src', project.thumbnail)
  })

  it('does not render thumbnail img when thumbnail is null', () => {
    render(<ProjectCard project={projectNoThumb} />)
    expect(screen.queryByRole('img')).toBeNull()
  })

  it('opens the VideoModal when thumbnail is clicked', () => {
    render(<ProjectCard project={project} />)
    const thumbnail = screen.getByRole('img', { name: project.name }).closest('div')!
    fireEvent.click(thumbnail)
    expect(screen.getByText(project.tagline)).toBeInTheDocument()
  })
})
