import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../../data/portfolio'
import { useTheme } from '../../context/ThemeContext'

function StaggeredName({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={className} style={style}>
      {name.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.04,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const { vibe } = useTheme()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 80])

  if (vibe === 'interesting') {
    return (
      <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/anime-cr.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div className="relative z-10 text-center max-w-3xl pt-20" style={{ opacity: heroOpacity, y: heroY }}>
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.2 }}
          >
            <motion.span
              className="text-5xl md:text-7xl inline-block"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 2.5, ease: 'easeInOut' }}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
            >
              Hey, I'm{' '}
              <StaggeredName
                name={profile.name.split(' ')[0] + '!'}
                style={{ color: 'var(--accent)' }}
              />
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-4"
            style={{ color: 'var(--text)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            className="text-base md:text-lg mb-8"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="magnetic-btn px-8 py-4 rounded-full text-base font-bold no-underline"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              See my work ✨
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="magnetic-btn glass px-8 py-4 rounded-full text-base font-bold no-underline"
              style={{ color: 'var(--text)' }}
            >
              Get to know me
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6, ease: 'easeOut' }}
          >
            <motion.img
              src={`${import.meta.env.BASE_URL}images/anime-1.png`}
              alt=""
              className="w-24 md:w-32 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.img
              src={`${import.meta.env.BASE_URL}images/anime-2.png`}
              alt=""
              className="w-24 md:w-32 rounded-2xl shadow-lg -mt-4"
              whileHover={{ scale: 1.1, rotate: 5, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
        </motion.div>
      </section>
    )
  }

  // Professional (default)
  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div className="text-center max-w-3xl mx-auto pt-20" style={{ opacity: heroOpacity, y: heroY }}>
        <motion.div
          className="mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-8"
          style={{ boxShadow: '0 0 0 4px var(--accent)' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 0 6px var(--accent), 0 0 30px rgba(var(--accent-rgb), 0.3)' }}
        >
          <img src={`${import.meta.env.BASE_URL}images/profile.jpeg`} alt={profile.name} className="w-full h-full object-cover" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text)' }}>
          <StaggeredName name={profile.name} />
        </h1>

        <motion.div
          className="w-16 h-1 mx-auto mb-6 rounded-full"
          style={{ background: 'var(--accent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
        />

        <motion.p
          className="text-xl md:text-2xl mb-3"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {profile.title}
        </motion.p>

        <motion.p
          className="text-base md:text-lg mb-8"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          {profile.tagline} {profile.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic-btn px-8 py-3 rounded-lg text-sm font-medium no-underline"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic-btn px-8 py-3 rounded-lg text-sm font-medium no-underline"
            style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
