// Projects data — add new projects here without touching the UI
// category: 'cyber' | 'dev'
// status: 'Complete' | 'In Progress' | 'Ongoing'

const projects = [
  {
    id: 1,
    title: 'Personal VAPT Methodology Guidebook',
    description:
      'A structured penetration testing methodology guide built from real ' +
      'client engagements during my attachment at Baker Tilly Digital. Covers ' +
      'web, network, mobile, and API testing phases with tooling references ' +
      'and reporting templates.',
    tags: ['Pentesting', 'OWASP', 'CVSS', 'Methodology', 'Documentation'],
    category: 'cyber',
    status: 'Ongoing',
    github: null,
    live: null,
  },
  {
    id: 2,
    title: 'SRC E-Voting System',
    description:
      'A full-stack electronic voting system built for a student representative ' +
      'council. Features a React frontend with Material UI, a PHP Slim Framework ' +
      'backend, and a MySQL database. Includes authentication and role-based access.',
    tags: ['React', 'PHP', 'Slim', 'MySQL', 'Material UI'],
    category: 'dev',
    status: 'In Progress',
    github: 'https://github.com/YOUR_GITHUB/src-evoting',
    live: null,
  },
  {
    id: 3,
    title: 'VulnHub Machine Writeups',
    description:
      'Documented walkthroughs of rooted VulnHub machines — Symfonos1, ' +
      'Necromancer, Earth, W34KN3SS, and Raven. Each writeup covers enumeration, ' +
      'exploitation, and privilege escalation steps with annotated screenshots.',
    tags: ['CTF', 'VulnHub', 'Linux PrivEsc', 'Enumeration', 'Exploitation'],
    category: 'cyber',
    status: 'Ongoing',
    github: 'https://github.com/YOUR_GITHUB/vulnhub-writeups',
    live: null,
  },
  {
    id: 4,
    title: 'C2 Infrastructure Lab',
    description:
      'A self-hosted home lab for experimenting with command and control ' +
      'frameworks — Havoc and Sliver. Built on VirtualBox with isolated ' +
      'network segments. Used for understanding attacker tradecraft and ' +
      'detection engineering.',
    tags: ['Havoc', 'Sliver', 'C2', 'VirtualBox', 'Red Team'],
    category: 'cyber',
    status: 'Complete',
    github: null,
    live: null,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'This site — built with React, Vite, Tailwind CSS, and Framer Motion. ' +
      'Features dark/light mode, scroll animations, a hidden terminal easter egg, ' +
      'and a fully responsive layout. Deployed on Vercel.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    category: 'dev',
    status: 'In Progress',
    github: 'https://github.com/YOUR_GITHUB/my-portfolio',
    live: 'https://YOUR_VERCEL_URL.vercel.app',
  },
]

export default projects