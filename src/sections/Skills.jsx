import { motion } from 'framer-motion'
import { Shield, Code2 } from 'lucide-react'
import {
  cyberSkills, devSkills,
  cyberTools,  devTools
} from '../data/skills'

// Fade up — reused across both columns
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Animated skill bar — grows from 0 to target level on scroll entry
function SkillBar({ name, level, index }) {
  return (
    <motion.div
      className="space-y-1.5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -20 },
        show:   { opacity: 1, x: 0, transition: { duration: 0.4, delay: index * 0.08 } }
      }}>

      {/* Skill name and percentage */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span className="text-xs font-mono text-indigo-500">
          {level}%
        </span>
      </div>

      {/* Bar track */}
      <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-950 overflow-hidden">
        {/* Animated fill */}
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-indigo-500 to-indigo-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
        />
      </div>

    </motion.div>
  )
}

// Tool badge pill
function ToolBadge({ name }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium
                     bg-gray-100 text-gray-600 border border-gray-200
                     dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700
                     hover:border-indigo-400 hover:text-indigo-500
                     dark:hover:border-indigo-500 dark:hover:text-indigo-400
                     transition-colors duration-200 cursor-default">
      {name}
    </span>
  )
}

// Column card wrapping a skill category (Cyber or Dev)
function SkillColumn({ icon: Icon, title, accent, skills, tools }) {
  return (
    <motion.div
      className="flex flex-col gap-8 p-8 rounded-2xl
                 bg-white dark:bg-gray-800
                 border border-gray-200 dark:border-gray-700
                 shadow-sm"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}>

      {/* Column header */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10">
          <Icon size={22} className="text-indigo-500" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">
            {title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {accent}
          </p>
        </div>
      </div>

      {/* Animated skill bars */}
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} index={i} />
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 dark:border-gray-700" />

      {/* Tool badge pills */}
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase
                      text-gray-400 dark:text-gray-500 mb-3">
          Tools & Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map(tool => (
            <ToolBadge key={tool} name={tool} />
          ))}
        </div>
      </div>

    </motion.div>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">

      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <motion.div
          className="mb-14 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>

          <span className="text-xs font-semibold tracking-widest uppercase
                           text-indigo-500 dark:text-indigo-400">
            What I Bring
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold
                         text-gray-900 dark:text-white">
            Skills & Tools
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
            Two disciplines, one mindset — I approach both security and
            development with the same obsessive attention to detail.
          </p>

        </motion.div>

        {/* Two column grid — Cyber | Dev */}
        <div className="grid md:grid-cols-2 gap-8">

          <SkillColumn
            icon={Shield}
            title="Cybersecurity"
            accent="Offense-focused, defense-aware"
            skills={cyberSkills}
            tools={cyberTools}
          />

          <SkillColumn
            icon={Code2}
            title="Development"
            accent="Full-stack, mobile & beyond"
            skills={devSkills}
            tools={devTools}
          />

        </div>
      </div>
    </section>
  )
}

export default Skills