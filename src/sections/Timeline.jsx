import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Trophy, Calendar } from 'lucide-react'
import timeline from '../data/timeline'

// Badge config — maps entry type to label, colour classes, and icon
const badgeConfig = {
  work:        { label: 'Work',        icon: Briefcase,     color: 'bg-blue-50   text-blue-600   border-blue-200   dark:bg-blue-500/10   dark:text-blue-400   dark:border-blue-500/20'   },
  education:   { label: 'Education',   icon: GraduationCap, color: 'bg-green-50  text-green-600  border-green-200  dark:bg-green-500/10  dark:text-green-400  dark:border-green-500/20'  },
  achievement: { label: 'Achievement', icon: Trophy,        color: 'bg-yellow-50 text-yellow-600 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20' },
  event:       { label: 'Event',       icon: Calendar,      color: 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20' },
}

// Individual timeline entry card
function TimelineEntry({ entry, index }) {

  const { title, organisation, date, description, type } = entry
  const { label, icon: Icon, color } = badgeConfig[type]

  // Alternate slide direction — odd entries from left, even from right
  const direction = index % 2 === 0 ? -40 : 40

  return (
    <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-center">

      {/* Dot on the centre line — visible on md and up */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2
                      w-4 h-4 rounded-full border-4
                      bg-white dark:bg-gray-950
                      border-indigo-500 z-10" />

      {/* Card — alternates left/right column based on index */}
      <motion.div
        className={`md:col-span-1 p-6 rounded-2xl
                    bg-white dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700
                    shadow-sm hover:shadow-md hover:border-indigo-300
                    dark:hover:border-indigo-500
                    transition-all duration-300
                    ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}
        initial={{ opacity: 0, x: direction }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}>

        {/* Date + type badge row */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">

          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            {date}
          </span>

          {/* Colour-coded type badge */}
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5
                            rounded-full text-xs font-medium border ${color}`}>
            <Icon size={11} />
            {label}
          </span>

        </div>

        {/* Title and organisation */}
        <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">
          {title}
        </h3>
        <p className="text-xs text-indigo-500 font-medium mt-0.5 mb-3">
          {organisation}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>

      </motion.div>

    </div>
  )
}

function Timeline() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}>

          <span className="text-xs font-semibold tracking-widest uppercase
                           text-indigo-500 dark:text-indigo-400">
            The Journey
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold
                         text-gray-900 dark:text-white">
            Experience & Milestones
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
            A timeline of where I've been, what I've done, and what I've earned along the way.
          </p>

        </motion.div>

        {/* Timeline — vertical centre line with alternating cards */}
        <div className="relative space-y-10">

          {/* Centre vertical line — visible on md and up */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2
                          top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

          {/* Render each timeline entry */}
          {timeline.map((entry, index) => (
            <TimelineEntry key={entry.id} entry={entry} index={index} />
          ))}

        </div>

      </div>
    </section>
  )
}

export default Timeline