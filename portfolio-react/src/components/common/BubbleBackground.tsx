import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useTheme } from '../../context/ThemeContext'

interface Bubble {
  id: number
  size: number
  x: number
  delay: number
  duration: number
  opacity: number
}

export function BubbleBackground() {
  const { vibe } = useTheme()

  const bubbles = useMemo(() => {
    const count = vibe === 'professional' ? 8 : vibe === 'interesting' ? 16 : vibe === 'premium' ? 10 : 12
    return Array.from({ length: count }, (_, i): Bubble => ({
      id: i,
      size: Math.random() * 100 + 20,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 12 + 10,
      opacity: Math.random() * 0.1 + 0.03,
    }))
  }, [vibe])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {bubbles.map((b) => (
        <motion.div
          key={`${vibe}-${b.id}`}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            opacity: b.opacity,
          }}
          initial={{ y: '110vh' }}
          animate={{ y: '-10vh' }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
