import { motion } from 'framer-motion'
import { profile } from '../../data/portfolio'
import { useTheme } from '../../context/ThemeContext'
import { AnimatedSection } from '../common/AnimatedSection'

export function Contact() {
  const { vibe, mode } = useTheme()

  const title =
    vibe === 'developer' ? '## contact --send' :
    vibe === 'interesting' ? "Let's Build Something Cool!" :
    vibe === 'premium' ? 'Get In Touch' :
    'Contact'

  const subtitle =
    vibe === 'developer' ? '// Ping me anytime. I read all my messages.' :
    vibe === 'interesting' ? "I'm always up for a chat about apps, anime, or anything in between." :
    vibe === 'premium' ? 'Available for select opportunities and collaborations.' :
    "I'd love to hear from you. Let's connect!"

  return (
    <section id="contact" className="py-24 md:py-36 px-8 md:px-16 lg:px-24 relative" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: vibe === 'developer' ? 'var(--accent)' : 'var(--text)' }}
          >
            {title}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-base md:text-lg mb-10" style={{ color: 'var(--text-muted)' }}>
            {subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`magnetic-btn px-8 py-4 font-medium no-underline text-base ${
                vibe === 'interesting' ? 'rounded-full' :
                vibe === 'premium' ? 'rounded-none' :
                'rounded-lg'
              }`}
              style={{
                background: 'var(--accent)',
                color: vibe === 'developer' && mode === 'dark' ? '#0d1117' : '#fff',
                fontFamily: vibe === 'developer' ? 'var(--font-heading)' : 'var(--font-body)',
                letterSpacing: vibe === 'premium' ? '0.15em' : undefined,
                textTransform: vibe === 'premium' ? 'uppercase' : undefined,
                fontSize: vibe === 'premium' ? '0.8rem' : undefined,
              }}
            >
              {vibe === 'developer' ? '> send_email()' : vibe === 'interesting' ? 'Say Hi! 👋' : vibe === 'premium' ? 'Email' : 'Send Email'}
            </motion.a>

            <motion.a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`magnetic-btn px-8 py-4 font-medium no-underline text-base ${
                vibe === 'interesting' ? 'rounded-full' :
                vibe === 'premium' ? 'rounded-none' :
                'rounded-lg'
              }`}
              style={{
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                fontFamily: vibe === 'developer' ? 'var(--font-heading)' : 'var(--font-body)',
                letterSpacing: vibe === 'premium' ? '0.15em' : undefined,
                textTransform: vibe === 'premium' ? 'uppercase' : undefined,
                fontSize: vibe === 'premium' ? '0.8rem' : undefined,
              }}
            >
              {vibe === 'developer' ? '> open linkedin' : 'LinkedIn'}
            </motion.a>

            <motion.a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`magnetic-btn px-8 py-4 font-medium no-underline text-base ${
                vibe === 'interesting' ? 'rounded-full' :
                vibe === 'premium' ? 'rounded-none' :
                'rounded-lg'
              }`}
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                fontFamily: vibe === 'developer' ? 'var(--font-heading)' : 'var(--font-body)',
                letterSpacing: vibe === 'premium' ? '0.15em' : undefined,
                textTransform: vibe === 'premium' ? 'uppercase' : undefined,
                fontSize: vibe === 'premium' ? '0.8rem' : undefined,
              }}
            >
              {vibe === 'developer' ? '> open github' : 'GitHub'}
            </motion.a>
          </div>
        </AnimatedSection>

        {vibe === 'interesting' && (
          <AnimatedSection delay={0.4}>
            <motion.img
              src={`${import.meta.env.BASE_URL}images/anime-1.png`}
              alt=""
              className="w-24 md:w-32 mx-auto rounded-2xl opacity-80"
              whileHover={{ scale: 1.1, rotate: 5, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.3}>
          <p className="text-xs mt-16" style={{ color: 'var(--text-muted)' }}>
            {vibe === 'developer'
              ? '// Built with React + TypeScript + Framer Motion + Tailwind'
              : vibe === 'interesting'
              ? 'Made with lots of coffee and good vibes from Costa Rica ☕🌴'
              : vibe === 'premium'
              ? `\u00A9 ${new Date().getFullYear()} Keylin Wu`
              : `\u00A9 ${new Date().getFullYear()} Keylin Wu. Built with React.`}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
