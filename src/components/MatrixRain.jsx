import { useEffect, useRef } from 'react'

// Characters used in the rain — katakana + hex for that cyber aesthetic
const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789ABCDEF</>{}[]'

const FONT_SIZE = 14

function MatrixRain({ darkMode }) {

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas  = canvasRef.current
    const ctx     = canvas.getContext('2d')

    // Size canvas to fill its container
    let width     = canvas.width  = canvas.offsetWidth
    let height    = canvas.height = canvas.offsetHeight

    // One drop per column — each starts at a random y position
    const columns = Math.floor(width / FONT_SIZE)
    const drops   = Array.from({ length: columns }, () => Math.random() * -100)

    let animId

    const draw = () => {
      // Semi-transparent fill creates the fading trail effect
      // Color matches the section background in each theme
      ctx.fillStyle = darkMode
        ? 'rgba(3, 7, 18, 0.05)'       // dark bg: gray-950
        : 'rgba(243, 244, 246, 0.08)'  // light bg: gray-100

      ctx.fillRect(0, 0, width, height)
      ctx.font = `${FONT_SIZE}px monospace`

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x    = i * FONT_SIZE

        // Head character — brighter indigo
        ctx.fillStyle = 'rgba(165, 180, 252, 0.9)' // indigo-300
        ctx.fillText(char, x, y * FONT_SIZE)

        // Trail character — dimmer indigo
        ctx.fillStyle = 'rgba(99, 102, 241, 0.4)'  // indigo-500
        ctx.fillText(
          CHARS[Math.floor(Math.random() * CHARS.length)],
          x,
          (y - 1) * FONT_SIZE
        )

        // Reset drop to top after it exits the screen
        if (y * FONT_SIZE > height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i] += 0.5 // slower fall speed — keeps it subtle
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    // Resize handler — recalculate canvas size and columns on window resize
    const handleResize = () => {
      width         = canvas.width  = canvas.offsetWidth
      height        = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }

  }, [darkMode])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      // Low opacity keeps it atmospheric without overpowering the content
      style={{ opacity: darkMode ? 0.18 : 0.07 }}
    />
  )
}

export default MatrixRain