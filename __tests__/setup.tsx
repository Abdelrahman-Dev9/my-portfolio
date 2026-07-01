import '@testing-library/jest-dom'
import { vi } from 'vitest'

vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: new Proxy({}, {
    get: (_target, tag: string) =>
      ({ children, ...props }: Record<string, unknown> & { children?: React.ReactNode }) => {
        const { whileHover: _wh, initial: _i, animate: _a, exit: _e, transition: _t, ...rest } = props as Record<string, unknown>
        const Tag = tag as keyof JSX.IntrinsicElements
        return <Tag {...rest}>{children}</Tag>
      },
  }),
}))
