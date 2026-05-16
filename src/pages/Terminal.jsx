import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import commands from '../data/terminalCommands'

// Boot sequence lines — shown on first load with staggered delays
const BOOT_LINES = [
  '> Initialising secure shell...',
  '> Loading profile: nigel',
  '> Mounting filesystem...',
  '> All systems operational.',
  '> Type "help" to see available commands.',
  '',
]

// How long to wait between each boot line (ms)
const BOOT_DELAY = 180

function Terminal() {

  const navigate   = useNavigate()
  const inputRef   = useRef(null)   // keeps input focused
  const bottomRef  = useRef(null)   // auto-scroll anchor

  // Output history — array of { type: 'input'|'output'|'boot', text }
  const [history, setHistory]         = useState([])
  const [input, setInput]             = useState('')
  const [cmdHistory, setCmdHistory]   = useState([])   // previous commands for ↑↓ navigation
  const [historyIndex, setHistoryIndex] = useState(-1) // current position in cmdHistory
  const [booting, setBooting]         = useState(true) // true while boot sequence plays

  // Play boot sequence line by line on mount
  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      if (current < BOOT_LINES.length) {
        setHistory(prev => [...prev, { type: 'boot', text: BOOT_LINES[current] }])
        current++
      } else {
        clearInterval(interval)
        setBooting(false)
        // Focus input after boot completes
        inputRef.current?.focus()
      }
    }, BOOT_DELAY)

    return () => clearInterval(interval)
  }, [])

  // Auto-scroll to bottom whenever history updates
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  // Process a submitted command
  const processCommand = (raw) => {
    const cmd = raw.trim().toLowerCase()

    if (!cmd) return

    // Add the typed command to the visible history
    setHistory(prev => [...prev, { type: 'input', text: `visitor@nigel:~$ ${raw}` }])

    // Save to command history for ↑↓ navigation
    setCmdHistory(prev => [raw, ...prev])
    setHistoryIndex(-1)

    // Handle special commands
    if (cmd === 'clear') {
      setHistory([])
      return
    }

    if (cmd === 'exit') {
      setHistory(prev => [...prev, { type: 'output', text: '> Returning to main site...' }])
      setTimeout(() => navigate('/'), 1000)
      return
    }

    if (cmd === 'cat cv.pdf') {
      setHistory(prev => [...prev, { type: 'output', text: commands['cat cv.pdf'] }])
      setTimeout(() => window.open('/cv.pdf', '_blank'), 800)
      return
    }

    // Look up command in the commands data file
    const output = commands[cmd]

    if (output) {
      setHistory(prev => [...prev, { type: 'output', text: output }])
    } else {
      // Unknown command response
      setHistory(prev => [
        ...prev,
        { type: 'output', text: `  bash: ${cmd}: command not found\n  Type 'help' to see available commands.` }
      ])
    }
  }

  // Handle keyboard events — Enter, ↑, ↓
  const handleKeyDown = (e) => {

    if (e.key === 'Enter') {
      processCommand(input)
      setInput('')

    } else if (e.key === 'ArrowUp') {
      // Navigate backwards through command history
      e.preventDefault()
      const next = Math.min(historyIndex + 1, cmdHistory.length - 1)
      setHistoryIndex(next)
      setInput(cmdHistory[next] || '')

    } else if (e.key === 'ArrowDown') {
      // Navigate forwards through command history
      e.preventDefault()
      const next = Math.max(historyIndex - 1, -1)
      setHistoryIndex(next)
      setInput(next === -1 ? '' : cmdHistory[next])
    }
  }

  return (
    // Full screen terminal — always dark, regardless of site theme
    <div
      className="min-h-screen bg-[#0a0a0a] text-green-400 font-mono text-sm
                 flex flex-col cursor-text"
      onClick={() => inputRef.current?.focus()}>

      {/* Terminal window chrome — fake title bar */}
      <div className="flex items-center gap-2 px-4 py-3
                      bg-[#1a1a1a] border-b border-green-900/40 shrink-0">

        {/* Traffic light dots */}
        <span className="w-3 h-3 rounded-full bg-red-500/70"   />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70"/>
        <span className="w-3 h-3 rounded-full bg-green-500/70" />

        {/* Title */}
        <span className="ml-3 text-xs text-green-600 tracking-widest">
          visitor@nigel: ~
        </span>

        {/* Exit button — top right */}
        <button
          onClick={() => navigate('/')}
          className="ml-auto text-xs text-green-700 hover:text-green-400
                     transition-colors duration-200">
          ✕ exit
        </button>

      </div>

      {/* Scrollable output area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">

        {history.map((entry, i) => (
          <pre
            key={i}
            className={`whitespace-pre-wrap leading-relaxed text-xs sm:text-sm
              ${entry.type === 'input'  ? 'text-white'      : ''}
              ${entry.type === 'boot'   ? 'text-green-600'  : ''}
              ${entry.type === 'output' ? 'text-green-400'  : ''}
            `}>
            {entry.text}
          </pre>
        ))}

        {/* Input line — hidden during boot */}
        {!booting && (
          <div className="flex items-center gap-2 pt-1">
            <span className="text-white shrink-0">visitor@nigel:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              className="flex-1 bg-transparent text-green-400 outline-none
                         caret-green-400 text-xs sm:text-sm"/>
          </div>
        )}

        {/* Auto-scroll anchor */}
        <div ref={bottomRef} />

      </div>

    </div>
  )
}

export default Terminal