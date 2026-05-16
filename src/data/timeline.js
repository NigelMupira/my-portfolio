// Timeline entries — ordered newest to oldest
// type controls the badge colour: 'work' | 'education' | 'achievement' | 'event'

const timeline = [
  {
    id: 1,
    date: 'Oct 2025 – May 2026',
    title: 'Penetration Tester — Industrial Attachment',
    organisation: 'Baker Tilly Digital, Harare',
    description:
      'Completed a year-long attachment in the Cybersecurity division. ' +
      'Conducted real-world VAPT engagements across web applications, ' +
      'networks, mobile apps, and APIs for multiple clients. Delivered ' +
      'professional pentest reports with CVSS scoring and remediation guidance.',
    type: 'work',
  },
  {
    id: 3,
    date: 'Jan 2026',
    title: 'ISC2 Certified in Cybersecurity (CC) — Exam Attempt',
    organisation: 'ISC2',
    description:
      'Sat the ISC2 CC examination. A valuable experience that deepened ' +
      'my understanding of security fundamentals, risk management, and ' +
      'network security concepts. Ongoing preparation for the next attempt.',
    type: 'achievement',
  },
  {
    id: 4,
    date: 'Dec 2025',
    title: 'Advent of Cyber 2025',
    organisation: 'TryHackMe',
    description:
      'Partially completed TryHackMe\'s Advent of Cyber 2025 challenge — a 24 day challenge of ' +
      'security tasks spanning log analysis, web exploitation, forensics, ' +
      'and more. Great for staying sharp outside of client work.',
    type: 'achievement',
  },
  {
    id: 2,
    date: 'Oct 2025',
    title: 'GDG DevFest 2025 — Organiser',
    organisation: 'Google Developer Groups, Harare',
    description:
      'Helped organise one of Harare\'s biggest developer community events, ' +
      'bringing together engineers, designers, and tech enthusiasts for a ' +
      'full day of talks, workshops, and networking.',
    type: 'event',
  },
  {
    id: 6,
    date: '2024 – Present',
    title: 'CTF Practice — VulnHub & TryHackMe',
    organisation: 'Self-directed',
    description:
      'Rooted multiple VulnHub machines including Symfonos1, Necromancer, ' +
      'Earth, W34KN3SS, and Raven. Regularly practicing enumeration, ' +
      'privilege escalation, and post-exploitation techniques.',
    type: 'achievement',
  },
  {
    id: 5,
    date: '2023 – Present',
    title: 'BSc Information Security & Assurance',
    organisation: 'Harare Institute of Technology',
    description:
      'Third-year undergraduate covering network security, cryptography, ' +
      'ethical hacking, software development, and systems administration. ' +
      'Final year project and dissertation in progress.',
    type: 'education',
  },
]

export default timeline