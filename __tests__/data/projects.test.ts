import { describe, it, expect } from 'vitest'
import { projects, ProjectCategory } from '@/data/projects'

const VALID_CATEGORIES: ProjectCategory[] = ['mobile', 'web', 'backend']

describe('projects data', () => {
  it('has at least one project in each category', () => {
    for (const cat of VALID_CATEGORIES) {
      expect(projects.some((p) => p.category === cat)).toBe(true)
    }
  })

  it('every project has a non-empty id, name, tagline and description', () => {
    for (const p of projects) {
      expect(p.id.trim()).toBeTruthy()
      expect(p.name.trim()).toBeTruthy()
      expect(p.tagline.trim()).toBeTruthy()
      expect(p.description.trim()).toBeTruthy()
    }
  })

  it('every project has a valid category', () => {
    for (const p of projects) {
      expect(VALID_CATEGORIES).toContain(p.category)
    }
  })

  it('every project has a githubUrl', () => {
    for (const p of projects) {
      expect(p.githubUrl).toBeTruthy()
    }
  })

  it('mobile and web projects with a demoVideo also have a thumbnail', () => {
    const nonBackend = projects.filter((p) => p.category !== 'backend')
    for (const p of nonBackend) {
      if (p.demoVideo) {
        expect(p.thumbnail, `${p.name} has demoVideo but no thumbnail`).toBeTruthy()
      }
    }
  })

  it('backend projects have no demoVideo', () => {
    const backend = projects.filter((p) => p.category === 'backend')
    for (const p of backend) {
      expect(p.demoVideo, `${p.name} should not have a demoVideo`).toBeNull()
    }
  })

  it('project ids are unique', () => {
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
