import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react'
import { readStoredTheme, writeStoredTheme } from '../lib/storage.ts'
import { getSystemTheme } from '../lib/theme.ts'
import type { Theme } from '../types/theme.ts'

interface ThemeContextValue {
  setTheme: (theme: Theme) => void
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getInitialTheme(): Theme {
  return readStoredTheme() ?? getSystemTheme()
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.body.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    writeStoredTheme(theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ setTheme, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider.')
  }

  return context
}
