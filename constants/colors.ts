// Single source of truth for all colors used in JS/TSX.
// When changing a color here, also update the matching CSS variable in app/globals.css.
export const COLORS = {
  bg: '#080808',
  surface: '#0f0f0f',
  surfaceHover: '#141414',
  border: '#1e1e1e',
  borderHover: '#2a2a2a',
  accent: '#00A8FF',
  accentHover: '#33BBFF',
  accentGlow: 'rgba(0, 168, 255, 0.12)',
  accentGlowStrong: 'rgba(0, 168, 255, 0.28)',
  textPrimary: '#FFFFFF',
  textSecondary: '#9CA3AF',
  textMuted: '#4B5563',
  navBg: 'rgba(8, 8, 8, 0.88)',
} as const;
