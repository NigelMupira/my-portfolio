import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import useTypewriter from '../hooks/useTypewriter'

// Roles that cycle through the typewriter effect
const roles = [
  'Security Researcher',
  'Penetration Tester',
  'Web Developer',
  'CTF Player',
  'Problem Solver',
]

// Framer Motion variants — staggered entrance from bottom
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function Hero() {

  const typedRole = useTypewriter(roles)

  return (
    // Full viewport hero — subtle dot-grid background for cyber aesthetic
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center
                 px-6 pt-24 pb-12 overflow-hidden
                 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">

      {/* Background dot grid — purely decorative */}
      <div className="absolute inset-0 pointer-events-none
                      bg-[radial-gradient(circle,#6366f120_1px,transparent_1px)]
                      bg-size-[32px_32px]
                      dark:bg-[radial-gradient(circle,#6366f130_1px,transparent_1px)]">
      </div>

      {/* Radial gradient overlay — fades dot grid toward edges */}
      <div className="bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#f3f4f6_100%)]
                      dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#030712_100%)]">
      </div>

      {/* Main content — staggered entrance animation */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show">

        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium
                           bg-indigo-50 text-indigo-600 border border-indigo-200
                           dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20">
            {/* Pulsing green dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block"></span>
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight
                     text-gray-900 dark:text-white">
          Hey, I'm{' '}
          <span className="text-indigo-500">Nigel</span>
        </motion.h1>

        {/* Typewriter role line */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl font-mono font-medium
                     text-gray-500 dark:text-gray-400 h-8">
          {/* Typed text + blinking cursor */}
          {typedRole}
          <span className="ml-0.5 inline-block w-0.5 h-5 bg-indigo-500 align-middle animate-pulse"></span>
        </motion.div>

        {/* Short bio */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Information Security student at{' '}
          <span className="text-indigo-500 font-medium">HIT</span>.
          Penetration tester by day, developer by night.
          I break things to understand them — then build better ones.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-2">

          {/* Primary CTA */}
          <a href="#projects"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm
                        bg-indigo-500 text-white hover:bg-indigo-600
                        transition-colors duration-200 shadow-lg shadow-indigo-500/25">
            View My Work
          </a>

          {/* CV Download */}
          <a href="/cv.pdf" download
             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm
                        border border-gray-200 dark:border-gray-700
                        text-gray-700 dark:text-gray-300
                        hover:border-indigo-400 hover:text-indigo-500
                        dark:hover:border-indigo-500 dark:hover:text-indigo-400
                        transition-colors duration-200">
            <Download size={15} />
            Download CV
          </a>

        </motion.div>

        {/* Social links — using inline SVGs since lucide removed brand icons */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mt-1">

        {/* GitHub */}
        <a href="https://github.com/NigelMupira" target="_blank" rel="noreferrer"
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400
                        hover:text-indigo-500 dark:hover:text-indigo-400
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="currentColor">
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
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/nigel-mupira" target="_blank" rel="noreferrer"
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400
                        hover:text-indigo-500 dark:hover:text-indigo-400
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
                    0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
                    1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
                    7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063
                    2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0
                    0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24
                    24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        </a>

        </motion.div>

      </motion.div>

      {/* Scroll down indicator — bounces to hint at more content below */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}>
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero