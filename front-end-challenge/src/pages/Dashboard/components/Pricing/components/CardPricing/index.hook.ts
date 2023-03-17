import { useEffect, useState } from 'react'
const useIndex = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('card')

      if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (elementPosition < windowHeight) setIsVisible(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isVisible }
}

export default useIndex
