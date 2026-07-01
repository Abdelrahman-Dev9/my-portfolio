import { describe, it, expect } from 'vitest'
import { getYouTubeEmbedUrl, getGoogleDriveEmbedUrl } from '@/lib/videoUtils'

describe('getYouTubeEmbedUrl', () => {
  it('converts a standard watch URL', () => {
    expect(getYouTubeEmbedUrl('https://www.youtube.com/watch?v=MwS62kTABcQ'))
      .toBe('https://www.youtube.com/embed/MwS62kTABcQ?autoplay=1&rel=0')
  })

  it('converts a youtu.be short URL', () => {
    expect(getYouTubeEmbedUrl('https://youtu.be/MwS62kTABcQ'))
      .toBe('https://www.youtube.com/embed/MwS62kTABcQ?autoplay=1&rel=0')
  })

  it('converts an already-embedded URL', () => {
    expect(getYouTubeEmbedUrl('https://www.youtube.com/embed/MwS62kTABcQ'))
      .toBe('https://www.youtube.com/embed/MwS62kTABcQ?autoplay=1&rel=0')
  })

  it('returns null for a Google Drive URL', () => {
    expect(getYouTubeEmbedUrl('https://drive.google.com/file/d/abc123/view')).toBeNull()
  })

  it('returns null for a random URL', () => {
    expect(getYouTubeEmbedUrl('https://example.com')).toBeNull()
  })
})

describe('getGoogleDriveEmbedUrl', () => {
  it('converts a /view share URL to /preview', () => {
    expect(getGoogleDriveEmbedUrl('https://drive.google.com/file/d/10f-nCUS6BLPxO8wBPOpOe5RLjCqYeM3k/view'))
      .toBe('https://drive.google.com/file/d/10f-nCUS6BLPxO8wBPOpOe5RLjCqYeM3k/preview')
  })

  it('handles URLs with extra query params', () => {
    expect(getGoogleDriveEmbedUrl('https://drive.google.com/file/d/abc123XYZ/view?usp=sharing'))
      .toBe('https://drive.google.com/file/d/abc123XYZ/preview')
  })

  it('returns null for a YouTube URL', () => {
    expect(getGoogleDriveEmbedUrl('https://www.youtube.com/watch?v=MwS62kTABcQ')).toBeNull()
  })

  it('returns null for a random URL', () => {
    expect(getGoogleDriveEmbedUrl('https://example.com')).toBeNull()
  })
})
