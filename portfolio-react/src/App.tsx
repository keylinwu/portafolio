import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { BubbleBackground } from './components/common/BubbleBackground'
import { ThemeSwitcher } from './components/common/ThemeSwitcher'
import { ScrollProgress } from './components/common/ScrollProgress'
import { CursorGlow } from './components/common/CursorGlow'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <CursorGlow />
      <BubbleBackground />
      <div className="grain-overlay" />
      <Navbar />
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ThemeSwitcher />
    </ThemeProvider>
  )
}

export default App
