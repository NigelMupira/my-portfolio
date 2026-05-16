import { useState, useEffect } from 'react'
import { Routes, Route }       from 'react-router-dom'
import Navbar    from './components/Navbar'
import Footer    from './components/Footer'
import Hero      from './sections/Hero'
import About     from './sections/About'
import Skills    from './sections/Skills'
import Timeline  from './sections/Timeline'
import Projects  from './sections/Projects'
import Contact   from './sections/Contact'
import Terminal  from './pages/Terminal'

// Main portfolio layout — darkMode passed to Hero for MatrixRain theming
function Portfolio({ darkMode, toggleTheme }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-950
                    dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero darkMode={darkMode} />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

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
    <Routes>
      <Route path="/"         element={<Portfolio darkMode={darkMode} toggleTheme={toggleTheme} />} />
      <Route path="/terminal" element={<Terminal />} />
    </Routes>
  )
}

export default App