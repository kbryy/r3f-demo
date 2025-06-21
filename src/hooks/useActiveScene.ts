import { useState } from 'react'

export const useActiveScene = (initialScene = 'readme') => {
  const [activeScene, setActiveScene] = useState(initialScene)
  return {
    activeScene,
    setActiveScene,
  }
}
