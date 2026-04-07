import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import type { Vibe } from '../../data/portfolio'

const vibes: { key: Vibe; label: string; emoji: string; color: string }[] = [
  { key: 'professional', label: 'Pro', emoji: '💼', color: '#069494' },
  { key: 'interesting', label: 'Fun', emoji: '✨', color: '#FF8243' },
]

export function ThemeSwitcher() {
  const { vibe, mode, setVibe, toggleMode } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="glass rounded-2xl p-3 flex flex-col gap-2"
            style={{ boxShadow: 'var(--shadow)' }}
          >
            {vibes.map((v) => (
              <motion.button
                key={v.key}
                onClick={() => setVibe(v.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all text-sm font-medium cursor-pointer"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: vibe === v.key ? 'var(--accent)' : 'transparent',
                  color: vibe === v.key ? 'var(--bg)' : 'var(--text)',
                  border: 'none',
                }}
              >
                <span>{v.emoji}</span>
                <span>{v.label}</span>
              </motion.button>
            ))}

            <div className="h-px w-full" style={{ background: 'var(--border)' }} />

            <motion.button
              onClick={toggleMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium cursor-pointer"
              style={{
                fontFamily: 'var(--font-body)',
                background: 'transparent',
                color: 'var(--text)',
                border: 'none',
              }}
            >
              <span>{mode === 'light' ? '🌙' : '☀️'}</span>
              <span>{mode === 'light' ? 'Dark' : 'Light'}</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="glass w-14 h-14 rounded-full flex items-center justify-center cursor-pointer text-xl"
        style={{
          boxShadow: 'var(--shadow)',
          border: 'none',
          color: 'var(--text)',
        }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        🎨
      </motion.button>
    </div>
  )
}
