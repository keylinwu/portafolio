import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Vibe, Mode } from '../data/portfolio'
export type { Vibe, Mode }

interface ThemeContextType {
  vibe: Vibe
  mode: Mode
  setVibe: (vibe: Vibe) => void
  setMode: (mode: Mode) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [vibe, setVibeState] = useState<Vibe>(() => {
    const saved = localStorage.getItem('portfolio-vibe')
    return (saved as Vibe) || 'professional'
  })

  const [mode, setModeState] = useState<Mode>(() => {
    const saved = localStorage.getItem('portfolio-mode')
    if (saved) return saved as Mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const setVibe = (v: Vibe) => {
    setVibeState(v)
    localStorage.setItem('portfolio-vibe', v)
  }

  const setMode = (m: Mode) => {
    setModeState(m)
    localStorage.setItem('portfolio-mode', m)
  }

  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-vibe', vibe)
    document.documentElement.setAttribute('data-mode', mode)
    document.documentElement.classList.toggle('dark', mode === 'dark')
  }, [vibe, mode])

  return (
    <ThemeContext.Provider value={{ vibe, mode, setVibe, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
