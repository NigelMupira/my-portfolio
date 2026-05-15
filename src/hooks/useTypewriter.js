import { useState, useEffect } from 'react'

// Cycles through an array of strings with a typewriter effect
// Handles typing forward, pausing, then deleting before moving to next string
function useTypewriter(words, typingSpeed = 80, deletingSpeed = 50, pauseDuration = 1800) {

  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex]     = useState(0)
  const [isDeleting, setIsDeleting]   = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    const timeout = setTimeout(() => {

      if (!isDeleting) {
        // Still typing — add next character
        setDisplayText(currentWord.slice(0, displayText.length + 1))

        // Finished typing the word — pause then start deleting
        if (displayText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }

      } else {
        // Deleting — remove last character
        setDisplayText(currentWord.slice(0, displayText.length - 1))

        // Finished deleting — move to next word
        if (displayText.length === 0) {
          setIsDeleting(false)
          setWordIndex(prev => prev + 1)
        }
      }

    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)

  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}

export default useTypewriter