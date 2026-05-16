import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

// Fade up — reused for entrance animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Left column info items — quick contact details
const contactInfo = [
  { icon: Mail,   label: 'Email',    value: 'nigelmupira@gmail.com',  href: 'mailto:nigelmupira@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Harare, Zimbabwe', href: null },
]

function Contact() {

  // Form field state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // Submission state — idle | loading | success | error
  const [status, setStatus] = useState('idle')

  // Update a single field by key
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Submit form to Formspree endpoint
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://formspree.io/f/mgodgrea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
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
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold
                         text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
            Whether it's a job opportunity, a collaboration, or just a conversation
            about security or tech — my inbox is open.
          </p>

        </motion.div>

        {/* Two column layout — info left, form right */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left — contact info + social links */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}>

            {/* Tagline */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Let's work together
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm currently open to internship extensions, junior security
                roles, freelance pentesting engagements, and interesting dev
                collaborations. If what you're building sounds interesting,
                let's talk.
              </p>
            </div>

            {/* Contact detail items */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">

                  {/* Icon pill */}
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 shrink-0">
                    <Icon size={18} className="text-indigo-500" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                    {href
                      ? <a href={href}
                           className="text-sm font-medium text-gray-700 dark:text-gray-300
                                      hover:text-indigo-500 dark:hover:text-indigo-400
                                      transition-colors duration-200">
                          {value}
                        </a>
                      : <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {value}
                        </p>
                    }
                  </div>

                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">

              {/* GitHub */}
              <a href="https://github.com/NigelMupira" target="_blank" rel="noreferrer"
                 className="p-3 rounded-xl bg-white dark:bg-gray-800
                            border border-gray-200 dark:border-gray-700
                            text-gray-500 dark:text-gray-400
                            hover:border-indigo-400 hover:text-indigo-500
                            dark:hover:border-indigo-500 dark:hover:text-indigo-400
                            transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
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
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/nigel-mupira" target="_blank" rel="noreferrer"
                 className="p-3 rounded-xl bg-white dark:bg-gray-800
                            border border-gray-200 dark:border-gray-700
                            text-gray-500 dark:text-gray-400
                            hover:border-indigo-400 hover:text-indigo-500
                            dark:hover:border-indigo-500 dark:hover:text-indigo-400
                            transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                     viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
                           0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
                           1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
                           7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063
                           2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0
                           0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24
                           24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.6, delay: 0.15, ease: 'easeOut' } } }}>

            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800
                            border border-gray-200 dark:border-gray-700 shadow-sm">

              {/* Success state */}
              {status === 'success' ? (
                <motion.div
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}>
                  <CheckCircle size={48} className="text-green-500" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Message sent!
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Thanks for reaching out — I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs text-indigo-500 hover:underline">
                    Send another message
                  </button>
                </motion.div>

              ) : (
                // Contact form
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl text-sm
                                 bg-gray-50 dark:bg-gray-700/50
                                 border border-gray-200 dark:border-gray-600
                                 text-gray-900 dark:text-white
                                 placeholder:text-gray-400 dark:placeholder:text-gray-500
                                 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500
                                 focus:ring-2 focus:ring-indigo-400/20
                                 transition-colors duration-200"/>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm
                                 bg-gray-50 dark:bg-gray-700/50
                                 border border-gray-200 dark:border-gray-600
                                 text-gray-900 dark:text-white
                                 placeholder:text-gray-400 dark:placeholder:text-gray-500
                                 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500
                                 focus:ring-2 focus:ring-indigo-400/20
                                 transition-colors duration-200"/>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none
                                 bg-gray-50 dark:bg-gray-700/50
                                 border border-gray-200 dark:border-gray-600
                                 text-gray-900 dark:text-white
                                 placeholder:text-gray-400 dark:placeholder:text-gray-500
                                 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500
                                 focus:ring-2 focus:ring-indigo-400/20
                                 transition-colors duration-200"/>
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-sm text-red-500">
                      <AlertCircle size={15} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2
                               px-6 py-3 rounded-xl font-medium text-sm
                               bg-indigo-500 text-white
                               hover:bg-indigo-600 active:scale-95
                               disabled:opacity-60 disabled:cursor-not-allowed
                               transition-all duration-200 shadow-lg shadow-indigo-500/25">
                    {status === 'loading' ? (
                      // Spinning loader while sending
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                           fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10"
                                stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact