import { useState, useEffect } from 'react'
import Navbar  from './components/Navbar'
import Hero    from './sections/Hero'
import About   from './sections/About'
import Skills  from './sections/Skills'
import Timeline from './sections/Timeline'

function App() {

  // Track dark mode state — defaults to dark theme
  const [darkMode, setDarkMode] = useState(true)

  // Apply or remove 'dark' class on <html> whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Toggle between dark and light mode
  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    // Main wrapper — colors transition smoothly on theme toggle
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Timeline />
    </div>
  )
}

export default App