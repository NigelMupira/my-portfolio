import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Circle } from 'lucide-react'
import projects from '../data/projects'

// Filter tab options
const filters = [
  { label: 'All',            value: 'all'  },
  { label: 'Cybersecurity',  value: 'cyber' },
  { label: 'Development',    value: 'dev'  },
]

// Status badge colour mapping
const statusConfig = {
  'Complete':    'bg-green-50  text-green-600  border-green-200  dark:bg-green-500/10  dark:text-green-400  dark:border-green-500/20',
  'In Progress': 'bg-yellow-50 text-yellow-600 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20',
  'Ongoing':     'bg-blue-50   text-blue-600   border-blue-200   dark:bg-blue-500/10   dark:text-blue-400   dark:border-blue-500/20',
}

// Individual project card
function ProjectCard({ project }) {

  const { title, description, tags, status, github, live } = project

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col justify-between p-6 rounded-2xl
                 bg-gray-100 dark:bg-gray-950
                 border border-gray-200 dark:border-gray-700
                 shadow-sm hover:shadow-md hover:border-indigo-300
                 dark:hover:border-indigo-500
                 transition-all duration-300 group">

      {/* Top — title, status badge, description */}
      <div className="space-y-3">

        {/* Title row + status badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug
                         group-hover:text-indigo-500 dark:group-hover:text-indigo-400
                         transition-colors duration-200">
            {title}
          </h3>
          <span className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5
                            rounded-full text-xs font-medium border ${statusConfig[status]}`}>
            <Circle size={6} fill="currentColor" />
            {status}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>

      </div>

      {/* Bottom — tags and links */}
      <div className="mt-5 space-y-4">

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span key={tag}
                  className="px-2 py-0.5 rounded-md text-xs font-medium
                             bg-gray-100 text-gray-500
                             dark:bg-gray-700 dark:text-gray-400">
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub and Live links — only render if URL exists */}
        {(github || live) && (
          <div className="flex items-center gap-3 pt-1
                          border-t border-gray-100 dark:border-gray-700">

            {github && (
              <a href={github} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-1.5 text-xs font-medium
                            text-gray-500 dark:text-gray-400
                            hover:text-indigo-500 dark:hover:text-indigo-400
                            transition-colors duration-200">
                {/* Inline SVG — lucide removed brand icons */}
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                     viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                           0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757
                           -1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835
                           2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466
                           -5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322
                           3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552
                           3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22
                           0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015
                           3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Source
              </a>
            )}

            {live && (
              <a href={live} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-1.5 text-xs font-medium
                            text-gray-500 dark:text-gray-400
                            hover:text-indigo-500 dark:hover:text-indigo-400
                            transition-colors duration-200">
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}

          </div>
        )}

      </div>
    </motion.div>
  )
}

function Projects() {

  // Active filter — controls which projects are shown
  const [activeFilter, setActiveFilter] = useState('all')

  // Filter projects based on active tab
  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">

      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}>

          <span className="text-xs font-semibold tracking-widest uppercase
                           text-indigo-500 dark:text-indigo-400">
            What I've Built
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold
                         text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
            A mix of security research, CTF work, and software projects —
            some finished, some always evolving.
          </p>

        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl
                          bg-gray-100 dark:bg-gray-800">
            {filters.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeFilter === value
                    ? 'bg-white dark:bg-gray-700 text-indigo-500 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Project cards grid — AnimatePresence handles filter transitions */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects