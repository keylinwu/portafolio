import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { navItems } from '../../data/portfolio'
import { useTheme } from '../../context/ThemeContext'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()
  const { mode, toggleMode } = useTheme()

  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20])
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href)
        if (!el) return { id: item.href.slice(1), top: 0 }
        return { id: item.href.slice(1), top: el.getBoundingClientRect().top }
      })
      const current = sections.reduce((closest, section) => {
        return Math.abs(section.top - 100) < Math.abs(closest.top - 100) ? section : closest
      })
      setActiveSection(current.id)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-16 lg:px-24"
        style={{
          height: 'var(--nav-height)',
          backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          backgroundColor: useTransform(bgOpacity, (v) => {
            const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()
            return bg ? `color-mix(in srgb, ${bg} ${v * 100}%, transparent)` : `rgba(0,0,0,${v * 0.5})`
          }),
          borderBottom: '1px solid var(--border)',
        }}
      >
        <motion.a
          href="#home"
          className="text-lg font-bold no-underline"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}
          whileHover={{ scale: 1.05 }}
        >
          K.W
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative text-sm no-underline transition-colors py-1"
              style={{
                fontFamily: 'var(--font-body)',
                color: activeSection === item.href.slice(1) ? 'var(--accent)' : 'var(--text-muted)',
              }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: 'var(--accent)' }}
                  layoutId="nav-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}

          {/* Dark/Light mode toggle */}
          <motion.button
            onClick={toggleMode}
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text)',
              fontSize: '1.1rem',
            }}
            title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            <motion.span
              key={mode}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              {mode === 'light' ? '🌙' : '☀️'}
            </motion.span>
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
        >
          <motion.span
            className="block w-6 h-0.5 rounded"
            style={{ background: 'var(--text)' }}
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-6 h-0.5 rounded"
            style={{ background: 'var(--text)' }}
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block w-6 h-0.5 rounded"
            style={{ background: 'var(--text)' }}
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <motion.div
        className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 md:hidden"
        initial={false}
        animate={isMenuOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }}
        style={{ background: 'var(--bg)' }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium no-underline"
            style={{
              fontFamily: 'var(--font-heading)',
              color: activeSection === item.href.slice(1) ? 'var(--accent)' : 'var(--text)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isMenuOpen ? { opacity: 1, y: 0, transition: { delay: i * 0.08 } } : { opacity: 0, y: 20 }}
            whileHover={{ color: 'var(--accent)', x: 8 }}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>
    </>
  )
}
