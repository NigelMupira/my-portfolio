import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
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
                 bg-white dark:bg-gray-950 transition-colors duration-300">

      {/* Background dot grid — purely decorative */}
      <div className="absolute inset-0 pointer-events-none
                      [background-image:radial-gradient(circle,_#6366f120_1px,_transparent_1px)]
                      [background-size:32px_32px]
                      dark:[background-image:radial-gradient(circle,_#6366f130_1px,_transparent_1px)]">
      </div>

      {/* Radial gradient overlay — fades dot grid toward edges */}
      <div className="absolute inset-0 pointer-events-none
                      bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_transparent_40%,_white_100%)]
                      dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_transparent_40%,_#030712_100%)]">
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

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mt-1">

          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer"
             className="p-2 rounded-lg text-gray-500 dark:text-gray-400
                        hover:text-indigo-500 dark:hover:text-indigo-400
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        transition-colors duration-200">
            <Github size={20} />
          </a>

          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer"
             className="p-2 rounded-lg text-gray-500 dark:text-gray-400
                        hover:text-indigo-500 dark:hover:text-indigo-400
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        transition-colors duration-200">
            <Linkedin size={20} />
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