import { useNavigate } from 'react-router-dom'
import { Terminal, Heart } from 'lucide-react'

// Quick links mirrored from Navbar — keeps footer self-contained
const footerLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

function Footer() {

  const navigate  = useNavigate()
  const year      = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 bg-gray-200 dark:bg-gray-900
                       border-t border-gray-300 dark:border-gray-800
                       transition-colors duration-300">

      <div className="max-w-5xl mx-auto space-y-6">

        {/* Top row — name, nav links, terminal hint */}
        <div className="flex flex-col sm:flex-row items-center
                        justify-between gap-6">

          {/* Logo */}
          <a href="#home"
             className="text-lg font-bold text-gray-900 dark:text-white
                        hover:text-indigo-500 dark:hover:text-indigo-400
                        transition-colors duration-200">
            nigel<span className="text-indigo-500">.</span>
          </a>

          {/* Footer nav links */}
          <ul className="flex flex-wrap justify-center gap-5">
            {footerLinks.map(link => (
              <li key={link.label}>
                <a href={link.href}
                   className="text-xs font-medium text-gray-500 dark:text-gray-400
                              hover:text-indigo-500 dark:hover:text-indigo-400
                              transition-colors duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Terminal easter egg hint */}
          <button
            onClick={() => navigate('/terminal')}
            title="Open terminal (Ctrl+`)"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                       text-xs font-mono font-medium
                       bg-gray-300 dark:bg-gray-800
                       text-gray-500 dark:text-gray-400
                       border border-gray-400 dark:border-gray-700
                       hover:border-indigo-400 hover:text-indigo-500
                       dark:hover:border-indigo-500 dark:hover:text-indigo-400
                       transition-all duration-200">
            <Terminal size={13} />
            Ctrl + `
          </button>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-800" />

        {/* Bottom row — copyright + built with line */}
        <div className="flex flex-col sm:flex-row items-center
                        justify-between gap-2 text-xs text-gray-400 dark:text-gray-600">

          <p>© {year} Nigel. All rights reserved.</p>

          <p className="inline-flex items-center gap-1">
            Built with
            <Heart size={11} className="text-red-400 fill-red-400 mx-0.5" />
            using React, Tailwind & Framer Motion
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer