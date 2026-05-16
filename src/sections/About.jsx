import { motion } from 'framer-motion'
import { Shield, Code2, GraduationCap, MapPin } from 'lucide-react'

// Quick stat cards displayed in a 2x2 grid
const stats = [
  { label: 'Institution',  value: 'HIT',          icon: GraduationCap },
  { label: 'Location',     value: 'Harare, ZW',   icon: MapPin         },
  { label: 'Speciality',   value: 'Pentesting',   icon: Shield         },
  { label: 'Also Into',    value: 'Development',  icon: Code2          },
]

// Shared animation variant — fade up on scroll entry
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">

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
            Who I Am
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold
                         text-gray-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        {/* Two column layout — bio left, stats right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — bio text */}
          <motion.div
            className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}>

            <p>
              I'm a third-year{' '}
              <span className="text-indigo-500 font-medium">
                Information Security & Assurance
              </span>{' '}
              student at the Harare Institute of Technology — equal parts
              security researcher and developer, depending on the day.
            </p>

            <p>
              I recently completed a year-long industrial attachment at{' '}
              <span className="text-indigo-500 font-medium">Baker Tilly Digital</span>,
              where I worked on real-world penetration testing engagements covering
              web applications, networks, mobile apps, and APIs. That hands-on
              experience sharpened both my technical skills and the way I think
              about security at a systems level.
            </p>

            <p>
              Outside of breaking things, I build them — from full-stack web
              apps to Android projects. I believe the best security professionals
              understand how things are built, and the best developers understand
              how things get broken. I'm working to be both.
            </p>

            <p>
              When I'm not in a terminal or an IDE, I'm playing CTFs, researching
              new attack methods, and learning blue-team defenses.
            </p>

          </motion.div>

          {/* Right — stat cards grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } }
            }}>

            {stats.map(({ label, value, icon: Icon }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col items-center justify-center gap-3 p-6
                           rounded-2xl text-center
                           bg-white dark:bg-gray-800
                           border border-gray-200 dark:border-gray-700
                           shadow-sm hover:shadow-md hover:border-indigo-300
                           dark:hover:border-indigo-500
                           transition-all duration-300">

                {/* Icon in indigo pill */}
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10">
                  <Icon size={20} className="text-indigo-500" />
                </div>

                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                    {label}
                  </p>
                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About