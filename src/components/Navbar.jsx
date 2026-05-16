import { useEffect, useState } from 'react'
import { Moon, Sun, Terminal, Menu, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import useActiveSection from '../hooks/useActiveSection'

// Nav links — label shown in UI, href for scroll target, id matches section element
const navLinks = [
  { label: 'About',      href: '#about',      id: 'about'      },
  { label: 'Skills',     href: '#skills',     id: 'skills'     },
  { label: 'Projects',   href: '#projects',   id: 'projects'   },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact',    href: '#contact',    id: 'contact'    },
]

function Navbar({ darkMode, toggleTheme }) {

  const navigate      = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  // Track which section is currently in view for active link highlighting
  const activeSection = useActiveSection(navLinks.map(l => l.id))

  // Ctrl+` keyboard shortcut opens the terminal easter egg
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault()
        navigate('/terminal')
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [navigate])

  // Close mobile menu on resize to desktop width
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50
                    bg-gray-100/80 dark:bg-gray-950/80
                    backdrop-blur-md border-b border-gray-300 dark:border-gray-800
                    transition-colors duration-300">

      {/* Main navbar row */}
      <div className="px-6 py-4 max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo / Name — left side */}
        <a href="#home"
           className="text-xl font-bold tracking-tight
                      text-gray-900 dark:text-white
                      hover:text-indigo-500 dark:hover:text-indigo-400
                      transition-colors duration-200">
          nigel<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop — nav links + action buttons */}
        <div className="hidden md:flex items-center gap-8">

          {/* Navigation links with active highlight */}
          <ul className="flex items-center gap-6">
            {navLinks.map(({ label, href, id }) => {
              const isActive = activeSection === id
              return (
                <li key={label}>
                  <a href={href}
                     className={`text-sm font-medium transition-colors duration-200
                       ${isActive
                         ? 'text-indigo-500 dark:text-indigo-400'
                         : 'text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400'
                       }`}>
                    {label}
                    {/* Active underline dot indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="mt-0.5 h-0.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Terminal + theme toggle buttons */}
          <div className="flex items-center gap-2">

            <button
              onClick={() => navigate('/terminal')}
              title="Open terminal (Ctrl+`)"
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800
                         hover:bg-gray-300 dark:hover:bg-gray-700
                         transition-colors duration-200">
              <Terminal size={18} className="text-gray-500 dark:text-gray-400" />
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800
                         hover:bg-gray-300 dark:hover:bg-gray-700
                         transition-colors duration-200">
              {darkMode
                ? <Sun  size={18} className="text-yellow-400" />
                : <Moon size={18} className="text-indigo-500" />
              }
            </button>

          </div>
        </div>

        {/* Mobile — theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800
                       hover:bg-gray-300 dark:hover:bg-gray-700
                       transition-colors duration-200">
            {darkMode
              ? <Sun  size={18} className="text-yellow-400" />
              : <Moon size={18} className="text-indigo-500" />
            }
          </button>

          {/* Hamburger / close toggle */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800
                       hover:bg-gray-300 dark:hover:bg-gray-700
                       transition-colors duration-200">
            {menuOpen
              ? <X    size={18} className="text-gray-600 dark:text-gray-300" />
              : <Menu size={18} className="text-gray-600 dark:text-gray-300" />
            }
          </button>

        </div>
      </div>

      {/* Mobile dropdown menu — slides down when open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden
                       bg-gray-100/95 dark:bg-gray-950/95
                       border-t border-gray-300 dark:border-gray-800">

            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ label, href, id }) => {
                const isActive = activeSection === id
                return (
                  <li key={label}>
                    <a href={href}
                       onClick={handleLinkClick}
                       className={`flex items-center gap-2 px-3 py-2.5 rounded-lg
                                   text-sm font-medium transition-colors duration-200
                         ${isActive
                           ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 dark:text-indigo-400'
                           : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                         }`}>
                      {/* Active dot for mobile */}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                      )}
                      {label}
                    </a>
                  </li>
                )
              })}

              {/* Terminal link in mobile menu */}
              <li className="mt-2 pt-2 border-t border-gray-300 dark:border-gray-800">
                <button
                  onClick={() => { navigate('/terminal'); setMenuOpen(false) }}
                  className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg
                             text-sm font-medium text-gray-600 dark:text-gray-400
                             hover:bg-gray-200 dark:hover:bg-gray-800
                             transition-colors duration-200">
                  <Terminal size={15} />
                  Open Terminal
                </button>
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Navbar