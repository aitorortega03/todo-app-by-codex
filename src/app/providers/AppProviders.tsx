import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '../../hooks/useTheme.tsx'

export function AppProviders({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>
}
