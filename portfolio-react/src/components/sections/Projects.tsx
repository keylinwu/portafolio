import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects, type Project } from '../../data/portfolio'
import { useTheme, type Vibe } from '../../context/ThemeContext'
import { AnimatedSection } from '../common/AnimatedSection'

function TiltCard({ project, vibe, index }: { project: Project; vibe: Vibe; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useTransform(mouseY, [0, 1], [6, -6])
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6])
  const shine = useTransform(
    mouseX,
    [0, 0.5, 1],
    [
      'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
      'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)',
      'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
    ]
  )

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <AnimatedSection delay={index * 0.06}>
      <motion.div
        ref={cardRef}
        className={`glass h-full overflow-hidden cursor-default ${
          vibe === 'developer' ? 'rounded-lg crt-overlay' :
          vibe === 'interesting' ? 'rounded-3xl' :
          vibe === 'premium' ? 'rounded-none' :
          'rounded-2xl'
        }`}
        style={{
          boxShadow: 'var(--shadow)',
          rotateX: vibe !== 'interesting' ? rotateX : 0,
          rotateY: vibe !== 'interesting' ? rotateY : 0,
          transformPerspective: 800,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={
          vibe === 'interesting'
            ? { scale: 1.04, rotate: index % 2 === 0 ? 1 : -1 }
            : vibe === 'premium'
            ? { y: -8 }
            : {}
        }
        transition={
          vibe === 'interesting'
            ? { type: 'spring', stiffness: 300 }
            : { duration: 0.2 }
        }
      >
        {/* Mouse-following shine overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ background: shine, borderRadius: 'inherit' }}
        />

        {/* Color stripe top */}
        <motion.div
          className="h-1.5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
          style={{ background: project.color, transformOrigin: 'left' }}
        />

        <div className="p-6 relative">
          {vibe === 'developer' && (
            <p className="text-xs mb-2" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>
              {'>'} cat {project.name.toLowerCase().replace(/\s/g, '_')}.md
            </p>
          )}

          <h3
            className={`font-bold mb-1 ${vibe === 'premium' ? 'text-xl' : 'text-lg'}`}
            style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
          >
            {project.name}
          </h3>

          <p
            className="text-xs font-medium mb-3 uppercase tracking-wider"
            style={{ color: project.color }}
          >
            {project.company}
          </p>

          <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-3 py-1 font-medium ${
                  vibe === 'developer' ? 'rounded' :
                  vibe === 'interesting' ? 'rounded-full' :
                  'rounded-md'
                }`}
                style={{
                  background: vibe === 'developer'
                    ? 'var(--surface-hover)'
                    : `${project.color}15`,
                  color: vibe === 'developer' ? 'var(--accent)' : project.color,
                  border: vibe === 'developer' ? `1px solid var(--border)` : 'none',
                  fontFamily: vibe === 'developer' ? 'var(--font-heading)' : 'var(--font-body)',
                }}
              >
                {vibe === 'developer' ? `#${tag}` : tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

export function Projects() {
  const { vibe } = useTheme()

  const sectionTitle =
    vibe === 'developer' ? '## projects/' :
    vibe === 'interesting' ? 'Stuff I\'ve Built ✨' :
    vibe === 'premium' ? 'Selected Work' :
    'Projects'

  return (
    <section id="projects" className="py-24 md:py-36 px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center"
            style={{ color: vibe === 'developer' ? 'var(--accent)' : 'var(--text)' }}
          >
            {sectionTitle}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p
            className="mb-12 md:mb-16 max-w-2xl mx-auto text-center"
            style={{ color: 'var(--text-muted)' }}
          >
            {vibe === 'developer'
              ? '// A selection of projects I\'ve shipped'
              : vibe === 'interesting'
              ? 'From fintech to music to gaming — I love building things that matter.'
              : vibe === 'premium'
              ? 'A curated collection of meaningful work.'
              : '8+ years of building apps for companies and users I believe in.'}
          </p>
        </AnimatedSection>

        <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <TiltCard key={project.name} project={project} vibe={vibe} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
