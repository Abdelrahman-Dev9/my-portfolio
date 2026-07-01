import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import VideoModal from '@/components/ui/VideoModal'
import { Project } from '@/data/projects'

const mobileProject: Project = {
  id: 'shop',
  name: 'Shop',
  tagline: 'Full-Stack E-Commerce Mobile App',
  description: 'Test description',
  category: 'mobile',
  techStack: ['React Native'],
  githubUrl: 'https://github.com/Abdelrahman-Dev9/full-stack-e-commerce-app',
  demoVideo: 'https://drive.google.com/file/d/10f-nCUS6BLPxO8wBPOpOe5RLjCqYeM3k/view',
  thumbnail: 'https://drive.google.com/thumbnail?id=10f-nCUS6BLPxO8wBPOpOe5RLjCqYeM3k&sz=w1280',
}

const backendProject: Project = {
  id: 'healr-backend',
  name: 'Healr Backend',
  tagline: 'NestJS REST API',
  description: 'Test description',
  category: 'backend',
  techStack: ['NestJS'],
  githubUrl: 'https://github.com/Abdelrahman-Dev9/nestjs-healr-app',
  demoVideo: null,
  thumbnail: null,
}

describe('VideoModal', () => {
  it('does not render when closed', () => {
    render(<VideoModal open={false} onClose={vi.fn()} project={mobileProject} />)
    expect(screen.queryByText('Shop')).toBeNull()
  })

  it('renders project name and tagline when open', () => {
    render(<VideoModal open onClose={vi.fn()} project={mobileProject} />)
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Full-Stack E-Commerce Mobile App')).toBeInTheDocument()
  })

  it('renders an iframe for a mobile project with a Drive video', () => {
    render(<VideoModal open onClose={vi.fn()} project={mobileProject} />)
    const iframe = document.querySelector('iframe')
    expect(iframe).toBeTruthy()
    expect(iframe?.src).toContain('drive.google.com')
    expect(iframe?.src).toContain('preview')
  })

  it('shows "No demo available" for backend projects', () => {
    render(<VideoModal open onClose={vi.fn()} project={backendProject} />)
    expect(screen.getByText('No demo available')).toBeInTheDocument()
  })

  it('shows View Repository link for backend projects', () => {
    render(<VideoModal open onClose={vi.fn()} project={backendProject} />)
    const repoLink = screen.getByRole('link', { name: /view repository/i })
    expect(repoLink).toHaveAttribute('href', backendProject.githubUrl)
  })

  it('shows All Repositories link for backend projects', () => {
    render(<VideoModal open onClose={vi.fn()} project={backendProject} />)
    const allLink = screen.getByRole('link', { name: /all repositories/i })
    expect(allLink).toHaveAttribute('href', 'https://github.com/Abdelrahman-Dev9')
  })

  it('calls onClose when the close button is clicked', () => {
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} project={mobileProject} />)
    fireEvent.click(document.querySelector('button')!)
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when Escape is pressed', () => {
    const onClose = vi.fn()
    render(<VideoModal open onClose={onClose} project={mobileProject} />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledOnce()
  })
})
