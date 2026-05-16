// All terminal commands and their output
// Add new commands here — the terminal picks them up automatically

const commands = {

  help: `
AVAILABLE COMMANDS
──────────────────────────────────────────
  whoami        Learn about the human behind the keyboard
  skills        List technical skills and tools
  projects      Browse projects
  experience    Work and education history
  contact       Get in touch
  social        Links to GitHub and LinkedIn
  secret        ...you didn't see this
  clear         Clear the terminal
  exit          Return to the main site
──────────────────────────────────────────
Type any command and press Enter.
`,

  whoami: `
  ███╗   ██╗██╗ ██████╗ ███████╗██╗
  ████╗  ██║██║██╔════╝ ██╔════╝██║
  ██╔██╗ ██║██║██║  ███╗█████╗  ██║
  ██║╚██╗██║██║██║   ██║██╔══╝  ██║
  ██║ ╚████║██║╚██████╔╝███████╗███████╗
  ╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚══════╝╚══════╝

  Name      : Nigel
  Role      : Security Researcher & Developer
  Degree    : BTech Information Security & Assurance
  School    : Harare Institute of Technology
  Location  : Harare, Zimbabwe
  Status    : Open to opportunities

  I break systems for a living and build them for fun.
  Or is it the other way around? I forget.
`,

  skills: `
CYBERSECURITY
─────────────────────────────────────────
  [████████░░]  Web App Penetration Testing   85%
  [███████░░░]  Network Penetration Testing   75%
  [████░░░░░░]  Mobile App Security           45%
  [██░░░░░░░░]  API Security Testing          25%
  [████████░░]  Vulnerability Assessment      80%
  [████████░░]  Report Writing / CVSS         85%

DEVELOPMENT
─────────────────────────────────────────
  [███████░░░]  React / Vite                  75%
  [███████░░░]  Java / Android Dev            70%
  [█████░░░░░]  Python                        55%
  [██████░░░░]  PHP / Slim Framework          65%
  [█████░░░░░]  Go                            55%
  [███████░░░]  MySQL / Databases             70%

TOOLS
─────────────────────────────────────────
  Kali Linux • Burp Suite • Nmap • Metasploit
  MobSF • Wireshark • Havoc C2 • Sliver C2
  Android Studio • VirtualBox • Git
`,

  projects: `
PROJECTS
─────────────────────────────────────────
  [~] Personal VAPT Methodology Guidebook
      Structured pentest methodology from real engagements
      Stack: Documentation, OWASP, CVSS

  [~] SRC E-Voting System
      Full-stack student council voting platform
      Stack: React, PHP, Slim, MySQL, Material UI

  [~] VulnHub Machine Writeups
      Documented roots: Symfonos1, Necromancer,
      Earth, W34KN3SS, Raven
      Stack: CTF, Linux PrivEsc, Exploitation

  [✓] C2 Infrastructure Lab
      Home lab for Havoc and Sliver C2 frameworks
      Stack: VirtualBox, Red Team, Detection

  [~] This Portfolio
      You're looking at it.
      Stack: React, Vite, Tailwind, Framer Motion

  [✓] = Complete   [~] = In Progress / Ongoing
`,

  experience: `
EXPERIENCE & MILESTONES
─────────────────────────────────────────
  2023 – Present
  ↳ BSc Information Security & Assurance
    Harare Institute of Technology

  Oct 2025 – May 2026
  ↳ Penetration Tester — Industrial Attachment
    Baker Tilly Digital, Harare
    Web • Network • Mobile • API pentesting

  Oct 2025
  ↳ GDG DevFest 2025 — Event Organiser
    Google Developer Groups, Harare

  Dec 2025
  ↳ Advent of Cyber 2025
    TryHackMe — Completed all 24 days

  Jan 2026
  ↳ ISC2 CC Exam Attempt
    Ongoing preparation for next attempt

  2024 – Present
  ↳ VulnHub CTF Practice
    Rooted: Symfonos1, Necromancer, Earth,
    W34KN3SS, Raven
`,

  contact: `
CONTACT
─────────────────────────────────────────
  Email     : nigelmupira@gmail.com
  Location  : Harare, Zimbabwe

  Or use the contact form on the main site.
  Type 'exit' to go back.
`,

  social: `
SOCIAL LINKS
─────────────────────────────────────────
  GitHub    : https://github.com/nigel-mupira
  LinkedIn  : https://linkedin.com/in/NigelMupira

  (Ctrl+Click to open links in your terminal)
`,

  secret: `
  ...so you found this.

  Most people just scroll a portfolio.
  You dug deeper. That's the kind of
  curiosity that makes a good hacker.

  No flag here though.
  The real treasure was the enumeration
  skills we built along the way.

  (But seriously — let's work together.
   Type 'contact' to reach out.)
`,

  sudo: `
  [sudo] password for visitor:
  Sorry, you are not in the sudoers file.
  This incident will be reported.

  (just kidding)
`,

  ls: `
  drwxr-xr-x  about/
  drwxr-xr-x  skills/
  drwxr-xr-x  projects/
  drwxr-xr-x  experience/
  drwxr-xr-x  contact/
  -rw-r--r--  secret.txt
  -rw-r--r--  cv.pdf

  Hint: try 'cat secret.txt'
`,

  'cat secret.txt': `
  Redirecting to 'secret' command...
  `,

  'cat cv.pdf': `
  Binary file detected. Opening in browser...
  (Make sure cv.pdf is in your /public folder)
`,

}

export default commands