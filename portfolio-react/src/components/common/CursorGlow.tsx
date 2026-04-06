import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'

export function CursorGlow() {
  const { mode } = useTheme()
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed pointer-events-none hidden md:block"
      style={{
        x: springX,
        y: springY,
        width: 400,
        height: 400,
        marginLeft: -200,
        marginTop: -200,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${mode === 'dark' ? 'rgba(var(--accent-rgb, 6,148,148), 0.07)' : 'rgba(var(--accent-rgb, 6,148,148), 0.04)'} 0%, transparent 70%)`,
        zIndex: 1,
        filter: 'blur(2px)',
      }}
    />
  )
}
