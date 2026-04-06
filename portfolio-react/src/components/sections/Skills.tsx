import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'
import { useTheme } from '../../context/ThemeContext'
import { AnimatedSection } from '../common/AnimatedSection'

export function Skills() {
  const { vibe } = useTheme()

  const sectionTitle = vibe === 'developer' ? '## my_toolkit' : vibe === 'interesting' ? 'My Toolkit' : vibe === 'premium' ? 'Expertise' : 'Skills'

  return (
    <section id="skills" className="py-24 md:py-36 px-8 md:px-16 lg:px-24 relative" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center"
            style={{ color: vibe === 'developer' ? 'var(--accent)' : 'var(--text)' }}
          >
            {sectionTitle}
          </h2>
        </AnimatedSection>

        <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 0.08}>
              <motion.div
                className={`glass card-shine h-full ${vibe === 'developer' ? 'rounded-lg crt-overlay' : vibe === 'interesting' ? 'rounded-3xl' : vibe === 'premium' ? 'rounded-none' : 'rounded-2xl'} p-6`}
                whileHover={
                  vibe === 'interesting'
                    ? { scale: 1.05, rotate: i % 2 === 0 ? 2 : -2, y: -4 }
                    : { scale: 1.02, y: -6 }
                }
                transition={vibe === 'interesting' ? { type: 'spring', stiffness: 300 } : { duration: 0.3 }}
                style={{ boxShadow: 'var(--shadow)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <h3
                    className={`font-bold ${vibe === 'premium' ? 'text-xl' : 'text-lg'}`}
                    style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}
                  >
                    {vibe === 'developer' ? `> ${skill.name}` : skill.name}
                  </h3>
                </div>

                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  {skill.description}
                </p>

                {/* Skill level bar with glow */}
                <div className="relative">
                  <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                    <motion.div
                      className="h-full rounded-full skill-bar-glow"
                      style={{ background: `linear-gradient(90deg, var(--accent), var(--accent-secondary))` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                  {vibe === 'developer' && (
                    <motion.p
                      className="text-xs mt-2"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      [{skill.level}%] {'█'.repeat(Math.floor(skill.level / 10))}{'░'.repeat(10 - Math.floor(skill.level / 10))}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {vibe === 'interesting' && (
          <AnimatedSection delay={0.5} className="mt-12 flex justify-center">
            <motion.img
              src="/images/anime-2.png"
              alt=""
              className="w-32 md:w-48 rounded-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
