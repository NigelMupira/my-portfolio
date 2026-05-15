import { Moon, Sun } from 'lucide-react'

// Navigation links config — easy to update from one place
const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

function Navbar({ darkMode, toggleTheme }) {
  return (
    // Fixed navbar — stays at top on scroll, full width, blurred background
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4
                    bg-white/80 dark:bg-gray-950/80
                    backdrop-blur-md border-b border-gray-200 dark:border-gray-800
                    transition-colors duration-300">

      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo / Name — left side */}
        <a href="#home"
           className="text-xl font-bold tracking-tight
                      text-gray-900 dark:text-white hover:text-indigo-500
                      dark:hover:text-indigo-400 transition-colors duration-200">
          nigel<span className="text-indigo-500">.</span>
        </a>

        {/* Nav links + theme toggle — right side */}
        <div className="flex items-center gap-8">

          {/* Navigation links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}
                   className="text-sm font-medium text-gray-600 dark:text-gray-400
                              hover:text-indigo-500 dark:hover:text-indigo-400
                              transition-colors duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark / Light mode toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800
                       hover:bg-gray-200 dark:hover:bg-gray-700
                       transition-colors duration-200"
            aria-label="Toggle theme">
            {darkMode
              ? <Sun  size={18} className="text-yellow-400" />
              : <Moon size={18} className="text-indigo-500" />
            }
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar