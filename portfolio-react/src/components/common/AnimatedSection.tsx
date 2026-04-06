import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'
import { useTheme, type Vibe } from '../../context/ThemeContext'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

const variants: Record<Vibe, Variants> = {
  professional: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  interesting: {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  premium: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  developer: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
}

const transitions: Record<Vibe, object> = {
  professional: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  interesting: { type: 'spring', stiffness: 100, damping: 12 },
  premium: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  developer: { duration: 0.4, ease: 'easeOut' },
}

export function AnimatedSection({ children, className = '', delay = 0 }: Props) {
  const { vibe } = useTheme()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants[vibe]}
      transition={{ ...transitions[vibe], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
