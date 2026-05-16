import { useEffect } from 'react'
import { Moon, Sun, Terminal } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Navigation links config — update labels/hrefs here as sections are added
const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

function Navbar({ darkMode, toggleTheme }) {

  const navigate = useNavigate()

  // Global keyboard shortcut — Ctrl+` opens the terminal easter egg
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

  return (
    // Fixed navbar — stays at top on scroll, frosted glass effect
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4
                    bg-gray-100/80 dark:bg-gray-950/80
                    backdrop-blur-md border-b border-gray-300 dark:border-gray-800
                    transition-colors duration-300">

      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo / Name — left side */}
        <a href="#home"
           className="text-xl font-bold tracking-tight
                      text-gray-900 dark:text-white
                      hover:text-indigo-500 dark:hover:text-indigo-400
                      transition-colors duration-200">
          nigel<span className="text-indigo-500">.</span>
        </a>

        {/* Nav links + action buttons — right side */}
        <div className="flex items-center gap-8">

          {/* Navigation links — hidden on mobile */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}
                   className="text-sm font-medium text-gray-500 dark:text-gray-400
                              hover:text-indigo-500 dark:hover:text-indigo-400
                              transition-colors duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action buttons — terminal shortcut + theme toggle */}
          <div className="flex items-center gap-2">

            {/* Terminal easter egg button — subtle hint for curious visitors */}
            <button
              onClick={() => navigate('/terminal')}
              title="Open terminal (Ctrl+`)"
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800
                         hover:bg-gray-300 dark:hover:bg-gray-700
                         transition-colors duration-200">
              <Terminal size={18} className="text-gray-500 dark:text-gray-400" />
            </button>

            {/* Dark / Light mode toggle */}
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
      </div>
    </nav>
  )
}

export default Navbar