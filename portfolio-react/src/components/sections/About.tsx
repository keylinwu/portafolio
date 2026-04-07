import { motion } from 'framer-motion'
import { profile } from '../../data/portfolio'
import { useTheme } from '../../context/ThemeContext'
import { AnimatedSection } from '../common/AnimatedSection'

export function About() {
  const { vibe } = useTheme()

  const sectionTitle = vibe === 'developer' ? '## about_me' : vibe === 'interesting' ? 'A little about me' : vibe === 'premium' ? 'About' : 'About Me'

  return (
    <section id="about" className="py-24 md:py-36 px-8 md:px-16 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center"
            style={{ color: 'var(--text)' }}
          >
            {vibe === 'developer' ? (
              <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>
                {sectionTitle}
              </span>
            ) : (
              sectionTitle
            )}
          </h2>
        </AnimatedSection>

        <div className="grid gap-10 md:gap-16 items-center md:grid-cols-2">
          {/* Anime illustration */}
          <AnimatedSection delay={0.1}>
            <motion.div
              className={`relative overflow-hidden ${
                vibe === 'interesting' ? 'rounded-3xl rotate-[-2deg]' :
                vibe === 'premium' ? '' :
                vibe === 'developer' ? 'rounded-lg crt-overlay' :
                'rounded-2xl'
              }`}
              whileHover={
                vibe === 'interesting' ? { rotate: 0, scale: 1.03 } :
                vibe === 'premium' ? { scale: 1.01 } :
                { scale: 1.02 }
              }
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/anime-cr.png`}
                alt="Keylin coding in Costa Rica mountains"
                className="w-full"
                style={{
                  borderRadius: vibe === 'premium' ? '0' : undefined,
                }}
              />
              {/* Gradient fade on bottom for premium */}
              {vibe === 'premium' && (
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)' }}
                />
              )}
              {vibe === 'interesting' && (
                <motion.div
                  className="absolute -bottom-2 -right-2 text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🌴
                </motion.div>
              )}
            </motion.div>
          </AnimatedSection>

          {/* Bio text */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {vibe === 'developer' ? (
                <div
                  className="rounded-lg p-6 card-shine"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <p className="text-xs mb-3" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>
                    {'// bio.md'}
                  </p>
                  {profile.bio.split('\n\n').map((p, i) => (
                    <p
                      key={i}
                      className="text-sm md:text-base mb-4 last:mb-0 leading-relaxed"
                      style={{ color: 'var(--text)', fontFamily: 'var(--font-body)' }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ) : (
                profile.bio.split('\n\n').map((p, i) => (
                  <motion.p
                    key={i}
                    className={`leading-relaxed ${
                      vibe === 'premium' ? 'text-base md:text-lg' : 'text-sm md:text-base'
                    }`}
                    style={{ color: i === 0 ? 'var(--text)' : 'var(--text-muted)' }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  >
                    {p}
                  </motion.p>
                ))
              )}

              {vibe === 'interesting' && (
                <motion.div
                  className="flex flex-wrap gap-2 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {['Flutter', 'iOS', 'Costa Rica', 'Cats', 'Anime', 'Coffee'].map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-4 py-2 rounded-full text-xs font-medium cursor-default"
                      style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text)',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.15, rotate: Math.random() * 8 - 4, y: -4 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
