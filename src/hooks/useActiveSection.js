import { useState, useEffect } from 'react'

// Tracks which section is currently in the viewport using IntersectionObserver
// Returns the id string of the active section (e.g. 'about', 'skills')
function useActiveSection(sectionIds) {

  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Mark this section active when it crosses the threshold
          if (entry.isIntersecting) setActiveSection(id)
        },
        {
          // Trigger when 40% of the section is visible
          threshold: 0.4,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    // Clean up all observers on unmount
    return () => observers.forEach(obs => obs.disconnect())

  }, [sectionIds])

  return activeSection
}

export default useActiveSection