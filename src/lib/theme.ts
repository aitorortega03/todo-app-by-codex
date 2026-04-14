import type { Theme } from '../types/theme.ts'

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

export function getSystemTheme(): Theme {
  if (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }

  return 'light'
}
