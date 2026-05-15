import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {

  // Track dark mode state — default to dark theme
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
    // Main wrapper — bg and text color respond to dark/light mode
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  )
}

export default App